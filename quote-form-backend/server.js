// server.js (quote-form-backend/server.js) - FINAL PRODUCTION-READY VERSION
// This version handles the 'duplicate_parameter' error from Brevo gracefully.
// Make sure to provide the whole completed code no trancuating or commenting out any code ok

import express from 'express';
import multer from 'multer';
import dotenv from 'dotenv';
import cors from 'cors';
import SibApiV3Sdk from 'sib-api-v3-sdk';

// --- Configuration ---
dotenv.config();
const app = express();
const port = 4000;

if (!process.env.BREVO_API_KEY) {
    console.error("\nFATAL ERROR: BREVO_API_KEY is not defined in your .env file.");
    process.exit(1);
}

// --- Middleware ---
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer setup
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// --- BREVO API CONFIGURATION ---
let defaultClient = SibApiV3Sdk.ApiClient.instance;
let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_KEY;

const transactionalEmailsApi = new SibApiV3Sdk.TransactionalEmailsApi();
const contactsApi = new SibApiV3Sdk.ContactsApi();
console.log("Brevo API client configured successfully.");

// --- API Route to Handle Form Submission ---
app.post('/api/submit-quote', upload.array('quoteFiles'), async (req, res) => {
    console.log('API endpoint hit. Receiving data...');

    try {
        const { selectedService } = req.body;
        const projectDetails = JSON.parse(req.body.projectDetails);
        const contactDetails = JSON.parse(req.body.contactDetails);
        const files = req.files;

        console.log('Contact:', contactDetails.email);
        console.log('Files received:', files.length);

        // --- 2. Add or Update Contact (with Graceful Error Handling) ---
        console.log('Adding/Updating contact in Brevo...');
        try {
            let createContact = new SibApiV3Sdk.CreateContact();
            createContact.email = contactDetails.email;
            createContact.attributes = {
                'FIRSTNAME': contactDetails.firstName,
                'LASTNAME': contactDetails.lastName,
                'SMS': contactDetails.phone.replace(/\s/g, ''),
                'COMPANY': contactDetails.company,
                'JOBTITLE': contactDetails.jobTitle,
                'INDUSTRY': contactDetails.industry,
                'WHATSAPP_OPTIN': contactDetails.whatsappNotifications,
            };
            createContact.updateEnabled = true;

            await contactsApi.createContact(createContact);
            console.log('Contact processing successful.');

        } catch (contactError) {
            // THIS IS THE NEW, SMARTER ERROR HANDLING
            if (contactError.response && contactError.response.body.code === 'duplicate_parameter') {
                console.warn('---');
                console.warn(`WARNING: Contact for ${contactDetails.email} was not updated because the phone number is already in use by another contact.`);
                console.warn('The quote process will continue, but please resolve the duplicate in your Brevo dashboard.');
                console.warn('---');
            } else {
                // If it's a different error, we still want the whole process to fail.
                throw contactError;
            }
        }

        // --- 3. Send Admin Notification Email ---
        // This code will now run even if there was a duplicate phone number.
        console.log('Sending admin notification email...');
        let sendSmtpEmailAdmin = new SibApiV3Sdk.SendSmtpEmail();
        
        sendSmtpEmailAdmin.to = [{ email: process.env.ADMIN_EMAIL, name: 'Admin Team' }];
        sendSmtpEmailAdmin.sender = { email: process.env.SENDER_EMAIL_BOT, name: 'Impact Innovations Quote Bot' };
        sendSmtpEmailAdmin.subject = `New Quote Request: ${selectedService} from ${contactDetails.company}`;
        sendSmtpEmailAdmin.htmlContent = `
            <h1>New Quote Request Received</h1>
            <p>A new quote request has been submitted through the website.</p>
            <h2>Contact Details</h2>
            <ul>
                <li><strong>Name:</strong> ${contactDetails.firstName} ${contactDetails.lastName}</li>
                <li><strong>Company:</strong> ${contactDetails.company}</li>
                <li><strong>Job Title:</strong> ${contactDetails.jobTitle || 'N/A'}</li>
                <li><strong>Industry:</strong> ${contactDetails.industry || 'N/A'}</li>
                <li><strong>Email:</strong> ${contactDetails.email}</li>
                <li><strong>Phone:</strong> ${contactDetails.phone}</li>
                <li><strong>Address:</strong> ${contactDetails.address || 'N/A'}</li>
            </ul>
            <h2>Selected Service</h2>
            <p><strong>${selectedService}</strong></p>
            <h2>Project Details</h2>
            <ul>
                <li><strong>Material:</strong> ${projectDetails.material || 'N/A'}</li>
                <li><strong>Quantity:</strong> ${projectDetails.quantity || 'N/A'}</li>
                <li><strong>Timeline:</strong> ${projectDetails.timeline || 'N/A'}</li>
                <li><strong>Dimensions (L x W x H):</strong> ${projectDetails.dimensions.length || '-'} x ${projectDetails.dimensions.width || '-'} x ${projectDetails.dimensions.height || '-'} ${projectDetails.dimensions.unit}</li>
            </ul>
            <h3>Special Requirements:</h3>
            <p>${projectDetails.requirements.replace(/\n/g, '<br>') || 'None'}</p>
            <hr>
            <p><strong>${files.length} file(s) are attached to this email.</strong></p>
        `;
        sendSmtpEmailAdmin.attachment = files.map(file => ({
            name: file.originalname,
            content: file.buffer.toString('base64'),
        }));

        await transactionalEmailsApi.sendTransacEmail(sendSmtpEmailAdmin);
        console.log('Admin email sent successfully.');

        // --- 4. Send User Confirmation Email ---
        if (contactDetails.emailNotifications) {
            console.log('Sending confirmation email to user...');
            let sendSmtpEmailUser = new SibApiV3Sdk.SendSmtpEmail();

            sendSmtpEmailUser.to = [{ email: contactDetails.email, name: `${contactDetails.firstName} ${contactDetails.lastName}` }];
            sendSmtpEmailUser.sender = { email: process.env.SENDER_EMAIL_SUPPORT, name: 'Impact Innovations Support' };
            sendSmtpEmailUser.subject = 'We have received your quote request!';
            sendSmtpEmailUser.htmlContent = `
                <h1>Thank You, ${contactDetails.firstName}!</h1>
                <p>We've successfully received your quote request for the <strong>${selectedService}</strong> service. Our team is now reviewing your requirements.</p>
                <p>You can expect to receive a detailed quote at this email address within <strong>2-4 business hours</strong>.</p>
                <p>If you have any urgent questions, please feel free to reply to this email or call us.</p>
                <br>
                <p>Best regards,</p>
                <p>The Team at Impact Innovations</p>
            `;
            await transactionalEmailsApi.sendTransacEmail(sendSmtpEmailUser);
            console.log('User confirmation email sent successfully.');
        }

        // --- 5. Send Success Response to React ---
        res.status(200).json({ message: 'Quote request submitted successfully!' });

    } catch (error) {
        console.error('An error occurred in /api/submit-quote:', error.response ? error.response.body : error);
        res.status(500).json({ message: 'An error occurred on the server. Please try again.' });
    }
});

// --- Start Server ---
app.listen(port, () => {
    console.log(`Backend server is running at http://localhost:${port}`);
});
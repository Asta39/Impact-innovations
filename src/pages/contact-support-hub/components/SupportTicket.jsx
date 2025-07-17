import React, { useState } from 'react';

import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const SupportTicket = () => {
  const [ticketId, setTicketId] = useState('');
  const [ticketData, setTicketData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Mock ticket data
  const mockTickets = {
    'II-123456': {
      id: 'II-123456',
      subject: 'Quote Request for Steel Cutting',
      status: 'in_progress',
      priority: 'medium',
      created: '2025-01-15T10:30:00Z',
      updated: '2025-01-16T14:20:00Z',
      assignedTo: 'John Kamau',
      category: 'quote',
      messages: [
        {
          id: 1,
          sender: 'You',
          message: 'I need a quote for cutting 50 pieces of 3mm steel plates with custom designs.',
          timestamp: '2025-01-15T10:30:00Z',
          type: 'customer'
        },
        {
          id: 2,
          sender: 'John Kamau',
          message: 'Thank you for your inquiry. Could you please share the design files and specify the steel grade you prefer?',
          timestamp: '2025-01-15T11:45:00Z',
          type: 'support'
        },
        {
          id: 3,
          sender: 'You',
          message: 'I have attached the DXF files. Please use mild steel grade.',
          timestamp: '2025-01-15T14:20:00Z',
          type: 'customer'
        },
        {
          id: 4,
          sender: 'John Kamau',
          message: 'Files received. We are preparing your detailed quote and will send it within 2 hours.',
          timestamp: '2025-01-16T14:20:00Z',
          type: 'support'
        }
      ]
    },
    'II-789012': {
      id: 'II-789012',
      subject: 'Technical Support - Laser Cut Quality',
      status: 'resolved',
      priority: 'high',
      created: '2025-01-10T09:15:00Z',
      updated: '2025-01-12T16:30:00Z',
      assignedTo: 'Sarah Wanjiku',
      category: 'support',
      messages: [
        {
          id: 1,
          sender: 'You',
          message: 'The laser cut edges on my recent order seem rough. Can you help?',
          timestamp: '2025-01-10T09:15:00Z',
          type: 'customer'
        },
        {
          id: 2,
          sender: 'Sarah Wanjiku',
          message: 'I apologize for the quality issue. Can you send photos of the affected pieces?',
          timestamp: '2025-01-10T10:30:00Z',
          type: 'support'
        },
        {
          id: 3,
          sender: 'Sarah Wanjiku',
          message: 'After reviewing the photos, we will re-cut the affected pieces at no charge. They will be ready tomorrow.',
          timestamp: '2025-01-12T16:30:00Z',
          type: 'support'
        }
      ]
    }
  };

  const handleTicketSearch = async () => {
    if (!ticketId.trim()) {
      setError('Please enter a ticket ID');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    const ticket = mockTickets[ticketId.toUpperCase()];
    if (ticket) {
      setTicketData(ticket);
    } else {
      setError('Ticket not found. Please check your ticket ID and try again.');
      setTicketData(null);
    }

    setIsLoading(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'open': return 'text-warning bg-warning/10';
      case 'in_progress': return 'text-primary bg-primary/10';
      case 'resolved': return 'text-success bg-success/10';
      case 'closed': return 'text-muted-foreground bg-muted';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'low': return 'text-muted-foreground bg-muted';
      case 'medium': return 'text-warning bg-warning/10';
      case 'high': return 'text-error bg-error/10';
      case 'urgent': return 'text-error bg-error/20';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-KE', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'open': return 'Open';
      case 'in_progress': return 'In Progress';
      case 'resolved': return 'Resolved';
      case 'closed': return 'Closed';
      default: return status;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Track Your Support Ticket
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enter your ticket ID to check the status of your inquiry and view all communication history.
          </p>
        </div>

        {/* Ticket Search */}
        <div className="bg-muted/30 rounded-xl p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                label="Ticket ID"
                type="text"
                placeholder="Enter your ticket ID (e.g., II-123456)"
                value={ticketId}
                onChange={(e) => setTicketId(e.target.value)}
                error={error}
                description="You can find your ticket ID in the confirmation email"
              />
            </div>
            <div className="flex items-end">
              <Button
                onClick={handleTicketSearch}
                loading={isLoading}
                iconName="Search"
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                {isLoading ? 'Searching...' : 'Track Ticket'}
              </Button>
            </div>
          </div>

          {/* Sample Ticket IDs */}
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground mb-2">
              Try these sample ticket IDs:
            </p>
            <div className="flex flex-wrap gap-2">
              {Object.keys(mockTickets).map((id) => (
                <button
                  key={id}
                  onClick={() => setTicketId(id)}
                  className="px-3 py-1 bg-white border border-border rounded text-sm text-primary hover:bg-primary/5 transition-colors"
                >
                  {id}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Ticket Details */}
        {ticketData && (
          <div className="bg-white border border-border rounded-xl overflow-hidden">
            {/* Ticket Header */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 border-b border-border">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {ticketData.subject}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>Ticket ID: <strong>{ticketData.id}</strong></span>
                    <span>Created: {formatDate(ticketData.created)}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(ticketData.status)}`}>
                    {getStatusLabel(ticketData.status)}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(ticketData.priority)}`}>
                    {ticketData.priority.charAt(0).toUpperCase() + ticketData.priority.slice(1)} Priority
                  </span>
                </div>
              </div>
            </div>

            {/* Ticket Info */}
            <div className="p-6 border-b border-border">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-medium text-foreground">Assigned To:</span>
                  <p className="text-muted-foreground">{ticketData.assignedTo}</p>
                </div>
                <div>
                  <span className="font-medium text-foreground">Category:</span>
                  <p className="text-muted-foreground capitalize">{ticketData.category}</p>
                </div>
                <div>
                  <span className="font-medium text-foreground">Last Updated:</span>
                  <p className="text-muted-foreground">{formatDate(ticketData.updated)}</p>
                </div>
              </div>
            </div>

            {/* Message History */}
            <div className="p-6">
              <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
                Message History
              </h4>
              
              <div className="space-y-4">
                {ticketData.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'customer' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-2xl ${
                      message.type === 'customer' ?'bg-primary/10 border-primary/20' :'bg-muted/50 border-border'
                    } border rounded-lg p-4`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-sm font-medium ${
                          message.type === 'customer' ? 'text-primary' : 'text-foreground'
                        }`}>
                          {message.sender}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {formatDate(message.timestamp)}
                        </span>
                      </div>
                      <p className="text-sm text-foreground">
                        {message.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 bg-muted/30 border-t border-border">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  iconName="MessageCircle"
                  iconPosition="left"
                  onClick={() => window.open('https://wa.me/254700123456', '_blank')}
                >
                  Continue on WhatsApp
                </Button>
                <Button
                  variant="outline"
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => window.location.href = 'tel:+254700123456'}
                >
                  Call Support
                </Button>
                <Button
                  variant="outline"
                  iconName="Mail"
                  iconPosition="left"
                  onClick={() => window.location.href = `mailto:support@impactinnovations.co.ke?subject=Re: ${ticketData.id}`}
                >
                  Email Reply
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 text-center">
          <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
            Need Immediate Help?
          </h3>
          <p className="text-muted-foreground mb-6">
            For urgent matters, contact us directly through phone or WhatsApp for faster response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.location.href = 'tel:+254700123456'}
              iconName="Phone"
              iconPosition="left"
            >
              Call +254 700 123 456
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open('https://wa.me/254700123456', '_blank')}
              iconName="MessageCircle"
              iconPosition="left"
              className="text-green-600 border-green-600 hover:bg-green-600 hover:text-white"
            >
              WhatsApp Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportTicket;
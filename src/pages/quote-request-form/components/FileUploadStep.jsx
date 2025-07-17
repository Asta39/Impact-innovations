import React, { useState, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FileUploadStep = ({ files, onFilesChange, onNext, onPrevious }) => {
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const acceptedFormats = [
    '.pdf', '.dwg', '.dxf', '.step', '.stp', '.iges', '.igs',
    '.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff',
    '.doc', '.docx', '.txt', '.rtf'
  ];

  const maxFileSize = 10 * 1024 * 1024; // 10MB
  const maxFiles = 5;

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (fileList) => {
    const newFiles = Array.from(fileList);
    const validFiles = [];
    const errors = [];

    newFiles.forEach((file) => {
      // Check file count
      if (files.length + validFiles.length >= maxFiles) {
        errors.push(`Maximum ${maxFiles} files allowed`);
        return;
      }

      // Check file size
      if (file.size > maxFileSize) {
        errors.push(`${file.name} is too large (max 10MB)`);
        return;
      }

      // Check file format
      const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
      if (!acceptedFormats.includes(fileExtension)) {
        errors.push(`${file.name} format not supported`);
        return;
      }

      // Check for duplicates
      if (files.some(f => f.name === file.name) || validFiles.some(f => f.name === file.name)) {
        errors.push(`${file.name} already added`);
        return;
      }

      validFiles.push({
        file,
        name: file.name,
        size: file.size,
        type: file.type,
        id: Date.now() + Math.random()
      });
    });

    if (validFiles.length > 0) {
      onFilesChange([...files, ...validFiles]);
    }

    if (errors.length > 0) {
      alert(errors.join('\n'));
    }
  };

  const removeFile = (fileId) => {
    onFilesChange(files.filter(f => f.id !== fileId));
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    switch (extension) {
      case 'pdf':
        return 'FileText';
      case 'dwg': case'dxf': case'step': case'stp': case'iges': case'igs':
        return 'Box';
      case 'jpg': case'jpeg': case'png': case'gif': case'bmp': case'tiff':
        return 'Image';
      case 'doc': case'docx':
        return 'FileText';
      default:
        return 'File';
    }
  };

  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-6">
      {/* Step Header */}
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-2">
          Upload Files
        </h2>
        <p className="text-muted-foreground">
          Share your design files, drawings, or reference images (optional)
        </p>
      </div>

      {/* Upload Zone */}
      <div
        className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
          dragActive
            ? 'border-primary bg-primary/5' :'border-border bg-muted/30 hover:border-primary/50 hover:bg-primary/5'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleChange}
          accept={acceptedFormats.join(',')}
          className="hidden"
        />

        <div className="space-y-4">
          <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
            dragActive ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
          }`}>
            <Icon 
              name="Upload" 
              size={32} 
              color={dragActive ? 'white' : 'currentColor'} 
            />
          </div>

          <div>
            <h3 className="text-lg font-medium text-foreground mb-2">
              {dragActive ? 'Drop files here' : 'Drag & drop files here'}
            </h3>
            <p className="text-muted-foreground mb-4">
              or click to browse your computer
            </p>
            <Button
              variant="outline"
              size="lg"
              iconName="FolderOpen"
              iconPosition="left"
              onClick={onButtonClick}
            >
              Browse Files
            </Button>
          </div>

          <div className="text-xs text-muted-foreground space-y-1">
            <p>Supported formats: PDF, DWG, DXF, STEP, IGES, Images, Documents</p>
            <p>Maximum file size: 10MB • Maximum files: {maxFiles}</p>
          </div>
        </div>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground flex items-center">
            <Icon name="Paperclip" size={20} className="mr-2" />
            Uploaded Files ({files.length}/{maxFiles})
          </h3>

          <div className="space-y-3">
            {files.map((fileItem) => (
              <div
                key={fileItem.id}
                className="flex items-center justify-between p-4 bg-white border border-border rounded-lg hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon 
                      name={getFileIcon(fileItem.name)} 
                      size={20} 
                      color="var(--color-primary)" 
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {fileItem.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatFileSize(fileItem.size)}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="X"
                  onClick={() => removeFile(fileItem.id)}
                  className="text-error hover:text-error hover:bg-error/10 flex-shrink-0"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* File Guidelines */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 mb-2 flex items-center">
          <Icon name="Info" size={16} className="mr-2" color="#1e40af" />
          File Upload Guidelines
        </h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• CAD files (DWG, DXF, STEP) provide the most accurate quotes</li>
          <li>• Include technical drawings with dimensions when possible</li>
          <li>• Reference images help us understand your requirements</li>
          <li>• Multiple file formats can be uploaded simultaneously</li>
          <li>• Files are securely stored and only used for your quote</li>
        </ul>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-6">
        <Button
          variant="outline"
          size="lg"
          iconName="ArrowLeft"
          iconPosition="left"
          onClick={onPrevious}
          className="min-w-32"
        >
          Previous
        </Button>
        <Button
          variant="default"
          size="lg"
          iconName="ArrowRight"
          iconPosition="right"
          onClick={onNext}
          className="min-w-32"
        >
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default FileUploadStep;
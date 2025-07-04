import React from 'react';

const FileUploader = ({ onUpload }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div className="border-2 border-dashed border-gray-300 p-6 text-center">
      <input
        type="file"
        className="hidden"
        id="fileInput"
        onChange={handleFileChange}
      />
      <label htmlFor="fileInput" className="cursor-pointer text-gray-600">
        Upload Business Logo
      </label>
      <p className="text-sm text-gray-400 mt-2">Click to upload or drag and drop</p>
    </div>
  );
};

export default FileUploader;
import React from 'react';

const ProfileFormField = ({ label, name, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <input
        type="text"
        name={name}
        value={value || ''}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded"
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  );
};

export default ProfileFormField;
import React from 'react';
import ProfileFormField from './ProfileFormField';
import FileUploader from './FileUploader';

const ProfileForm = ({ profile, onChange, onUpload }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...profile, [name]: value });
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Seller Profile</h2>
      <ProfileFormField label="Contact Name" name="contactName" value={profile.contactName} onChange={handleInputChange} />
      <ProfileFormField label="Business Name" name="businessName" value={profile.businessName} onChange={handleInputChange} />
      <ProfileFormField label="Business Description" name="businessDescription" value={profile.businessDescription} onChange={handleInputChange} />
      <ProfileFormField label="Country" name="country" value={profile.country} onChange={handleInputChange} />
      <ProfileFormField label="Contact Number" name="contactNumber" value={profile.contactNumber} onChange={handleInputChange} />
      <ProfileFormField label="Email" name="email" value={profile.email} onChange={handleInputChange} />
      <ProfileFormField label="Address" name="address" value={profile.address} onChange={handleInputChange} />
      <div className="mt-4">
        <FileUploader onUpload={onUpload} />
      </div>
      <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={() => alert('Profile Saved')}>
        Save Profile
      </button>
    </div>
  );
};

export default ProfileForm;
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Dashboard.css';


const Dashboard = () => {
  const location = useLocation();
  const [formData, setFormData] = useState(location.state || {});
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(formData);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    setFormData(profileData); 
  };

  const handleCancel = () => {
    setProfileData(formData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  return (
    <section className='dashboard'>
      <div className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li className='hover:bg-blue-200'>Inbox <span>(3)</span></li>
          <li className='hover:bg-blue-200'>Draft</li>
          <li className='hover:bg-blue-200'>Teams</li>
          <li className='hover:bg-blue-200'>Create New Team</li>
          <li className='hover:bg-blue-200'>Integrations</li>
        </ul>
      </div>
      <div className="main-content">
        <div className="settings-panel">
          <h2>Settings</h2>
          <div className="profile-picture">
            <img src={profileData.logo ? URL.createObjectURL(profileData.logo) : 'default-avatar.png'} alt="Profile" />
            <div className='flex gap-[10px]'>
              <button className=' text-white bg-blue-500 rounded p-[10px]'>Change picture</button>
              <button className=' text-white bg-red-500 rounded p-[10px]'>Delete picture</button>
            </div>
          </div>
          <div className="profile-details">
            <div className="flex justify-between">
              <h2>Profile Details</h2>
              {isEditing ? (
                <div>
                  <button onClick={handleSave} className="text-white bg-green-500 rounded p-[5px]">Save</button>
                  <button onClick={handleCancel} className="text-white bg-red-500 rounded p-[5px]">Cancel</button>
                </div>
              ) : (
                <button onClick={handleEdit} className="text-white bg-blue-500 rounded p-[5px]">Edit</button>
              )}
            </div>
            <div>
              <label><strong>Profile Name:</strong></label>
              <input
                type="text"
                name="businessName"
                value={profileData.businessName}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full p-[5px] rounded"
                placeholder='Your Name'
              />
            </div>
            <div>
              <label><strong>Username:</strong></label>
              <input
                type="text"
                name="contactInfo"
                value={profileData.contactInfo}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full p-[5px] rounded"
                placeholder='put your username'
              />
            </div>
            <div>
              <label><strong>Status:</strong></label>
              <select
                name="status"
                value={profileData.status || 'On duty'}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full p-[5px] rounded"
              >
                <option value="On duty">On duty</option>
                <option value="Off duty">Off duty</option>
                <option value="Busy">Busy</option>
                <option value="Available">Available</option>
              </select>
            </div>
            <div>
              <label><strong>About me:</strong></label>
              <textarea
                name="aboutMe"
                value={profileData.aboutMe || 'you get nothing short. you get the best'}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full p-[5px] rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

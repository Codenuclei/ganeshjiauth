import React from 'react';
import './profile.css';
import Header from '@/app/header';

const Profile: React.FC = () => {
  return (
    <div className="dashboard">
      <Header />
      <main className="content">
        <div className="Vote">
          <h2>My Profile</h2>
          <div className="image">
            <img 
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
              alt="Profile Picture" 
              style={{ height: '300px', width: '400px' }} 
            />
          </div>
          <div className="p1">
            <p>Last Login: 07 Aug 2018 14:54</p>
          </div>
          <div className="p2">
            <p>Windows 10 Pro, India</p>
          </div>
          <p><u>User Name</u></p>
          <div className="p3">
            <p><u>Contact</u></p>
          </div>
          <p><u>Email</u></p>
          <label>
            <input type="checkbox" defaultChecked />
            SMS alerts activation
          </label>
          <div className="save">
            <button>Save</button>
          </div>
        </div>
        
        <div className="Manufesto">
          <h2>My Party Manifesto</h2>
          <div className="search-edit">
            <input type="text" placeholder="Search" />
            <button>Edit</button>
          </div>
          <div className="act">
            <p>Activity</p>
          </div>
          <button className="block">Activity</button>
          <p>ID</p>
          <div className="id">
            <p>7982 5898 3563 2548</p>
          </div>
        </div>
        
        <div className="Party">
          <h2>My Vote</h2>
          <div className="filter">
            <label htmlFor="filter">Filter by</label>
            <select id="filter">
              <option value="all">All</option>
              <option value="paid">Complete</option>
              <option value="not-paid">Incomplete</option>
            </select>
          </div>
          <ul>
            <li className="paid">Document</li>
            <li className="not-paid">Vote</li>
            <li className="paid">Voter ID</li>
            <li className="paid">Aadhar Card</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Profile;

import React from "react";

const SearchAndNotifications: React.FC = () => {
  return (
    <div className="search-and-notifications">
    <header className="header">
      <div className="search-container">
        <div className="search-wrapper">
          <img src="/search.svg" alt="Search Icon" className="search-icon" />
          <input type="text" placeholder="Search" className="search-bar" />
        </div>
      </div>
      <div className="notification-container">
        <img src="/bellNoti.svg" alt="Notifications" className="notification-icon" />
        <img src="/profile.svg" alt="User Profile" className="profile-icon" />
      </div>
    </header>
    </div>
  );
};

export default SearchAndNotifications;

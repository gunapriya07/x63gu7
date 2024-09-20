import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import UserSearch from '../../UserSearch/UserSearch';

const TopNav = ({ openLogOutModal }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="w-full h-auto flex items-center justify-between bg-light p-2">
      <div className="relative w-2/3">
        {/* <input
          type="text"
          placeholder="Search users"
          value={searchQuery}
          onChange={handleInputChange}
          className="w-full bg-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-blue-600"
        /> */}
        <UserSearch></UserSearch>
        <button
          data-testid="search-button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        >
          <FaSearch />
        </button>
      </div>

      <button
        className="bg-red-500 ml-4 px-4 py-2 text-white rounded cursor-pointer hover:bg-red-600"
        onClick={openLogOutModal}
      >
        Logout
      </button>
    </div>
  );
};

export default TopNav;

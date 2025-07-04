import React from 'react';
import Image from '../assets/profile.jpg';
const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 p-4 h-screen" >
      <div className="mb-4 flex items-center" style={{margin: '20px 10px 20px 10px'}}>
        <img src={Image} alt="User" className="w-12 h-12 rounded-full mr-2" />
        <span className="text-green-600 font-bold text-lg">Sarah Miller</span>
        <span className="ml-auto text-sm text-gray-500">Seller</span>
      </div>
      <ul className="space-y-2">
        <li className="flex items-center">
          <span className="mr-2 w-5 h-5 bg-gray-300" ></span>
          <span className="text-green-600 font-semibold">Profile</span>
        </li>
        <li className="flex items-center">
          <span className="mr-2 w-5 h-5 bg-gray-300"></span>
          <a href="#" className="text-green-600 hover:text-green-700">Add Product</a>
        </li>
        <li className="flex items-center">
          <span className="mr-2 w-5 h-5 bg-gray-300"></span>
          <a href="#" className="text-green-600 hover:text-green-700">Analytics</a>
        </li>
        <li className="flex items-center">
          <span className="mr-2 w-5 h-5 bg-gray-300"></span>
          <a href="#" className="text-green-600 hover:text-green-700">Wallet</a>
        </li>
        <li className="flex items-center">
          <span className="mr-2 w-5 h-5 bg-gray-300"></span>
          <a href="#" className="text-green-600 hover:text-green-700">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
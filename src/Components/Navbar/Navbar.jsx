import React from 'react';

export default function Navbar({ coins }) {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-lg bg-white/80">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto rounded-lg " />
        </div>
        <ul className="flex gap-8 text-base font-medium text-gray-700">
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
          <li className="flex items-center space-x-1 text-yellow-600">
            <span className="font-semibold">{coins}</span>
            <span>Coins</span>
            <i className="fa-solid fa-coins text-yellow-500"></i>
          </li>
        </ul>
      </div>
    </div>
  )
}

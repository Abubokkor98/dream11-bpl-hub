import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className='flex justify-center mb-10'>
        <img src="/logo-footer.png" alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 mx-auto">
        
        {/* left column */}
        <div className=''>
          <h2 className="text-lg font-bold mb-4">About Us</h2>
          <p className="text-sm w-9/12">
            We are a passionate team dedicated to providing the best services to our customers.
          </p>
        </div>

        {/* middle column */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* right column */}
        <div className='w-10/12'>
          <h2 className="text-lg font-bold mb-4">Subscribe</h2>
          <p className="text-sm mb-4 w-10/12">Subscribe to our newsletter for the latest updates.</p>
          <div className="flex items-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-2 rounded-l-md focus:outline-none focus:ring focus:ring-yellow-400 bg-gray-800 text-white placeholder-gray-400"
            />
            <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold rounded-r-md hover:from-pink-600 hover:to-yellow-500 focus:outline-none focus:ring focus:ring-pink-300">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-sm">&copy;2024 Your Company All Rights Reserved.</p>
      </div>
    </footer>
  )
}

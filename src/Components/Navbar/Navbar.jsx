import React from 'react'

export default function Navbar({coins}) {
  // console.log(coins);
  return (
<div className='sticky top-0 z-50 backdrop-blur-lg bg-white/80'>
<div className=' flex justify-between p-5'>
        <div><img src='/logo.png' alt="" className='h-12 w-auto rounded-lg' /></div>
        <ul className='flex gap-10 text-2xl font-semibold'>
            <li>Home</li>
            <li>Fixture</li>
            <li>Teams</li>
            <li>Schedules</li>
            <li><span>{coins}</span> Coins <i className="fa-solid fa-coins"></i></li>
        </ul>
    </div>
</div>
  )
}

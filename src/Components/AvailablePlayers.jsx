import React from 'react'

export default function AvailablePlayers() {
  return (
    <div className='flex justify-between py-5'>
        <h1 className='font-bold text-2xl'>Available Players</h1>
        <div className='flex gap-5'>
            <button className='btn'>
                Available
            </button>
            <button className='btn'>
                Selected(0)
            </button>
        </div>
    </div>
  )
}

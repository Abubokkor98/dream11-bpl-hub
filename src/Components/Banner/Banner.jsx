import React from 'react'

export default function Banner({handleClaimCredit}) {
  return (
    <div className='bg-cover bg-center bg-no-repeat bg-black rounded-3xl md:w-full h-full md:h-[35.5rem] mb-10'
    style={{ backgroundImage: `url(https://i.ibb.co.com/F5B1rQ8/bg-shadow.png)` }}>
              <div className='w-9/12 mx-auto flex flex-col justify-center items-center text-center h-full space-y-6 py-4'>
              <div>
                <img src="./banner-main.png" alt="" />
              </div>
           <h1 className='font-bold text-4xl text-white w-11/12'>
           Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className='text-lg font-normal text-white'>
            Beyond Boundaries Beyond Limits
             </p>
             <div className='text-xl font-semibold'>
                <button onClick={handleClaimCredit} className='btn bg-gradient-to-r from-pink-500 to-yellow-400  border-none'>
                    Claim Free Credit
                </button>
             </div>
        </div>

    </div>
  )
}

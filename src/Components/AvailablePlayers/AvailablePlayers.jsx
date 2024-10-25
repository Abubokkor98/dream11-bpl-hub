import React, { useEffect, useState } from 'react'
import AllPlayers from '../AllPlayers/AllPlayers'
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers'

export default function Available({handleActiveStatus,isActive, choosePlayer}) {




  return (
    <div>
            <div className='flex justify-between py-5'>
        <h1 className='font-bold text-2xl'>{isActive.available?"Available Players":`Selected Player (${choosePlayer.length}/6)`}</h1>
        <div className='flex gap-5'>
            <button className={`${isActive.available?"btn bg-green-400":"btn"}`} onClick={()=>handleActiveStatus('available')}>
                Available
            </button>
            <button className={`${isActive.available?"btn":"btn bg-green-400"}`} onClick={()=>handleActiveStatus('selected')}>
                Selected({choosePlayer.length})
            </button>
        </div>
    </div>
        {/*  */}
         {/* {isActive.available?<AllPlayers></AllPlayers>:
       <SelectedPlayers ></SelectedPlayers>} */}
    </div>
  )
}

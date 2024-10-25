import React, { useEffect, useState } from 'react'
import SinglePlayer from '../SinglePlayer/SinglePlayer';

export default function AllPlayers({handleChoosePlayer}) {
  const [players, setPlayers] = useState([]);

  useEffect(()=>{
      fetch('playersData.json')
      .then(res=>res.json())
      .then(data=> setPlayers(data))
  },[])

  return (
<div>

    {/* players */}
<div className='grid grid-cols-3 gap-5'>
        {
        players.map(player=><SinglePlayer
            key={player.playerId}
            player={player}
            handleChoosePlayer={handleChoosePlayer}
            ></SinglePlayer>)
        }
    </div>
</div>
  )
}

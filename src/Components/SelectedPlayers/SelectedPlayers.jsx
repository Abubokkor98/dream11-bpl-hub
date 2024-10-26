import React from "react";

export default function SelectedPlayers({ choosePlayer,handlePlayerDelete, handleActiveStatus }) {

  return (
    <div>
      {choosePlayer.map((player, index) => (
        <div className="" key={index}>
          <div className="p-4 rounded-lg border mb-2">
         <div className="flex justify-between">
            {/* left */}
            <div className="flex gap-5">
              <div>
                <img src={player.image} className="w-16 h-16 rounded-md object-cover" alt="" />
              </div>
              <div>
                <h1 className="font-semibold text-lg">{player.name}</h1>
                <p className="text-sm">{player.role}</p>
                <p>
                  <small className="font-semibold">${player.price}</small>
                </p>
              </div>
            </div>
            {/* right */}
            <div className="flex items-center">
               <button onClick={()=>handlePlayerDelete(player.playerId)}><i className="fa-solid fa-trash text-xl text-red-400"></i></button>
            </div>

         </div>
          </div>
        </div>
      ))}
      {/* btn */}
      <div>
         <button className="btn bg-yellow-400" onClick={()=>handleActiveStatus('available')}>Add More Player</button>
      </div>
    </div>
  );
}

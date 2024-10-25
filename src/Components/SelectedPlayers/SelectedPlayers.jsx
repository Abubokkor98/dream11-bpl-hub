import React from "react";

export default function SelectedPlayers({ choosePlayer,handlePlayerDelete, handleActiveStatus }) {

  return (
    <div>
      {choosePlayer.map((player, index) => (
        <div className="" key={index}>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg shadow-md border border-blue-200 mb-2">
         <div className="flex justify-between">
            {/* left */}
            <div className="flex gap-5">
              <div>
                <img src={player.image} className="w-[50px] h-[50px]" alt="" />
              </div>
              <div>
                <h1 className="font-semibold">{player.name}</h1>
                <p>{player.role}</p>
                <p>
                  <small>${player.price}</small>
                </p>
              </div>
            </div>
            {/* right */}
            <div className="flex items-center">
               <button onClick={()=>handlePlayerDelete(player.playerId)}><i className="fa-solid fa-trash text-xl"></i></button>
            </div>

         </div>
          </div>
        </div>
      ))}
      {/* btn */}
      <div>
         <button className="btn bg-green-400" onClick={()=>handleActiveStatus('available')}>Add More Player</button>
      </div>
    </div>
  );
}

import React from 'react'

export default function SelectedPlayers({players}) {
   console.log(players);
  return (
    <div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg shadow-md border border-blue-200 ">
            <div className='flex gap-5'>
               <div>
                  <h1>right div</h1>
               </div>
               <div>
                  <h1>name</h1>
                  <p>paragaraph</p>
               </div>

            </div>
              <div id="history-list" className="my-2"></div>
            </div>
 </div>
  )
}

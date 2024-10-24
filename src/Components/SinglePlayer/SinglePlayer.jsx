import React from "react";

export default function SinglePlayer({ player }) {
  console.log(player);
  const {
    playerId,
    name,
    country,
    image,
    role,
    battingType,
    bowlingType,
    price,
  } = player;
  return (
    <div className="">
      <div className=" card-compact border rounded-md p-2">
        <figure>
          <img
            src={image}
            alt="Shoes"
            className="rounded-md"
          />
        </figure>
        <div className="card-body">
          <div className="flex gap-2">
            <div><i className="fa-solid fa-user text-xl"></i></div>
            <h2 className="card-title">{name}</h2>
          </div>
          <div className="flex justify-between">
            {/* left div */}
            <div className="flex gap-2">
            <div><i className="fa-solid fa-flag"></i></div>
            <p className="">{country}</p>
            </div>
            {/* right div */}
            <div className="bg-slate-300 rounded-md">
                <p className="p-1">{role}</p>
            </div>
          </div>
          <hr />
          <h2 className="font-bold">Rating</h2>
          <div className="flex justify-between">
            <h2 className="font-semibold">{battingType}</h2>
            <h2>{bowlingType}</h2>
          </div>
          <div className="flex justify-between">
            <h2 className="font-semibold">Price: ${price}</h2>
            <button className="border rounded-md p-1 font-semibold">
                Choose Player
                </button>
          </div>

        </div>
      </div>
    </div>
  );
}

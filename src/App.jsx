import { useState } from "react";
import AllPlayers from "./Components/AllPlayers/AllPlayers";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";

function App() {
  const [coins, setCoins] = useState(0);
  // state for toggle buttons
  const [isActive, SetIsActive] = useState({
    available: true,
    status: "available",
  });
  //
  const handleMinusCoins = (price) => {
    if (price > coins) {
      alert("U don't have enough credit");
    } else {
      setCoins(coins - price);
    }
  };
  // money back function
  const handlePriceBack = (id) =>{
    const player = choosePlayer.find((p) => p.playerId==id);
    setCoins(coins+player.price);
  }
  // state for chose player btn
  const [choosePlayer, setChoosePlayer] = useState([]);

  // player deleted function
  const handlePlayerDelete = (id) => {
    handlePriceBack(id);
    const remainingPlayers = choosePlayer.filter((p)=> p.playerId!==id);
    setChoosePlayer(remainingPlayers);
  };

  // credit claim function
  const handleClaimCredit = () => {
    const newCoins = coins + 6000000;
    setCoins(newCoins);
  };
  // active button function
  const handleActiveStatus = (status) => {
    if (status == "available") {
      SetIsActive({
        available: true,
        status: "available",
      });
    } else {
      SetIsActive({
        available: false,
        status: "selected",
      });
    }
  };
  const handleChoosePlayer = (player) => {
    const isExist = choosePlayer.find((p) => p.playerId == player.playerId);

    if (isExist) {
      alert("you already select this player");
    } else if (choosePlayer.length == 6) {
      alert("you already added maximum player");
    } else if (player.price > coins) {
      alert("U don't have enough credit");
    } else {
      handleMinusCoins(player.price);
      const newPlayer = [...choosePlayer, player];
      setChoosePlayer(newPlayer);
    }
  };

  return (
    <div>
      <div className="max-w-screen-lg mx-auto">
        {/* Navbar */}
        <Navbar coins={coins}></Navbar>
        {/* Banner */}
        <Banner handleClaimCredit={handleClaimCredit}></Banner>
        {/* Available Players */}
        <AvailablePlayers
          handleActiveStatus={handleActiveStatus}
          isActive={isActive}
          choosePlayer={choosePlayer}
        ></AvailablePlayers>
        {/*All Players*/}
        {isActive.available ? (
          <AllPlayers handleChoosePlayer={handleChoosePlayer}></AllPlayers>
        ) : (
          <SelectedPlayers
            choosePlayer={choosePlayer}
            handlePlayerDelete={handlePlayerDelete}
          ></SelectedPlayers>
        )}
      </div>
      <div className="max-w-screen-xl mx-auto mt-16">
        {/* Footer */}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

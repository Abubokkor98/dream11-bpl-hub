import { useState } from "react"
import AllPlayers from "./Components/AllPlayers/AllPlayers"
import AvailablePlayers from "./Components/AvailablePlayers"
import Banner from "./Components/Banner/Banner"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"


function App() {
  const [coins, setCoins] = useState(0);

  const handleClaimCredit = ()=>{
    const newCoins = coins + 6000000;
    setCoins(newCoins);
  }



  return (
<div>
<div className="max-w-screen-lg mx-auto">
      {/* Navbar */}
      <Navbar coins={coins}></Navbar>
      {/* Banner */}
      <Banner handleClaimCredit={handleClaimCredit}></Banner>
      {/* Available Players*/}
      <AvailablePlayers></AvailablePlayers>
      {/* All Players */}
      <AllPlayers></AllPlayers>
    </div>
    <div className="max-w-screen-xl mx-auto mt-16">
      {/* Footer */}
      <Footer></Footer>
      </div>       
</div>
  )
}

export default App

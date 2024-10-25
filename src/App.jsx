import { useState } from "react"
import AllPlayers from "./Components/AllPlayers/AllPlayers"
import Banner from "./Components/Banner/Banner"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers"
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers"


function App() {
  const [coins, setCoins] = useState(0);
  // state for toggle buttons
  const [isActive, SetIsActive] = useState({
    available: true,
    status:"available"
})
// credit claim function
  const handleClaimCredit = ()=>{
    const newCoins = coins + 6000000;
    setCoins(newCoins);
  }

// active button function
const handleActiveStatus = (status) =>{
    if (status=="available"){
        SetIsActive({
          available: true,
            status:"available"
        })
    }
    else{
        SetIsActive({
          available: false,
            status:"selected"
        })
    }
}
console.log(isActive);



  return (
<div>
<div className="max-w-screen-lg mx-auto">
      {/* Navbar */}
      <Navbar coins={coins}></Navbar>
      {/* Banner */}
      <Banner handleClaimCredit={handleClaimCredit}></Banner>
      {/* Available Players */}
      <AvailablePlayers handleActiveStatus={handleActiveStatus} isActive={isActive}></AvailablePlayers>
      {/*All Players*/}
      {isActive.available?<AllPlayers></AllPlayers>:<SelectedPlayers></SelectedPlayers>}
    </div>
    <div className="max-w-screen-xl mx-auto mt-16">
      {/* Footer */}
      <Footer></Footer>
      </div>       
</div>
  )
}

export default App

import AvailablePlayers from "./Components/AvailablePlayers"
import Banner from "./Components/Banner/Banner"
import Navbar from "./Components/Navbar/Navbar"


function App() {


  return (
    <div className="max-w-screen-lg mx-auto">
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Banner */}
      <Banner></Banner>
      {/* Available Players*/}
      <AvailablePlayers></AvailablePlayers>
    </div>
  )
}

export default App

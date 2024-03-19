import "./App.css";
import LineChart from "./Components/LineChart/LineChart";
import NavBar from "./Components/NavBar/NavBar";
import Phones from "./Components/Phones/Phones";
import PriceOptions from "./Components/PriceOptions/PriceOptions";

// import Daisynav from "./Components/DaisyNav/Daisynav";

function App() {
  return (
    <>
    <NavBar></NavBar>
    {/* <Daisynav></Daisynav> */}
      <h1>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
      
      
    
      
    </>
  );
}

export default App;

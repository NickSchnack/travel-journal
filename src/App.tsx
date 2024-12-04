import './App.css'
import Entry from './components/Entry';
import Header from './components/Header'
import { Destination } from './models/Destination';
import travelData from "./data/travelData";

function App() {
  const entries = travelData.map((travelDest: Destination) => 
    <Entry
      {...travelDest}
    />
  );

  return (
    <>
      <Header />
      {entries}
    </>
  );
}

export default App

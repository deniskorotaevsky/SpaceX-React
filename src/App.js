import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Technology from "./Technology";
import FlightSchedule from "./FlightSchedule";
import Guarantees from "./Guarantees";
import Сompanies from "./Сompanies";
import Contacts from "./Contacts";
import Navbar from './components/Navbar';
import SectionText from './components/SectionText';

function App() {
  return (
    <div className='app'>
      <div className='appBlock'>
        <div className='navbarApp'>
          <Navbar />
        </div>
        <div className='appBoxText'>
          <SectionText />
        </div>
      </div>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/technology' element={<Technology />} />
        <Route path='/flightSchedule' element={<FlightSchedule />} />
        <Route path='/guarantees' element={<Guarantees />} />
        <Route path='/companies' element={<Сompanies />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;

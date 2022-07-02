import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Technology from "./Technology";
import FlightSchedule from "./FlightSchedule";
import Guarantees from "./Guarantees";
import Сompanies from "./Сompanies";
import Contacts from "./Contacts";
import logo from './image/logo.png';

function App() {
  return (
    <>
      <div className='app'>
        <div className='appBlock'>
          <div className='header'>
            <div className='headerBox'>
              <div className='header_logo'>
                <img src={logo}></img>
              </div>
              <div className='link'>
                <Link to='/'>Главная</Link>
                <Link to='/technology'>Технология</Link>
                <Link to='/flightSchedule'>График полетов</Link>
                <Link to='/guarantees'>Гарантии</Link>
                <Link to='/companies'>О компании</Link>
                <Link to='/contacts'>Контакты</Link>
              </div>
            </div>
          </div>
          <div className='appBoxText'>
            <div className='appContainer'>
              <div className='appBoxTextLeft'>
                <h1 ><span className='appH1TextBolt'>Путешествие</span> на красную планету</h1>
                <p className='appOpen'>Начать путешествие</p>
                <div class="line">
                  <div class="line-2"></div>
                  <div class="dot"></div>
                </div>
              </div>
              <div className='item'>
                <p className='itemOne'>Мы <span className='itemTextBolt'>1</span> на рынке</p>
                <p className='itemTwo'>гарантируем <span className='itemTextBolt'>50% </span> безопасность </p>
                <p className='itemThree'>календарик за <span className='itemTextBolt'>2001<span className='itemTextLittlBig'>г.</span></span>  в подарок</p>
                <p className='itemFour'>путешествие <span className='itemTextBolt'>597</span> дней</p>
              </div>
            </div>
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
    </>
  );
}

export default App;

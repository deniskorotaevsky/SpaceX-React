import '../App.css';
import { Close, MenuOutlined } from '@material-ui/icons';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import logo from '../image/logo.png';

const Navbar = () => {
    const [active, setActive] = useState(true);
    const showMenu = () => {
        setActive(!active)
    }
    return (
        <div className='navbarBox'>
            <div className='navbar_logo'>
                <img src={logo}></img>
            </div>
            <div className='navbar'>
                <div className='menu-icon'>
                    <MenuOutlined className='menu' onClick={showMenu} />
                </div>
                <nav className={active ? "slider active" : "slider"}>
                    <ul>
                        <div className='closed'>
                            <Close className='close' onClick={showMenu} />
                        </div>
                        <li>
                            <Link to='/'>Главная</Link>
                        </li>
                        <li>
                            <Link to='/technology'>Технология</Link>
                        </li>
                        <li>
                            <Link to='/flightSchedule'>График полетов</Link>
                        </li>
                        <li>
                            <Link to='/guarantees'>Гарантии</Link>
                        </li>
                        <li>
                            <Link to='/companies'>О компании</Link>
                        </li>
                        <li>
                            <Link to='/contacts'>Контакты</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;
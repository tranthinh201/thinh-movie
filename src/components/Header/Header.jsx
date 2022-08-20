import React from 'react';
import { Link, NavLink } from "react-router-dom"
import './Header.scss';
import { FaSearch } from 'react-icons/fa'
import {TbLogin} from 'react-icons/tb'
import {GoPrimitiveDot} from 'react-icons/go'

function Header() {
    return (
        <div className='header container'>
            <div className="header__logo">
                THINH TV
            </div>
            <ul className="header__list-items">
                <li>
                    <NavLink to='/'>
                        Home
                        <GoPrimitiveDot className='dot'/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/news'>
                        News
                        <GoPrimitiveDot className='dot'/>
                    </NavLink>
                </li>
            </ul>
            <div className="header__form">
                <form action="" className="header__form-input">
                    <input type="text" placeholder='Tìm kiếm....' className='header__form-input-search'/>
                    <FaSearch className='header__form-input-icon'/>
                </form>
            </div>
            <div className="header__sign-in">
                <NavLink to='/sign-in'>
                    <span>
                        Sign in
                    </span>
                    <TbLogin className='header__sign-in-icon'/>
                </NavLink>
            </div>
        </div>
    );
}

export default Header;
import React from 'react'
import { NavLink } from "react-router-dom";

import { GiCookie } from "react-icons/gi";
import './Header.css';

function Header() {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
  return (
    <div className='special-section'>
        <NavLink className="navHome" to={"/"}> 
            <GiCookie className='cookie-icon' />
            <p>CookBook</p>
        </NavLink>

        <div className='spl-button'> 
            <svg className='special-svg' xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="gooey">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
                        <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
                    </filter>
                </defs>
            </svg>
            <button id="gooey-button"  onClick={() => openInNewTab('https://shukhratt-blog.vercel.app')}>
                <p>About me</p>
                <span className="bubbles">
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                </span>
            </button>
        </div>
    </div>
  )
}

export default Header
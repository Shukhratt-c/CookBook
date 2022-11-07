import React from "react";
import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { GiChopsticks } from "react-icons/gi";
import { SiCoffeescript } from "react-icons/si"
import { NavLink } from "react-router-dom";

function Category() {

  const path = window.location.pathname

    return (
    <div className="col-12 pb-5">

          <NavLink className={ path === "/cuisine/American" ? 'navLink active' : 'navLink'}   to={"/cuisine/American"}>
            <div className="path">
              <FaHamburger className="uil" />
              American
            </div>            
          </NavLink >
          
          <NavLink className={ path === "/cuisine/Italian" ? 'navLink active' : 'navLink'}  to={"/cuisine/Italian"}>
            <div className="path">
              <FaPizzaSlice className="uil" />
              Italian
            </div>
          </NavLink>

          <NavLink className={ path === "/cuisine/British" ? 'navLink active' : 'navLink'}   to={"/cuisine/British"}>
            <div className="path">
              <SiCoffeescript className="uil" />
              British
            </div>
          </NavLink >

          <NavLink className={ path === "/cuisine/Japanese" ? 'navLink active' : 'navLink'}   to={"/cuisine/Japanese"}>
            <div className="path">
              <GiChopsticks className="uil" />
              Japanese
            </div>
          </NavLink >
        
    </div>
  );
}

export default Category;

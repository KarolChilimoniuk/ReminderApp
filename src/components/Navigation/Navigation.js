import React from 'react';
// import Home from '../HomeView/HomeView';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
          <nav>
              <ul>
                  <li>
                      <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                      <NavLink to="/done">Done</NavLink>
                  </li>
                  <li>
                      <NavLink to="/undone">Undone</NavLink>
                  </li>
              </ul>
          </nav>
    );
}

export default Navigation;
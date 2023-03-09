import { NavLink, Routes, Route } from 'react-router-dom'

import logo from '../assets/react.svg'

export function Navigation () {

  return (
    <div className="main-layout">
      <nav>
        <img src={ logo } alt="React Logo" />
        <ul>
          <li>
            <NavLink 
              className={ ({isActive}) => isActive ? 'nav-active' : '' }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              className={ ({isActive}) => isActive ? 'nav-active' : '' }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              className={ ({isActive}) => isActive ? 'nav-active' : '' }
              to="/users"
            >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}

      <Routes>
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/users" element={<h1>Users</h1>} />
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
    </div>

  )
}
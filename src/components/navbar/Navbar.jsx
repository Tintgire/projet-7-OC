import './Navbar.scss'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  let activeStyle = {
    textDecoration: 'underline',
  }

  return (
    <nav>
      <NavLink
        style={({ isActive }) => (isActive ? undefined : activeStyle)}
        className="linkacceuil link-header"
        to="/"
      >
        Accueil
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? undefined : activeStyle)}
        className="linkabout link-header"
        to="/about"
      >
        A Propos
      </NavLink>
    </nav>
  )
}

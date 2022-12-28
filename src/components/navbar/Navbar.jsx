import './Navbar.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <Link className="linkacceuil link-header" to="/">
        Accueil
      </Link>
      <Link className="linkabout link-header" to="/about">
        A Propos
      </Link>
    </nav>
  )
}

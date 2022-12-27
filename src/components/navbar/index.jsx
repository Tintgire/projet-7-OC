import './index.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <Link className="linkacceuil" to="/">
          Accueil
        </Link>
        <Link className="linkabout" to="/about">
          A Propos
        </Link>
      </nav>
    </div>
  )
}

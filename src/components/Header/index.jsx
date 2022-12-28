import './index.scss'
import LOGO from '../../assets/LOGO.png'
import Navbar from '../navbar'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <Link className="" to="/">
        <img className="logo" src={LOGO} alt="logo" />
      </Link>
      <Navbar />
    </header>
  )
}

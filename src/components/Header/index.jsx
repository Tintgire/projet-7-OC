import './index.scss'
import LOGO from '../../assets/LOGO.png'
import Navbar from '../navbar'

export default function Header() {
  return (
    <div className="container">
      <img className="logo" src={LOGO} alt="logo" />
      <Navbar />
    </div>
  )
}

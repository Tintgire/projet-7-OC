import './index.scss'
import LOGO from '../../assets/LOGO.png'
import NavBar from '../navbar'

export default function Header() {
  return (
    <div>
      <img className="logo" src={LOGO} alt="logo" />
    </div>
  )
}

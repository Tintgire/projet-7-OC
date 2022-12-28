import './index.scss'
import LogoFooter from '../../assets/LOGO-footer.png'

export default function Footer() {
  return (
    <footer>
      <img className="logo-footer" src={LogoFooter} alt="Logo footer" />
      <p className="kasarights">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

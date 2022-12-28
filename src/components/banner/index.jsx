import './index.scss'
import IMGHOME from '../../assets/IMGHOME.png'

export default function banner() {
  return (
    /* render */
    <div className="banner">
      <img className="banner__imghome background" src={IMGHOME} alt="IMGHOME" />
      <div className="banner__overlay background"></div>
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

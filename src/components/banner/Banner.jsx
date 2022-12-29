import './Banner.scss'
import IMGHOME from '../../assets/IMGHOME.png'

export default function banner(props) {
  return (
    /* render Chez vous, partout et ailleurs*/
    <div className="banner">
      <img className="banner__imghome background" src={IMGHOME} alt="IMGHOME" />
      <div className="banner__overlay background"></div>
      <h1>{props.text}</h1>
    </div>
  )
}

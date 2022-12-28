import './index.scss'
import IMGHOME from '../../assets/IMGHOME.png'

export default function HomeBanner() {
  return (
    <div className="homeBanner">
      <img
        className="homeBanner__imghome background"
        src={IMGHOME}
        alt="IMGHOME"
      />
      <div className="homeBanner__overlay background"></div>
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

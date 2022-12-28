import './index.scss'
import Header from '../../components/header'
import IMGHOME from '../../assets/IMGHOME.png'

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="homeBanner">
        <img
          className="homeBanner__imghome background"
          src={IMGHOME}
          alt="IMGHOME"
        />
        <div className="homeBanner__overlay background"></div>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  )
}

import './index.scss'
import Header from '../../components/header'
import IMGHOME from '../../assets/IMGHOME.png'

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div>
        <img className="imghome" src={IMGHOME} alt="IMGHOME" />
      </div>
    </div>
  )
}

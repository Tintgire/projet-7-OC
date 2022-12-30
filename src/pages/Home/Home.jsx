import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import Footer from '../../components/footer/Footer'
import IMGHOME from '../../assets/IMGHOME.png'
import CardItems from '../../DataBase/logement.js'
import './Home.scss'

export default function Home() {
  const textHOME = 'Chez vous, partout et ailleurs'
  const altHOME = 'image de Koh avec une vue mer'

  const AppCard = () => (
    <main className="listCard">
      {CardItems.map((item) => {
        return (
          <article key={item.id}>
            <Link className="link" to={`/logement/${item.id}`}>
              <div className="card">
                <img className="cardimg" src={item.cover} alt={item.title} />
                <div className="bannercard"></div>
                <p className="titlelogement">{item.title}</p>
              </div>
            </Link>
          </article>
        )
      })}
    </main>
  )
  return (
    <div>
      <Header />
      <Banner text={textHOME} src={IMGHOME} alt={altHOME} />
      <AppCard />
      <Footer />
    </div>
  )
}

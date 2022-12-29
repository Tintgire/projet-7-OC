import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import Footer from '../../components/footer/Footer'
import IMGHOME from '../../assets/IMGHOME.png'
// import image

export default function Home() {
  const textHOME = 'Chez vous, partout et ailleurs'
  const altHOME = 'image de Koh avec une vue mer'
  return (
    <div>
      <Header />
      <Banner text={textHOME} src={IMGHOME} alt={altHOME} />
      <Footer />
    </div>
  )
}

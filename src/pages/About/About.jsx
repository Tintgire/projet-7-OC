import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import Footer from '../../components/footer/Footer'
import IMGABOUT from '../../assets/IMGABOUT.png'

export default function About() {
  const textHOME = ''
  const altHOME = 'image de Koh avec une vue mer'
  return (
    <div>
      <Header />
      <Banner text={textHOME} src={IMGABOUT} alt={altHOME} />
      <Footer />
    </div>
  )
}

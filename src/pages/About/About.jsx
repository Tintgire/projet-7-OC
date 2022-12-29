import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import Footer from '../../components/footer/Footer'
import IMGABOUT from '../../assets/IMGABOUT.png'

export default function About() {
  const textHOME = ''
  const altHOME = 'image de montagne avec un arbre sur le côté'
  return (
    <div>
      <Header />
      <Banner text={textHOME} src={IMGABOUT} alt={altHOME} />
      <Footer />
    </div>
  )
}

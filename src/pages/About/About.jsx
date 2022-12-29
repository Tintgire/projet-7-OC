import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import Footer from '../../components/footer/Footer'
import Collapse from '../../components/collapse/Collapse'
import IMGABOUT from '../../assets/IMGABOUT.png'

export default function About() {
  const textABOUT = ''
  const altABOUT = 'image de montagne avec un arbre sur le côté'
  return (
    <div>
      <Header />
      <Banner text={textABOUT} src={IMGABOUT} alt={altABOUT} />
      <Collapse />
      <Footer />
    </div>
  )
}

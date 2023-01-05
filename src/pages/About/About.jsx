import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import Footer from '../../components/footer/Footer'
import Collapse from '../../components/collapse/Collapse'
import IMGABOUT from '../../assets/IMGABOUT.png'
import Items from '../../DataBase/about.js'
import './About.scss'

export default function About() {
  const textABOUT = ''
  const altABOUT = 'image de montagne avec un arbre sur le côté'

  return (
    <div>
      <Header />
      <Banner text={textABOUT} src={IMGABOUT} alt={altABOUT} />
      <div className="wrapper">
        {Items.map((item) => (
          <Collapse key={item.id} title={item.title} texte={item.texte} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

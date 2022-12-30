import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import Footer from '../../components/footer/Footer'
import Collapse from '../../components/collapse/Collapse'
import IMGABOUT from '../../assets/IMGABOUT.png'
import './About.scss'

export default function About() {
  const textABOUT = ''
  const altABOUT = 'image de montagne avec un arbre sur le côté'

  const Items = [
    {
      id: 1,
      title: 'Fiabilité',
      texte:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes au logement et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      id: 2,
      title: 'Respect',
      texte:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre platforme',
    },
    {
      id: 3,
      title: 'Service',
      texte:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question",
    },
    {
      id: 4,
      title: 'Sécurité',
      texte: `La sécurité est la priorité est la priorité de Kasa aussi bien pour nos hôtes que pour les voyageurs. Chaque logement correspond aux critères de sécurité établis par nos services. 
        En laissant unenote aussi bien à l'hôte qu'aux locataire,cela permet à nos équipes de vérifier que les standarts sont bien respectés. 
        Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes.`,
    },
  ]

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

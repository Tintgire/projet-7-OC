import { useParams } from 'react-router-dom'
import './Logement.scss'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Carrousel from '../../components/carrousel/Carrousel'
import Collapse from '../../components/collapse/Collapse'
import CardItems from '../../DataBase/logement.js'
import Button from '../../components/button/Button'

export default function Logement() {
  const { id } = useParams()
  const foundItem = CardItems.find((item) => item.id === id)
  const tags = foundItem.tags
  console.log(tags)

  const listequipments = foundItem.equipments.map((item, i) => (
    <li key={i}>{item}</li>
  ))

  return (
    <div className="logement">
      <Header />
      <Carrousel />
      <h3 className="logement-title">{foundItem.title}</h3>
      <h3 className="logement-location">{foundItem.location}</h3>
      <div className="logement-all-button">
        {tags.map((tag, i) => (
          <Button key={i} tags={tag} />
        ))}
      </div>
      <div className="collapse-logement">
        <Collapse title="Description" texte={foundItem.description} />
        <Collapse title="Équipements" texte={listequipments} />
      </div>
      <Footer />
    </div>
  )
}

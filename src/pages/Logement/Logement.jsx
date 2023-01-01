import { useParams } from 'react-router-dom'
import './Logement.scss'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Carrousel from '../../components/carrousel/Carrousel'
import Collapse from '../../components/collapse/Collapse'
import CardItems from '../../DataBase/logement.js'

export default function Logement() {
  const { id } = useParams()
  const foundItem = CardItems.find((item) => item.id === id)

  const listequipments = foundItem.equipments.map((item, i) => (
    <li key={i}>{item}</li>
  ))

  return (
    <div>
      <Header />
      <Carrousel />
      <div>
        <Collapse title="Description" texte={foundItem.description} />
        <Collapse title="Équipements" texte={listequipments} />
      </div>
      <Footer />
    </div>
  )
}

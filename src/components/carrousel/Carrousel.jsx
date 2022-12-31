import './Carrousel.scss'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import CardItems from '../../DataBase/logement.js'
import Vectorleft from '../../assets/Vectorleft.png'
import Vectorright from '../../assets/Vectorright.png'
//import test from '../../assets/test.png'

export default function Carrousel() {
  const { id } = useParams()
  const foundItem = CardItems.find((item) => item.id === id)
  const pictures = foundItem.pictures

  const [current, setCurrent] = useState(0)

  const prevSlide = () => {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1)
  }

  return (
    <div className="carrousel">
      <div className="carrousel-overlay"></div>
      {pictures.map((picture, i) => {
        return (
          <div key={i} className="slide">
            {i === current && (
              <img className="imgabout" src={picture} alt="background" />
            )}
            {i === current && (
              <p className="numberimg">
                {i + 1}/{pictures.length}
              </p>
            )}
          </div>
        )
      })}
      <img
        className="arrowleft"
        src={Vectorleft}
        alt="Flèche pour aller à l'img précédente"
        onClick={prevSlide}
      />
      <img
        className="arrowright"
        src={Vectorright}
        alt="Flèche pour aller à l'img suivante"
        onClick={nextSlide}
      />
    </div>
  )
}

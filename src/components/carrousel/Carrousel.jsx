import './Carrousel.scss'
import { useState } from 'react'
import Vectorleft from '../../assets/Vectorleft.png'
import Vectorright from '../../assets/Vectorright.png'

export default function Carrousel({ pictures }) {
  const [current, setCurrent] = useState(0)
  const length = pictures.length

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
      {length > 1 && (
        <img
          className="arrowleft"
          src={Vectorleft}
          alt="Flèche pour aller à l'img précédente"
          onClick={prevSlide}
        />
      )}
      {length > 1 && (
        <img
          className="arrowright"
          src={Vectorright}
          alt="Flèche pour aller à l'img suivante"
          onClick={nextSlide}
        />
      )}
    </div>
  )
}

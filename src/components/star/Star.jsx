import Starcolor from '../../assets/star.png'
import Starnocolor from '../../assets/starnocolor.png'
import './Star.scss'

export default function Star({ rating }) {
  const MaxStar = 5
  const nbStar = rating
  const stars = []

  for (let i = 0; i < MaxStar; i++) {
    if (i < nbStar) {
      stars.push(
        <img key={i} className="star" src={Starcolor} alt="étoile coloré" />
      )
    } else {
      stars.push(
        <img
          key={i}
          className="star"
          src={Starnocolor}
          alt="étoile non coloré"
        />
      )
    }
  }

  return <div className="countainer-star">{stars}</div>
}

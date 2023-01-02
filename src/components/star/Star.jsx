import Starcolor from '../../assets/star.png'
import Starnocolor from '../../assets/starnocolor.png'

export default function Star(props) {
  const MaxStar = 5
  const nbStar = props.rating
  const stars = []

  for (let i = 0; i < MaxStar; i++) {
    if (i < nbStar) {
      stars.push(<img key={i} src={Starcolor} alt="étoile coloré" />)
    } else {
      stars.push(<img key={i} src={Starnocolor} alt="étoile non coloré" />)
    }
  }

  return <div className="countainer-star">{stars}</div>
}

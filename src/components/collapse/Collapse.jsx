import './Collapse.scss'
import Vector from '../../assets/Vector.png'
import { useState } from 'react'

export default function Collapse() {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

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
    <div className="wrapper">
      <div className="accordion">
        {Items.map((item, i) => (
          <div key={item.id} className="item">
            <div className="title">
              <h2>{item.title}</h2>
              <button>
                <img
                  className="vector"
                  onClick={() => toggle(i)}
                  src={Vector}
                  alt="arrow"
                />
              </button>
            </div>
            <div>
              <p className={selected === i ? 'texte' : 'textedown'}>
                {item.texte}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

import './Collapse.scss'
import Vector from '../../assets/Vector.png'
import { useState } from 'react'

export default function Collapse({ id, title, texte, i }) {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <div key={id} className="collapse">
      <div className="title">
        <h2>{title}</h2>
        <button className="button-collapse">
          <img
            className={selected === i ? 'vector' : 'vectordown'}
            onClick={() => toggle(i)}
            src={Vector}
            alt="arrow"
          />
        </button>
      </div>
      <div>
        <p className={selected === i ? 'texte' : 'textedown'}>{texte}</p>
      </div>
    </div>
  )
}

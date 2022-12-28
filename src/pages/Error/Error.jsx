import './Error.scss'
import Header from '../../components/header/Header'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div>
      <Header />
      <h1 className="error error__tittle">404</h1>
      <h2 className="error error__second">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <h3>
        <Link className="error" to="/">
          <p className="error__third">Retourner sur la page d’accueil</p>
        </Link>
      </h3>
    </div>
  )
}

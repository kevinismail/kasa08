import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div className="Error">
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <Link to="/" className="Error__back-home">Retourner sur la page d'accueil</Link>
        </div>
    );
}
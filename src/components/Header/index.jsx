import '../../sass/main.css'
import { Link } from 'react-router-dom'
import logoHeader from '../../data/kasalogo.png'

export default function Header() {
    return (
            <header className="Header">
                <div className="Header__content">
                    <img src={logoHeader} alt="logo kasa" />
                    <nav className='Header__nav'>
                        <Link to="/" className="Home-link">Accueil</Link>
                        <Link to="/about" className="About">A propos</Link>
                    </nav>
                </div>
            </header>
    );
}
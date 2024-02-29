import kasaFoot from '../../data/kasalogofoot.png'

export default function Footer() {
    return (
            <footer className="Footer">
                <div className="Footer__content">
                    <img src={kasaFoot} alt="logo kasa pied de page" />
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </footer>
    );
}
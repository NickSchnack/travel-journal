import './Header.css'
import logo from '/src/assets/globe.svg'

export default function Header() {
    return (
        <header>
            <img src={logo} />
            <span className='nav-text'>my travel journal.</span>
        </header>
    );
}
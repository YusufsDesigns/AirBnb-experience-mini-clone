import '../style.css';
import Logo from '../assets/logo.png'

export default function Navbar(){
    return(
        <nav className="navbar">
            <img src={Logo} alt="" />
        </nav>
    )
}
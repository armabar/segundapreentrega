import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    return(
        
        <nav className="navbar">

            <div className="navbar-logo">

                <Link to="/">LOGO</Link>

            </div>
            
            <div className="navbar-container">

                <ul className="navbar-links">
                    <li>
                        <Link to="/category/Clasicas" className="link">CLASICAS</Link>
                    </li>
                    <li>
                        <Link to="/category/Especiales" className="link">ESPECIALES</Link>
                    </li>
                    <li>
                        <Link to="/category/Nuevas" className="link">NUEVAS</Link>
                    </li>
                    <li>
                        <Link to="/contacto" className="link">CONTACTO</Link>
                    </li>
                </ul>
            </div>
            
            <CartWidget/>
        </nav>
        
    )
}

export default Navbar;
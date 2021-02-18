import React from 'react';
import './styles/navbar.css';
import { Link } from "gatsby";
import Logo from '../images/logo.svg';


class Navbar extends React.Component {
    componentDidMount() {
        this.handleBurger();
    }

    handleBurger(){
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
            // Add a click event on each of them
            $navbarBurgers.forEach( el => {
                el.addEventListener('click', () => {
                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);
                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');
                });
            });
        }
    }

    render(){
        return(
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="container navbar__container">
                    <div className="navbar-brand">
                        <div className="navbar-item">
                            <img src={Logo} alt="" className="navbar__logo"/>
                        </div>   
                        <a role="button" className="navbar-burger burger has-text-black" aria-label="menu" aria-expanded="false"
                            data-target="navbar-menu">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>            
                    </div>
                    <div className="navbar-end">
                        <div id="navbar-menu" className="navbar-menu">
                            <Link to="/" className="navbar-item is-uppercase">Inicio</Link>
                            <Link to="/about" className="navbar-item is-uppercase">¿Quiénes somos?</Link>
                            <Link to="/services" className="navbar-item is-uppercase">servicios</Link>
                            <Link to="/contact" className="navbar-item is-uppercase">contacto</Link>
                        </div> 
                    </div>
                </div>
            </nav>

        )
        
    }
}

export default Navbar;
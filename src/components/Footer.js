import React from 'react';
import './footer.css';
import { ThemeContext } from './contexts/ThemeContext';
import { useContext } from 'react';

function Footer() {
    const [darkTheme] = useContext(ThemeContext)
    return (
        <div className="footer-wrapper">
            <div className="footer-cont">
                <h3 style={{
                    color: darkTheme ? "white" : "black"
                }}>Clive</h3>
                <h5 style={{
                    color: darkTheme ? "white" : "black"
                }}><i className="fa fa-copyright"></i> 2021</h5>
                <a href="https://instagram.com/_c.u.d.i/"><i className="fab fa-instagram" ></i></a>
                <a href="https://github.com/clive-cudi/"><i className="fab fa-github" ></i></a>
                <a href="https://www.linkedin.com/in/clive-flavius-230b67211/"><i className="fab fa-linkedin" ></i></a>
                <a href="https://www.facebook.com/derrick.karanjah/"><i className="fab fa-facebook" ></i></a>
            </div>
        </div>
    )
}

export default Footer

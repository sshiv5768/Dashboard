import React from "react";
import '../style/Header.css'
import logo from '../images/[PY’PRO].png'

const Header = () => {
    return (
        <div className="nav-header">
            <head>
                <title>PYPRO - Community for pros</title>
                <link rel="stylesheet" type="text/css" href="styles.css" />
            </head>
            <body>
                <header>
                    <img src={logo} alt="logo" className="logo"/>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li className="signin"><a href="#">Sign In</a></li>
                        </ul>
                    </nav>
                </header>
            </body>    
        </div>
    )
}

export default Header;
import React from "react";
import '../style/Header.css'

const Header = () => {
    return (
        <div>
            <head>
                <title>PYPRO - Community for pros</title>
                <link rel="stylesheet" type="text/css" href="styles.css" />
            </head>
            <body>
                <header>
                    <h1 className="com-name">PYPRO</h1>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Resources</a></li>
                            <li><a href="#">Questions</a></li>
                        </ul>
                    </nav>
                </header>
            </body>    
        </div>
    )
}

export default Header;
import * as React from 'react';
import { Link } from "react-router-dom";

// styles
import './styles.css';

const HeaderComponent: React.FC = () => {
    return(
        <>
            <header className="headerMenu">
                <svg className="headerBackground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#48e08f" fill-opacity="1" d="M0,96L60,117.3C120,139,240,181,360,208C480,235,600,245,720,240C840,235,960,213,1080,218.7C1200,224,1320,256,1380,272L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
                <div className="headerLinks">
                    <div className="headerLinksInterior">
                        <Link to="/" className="headerLink">Home</Link>
                        <Link to="/" className="headerLink">Home</Link>
                        <Link to="/" className="headerLink">Home</Link>
                        <Link to="/" className="headerLink">Home</Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderComponent;

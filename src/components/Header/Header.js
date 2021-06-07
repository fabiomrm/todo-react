import { Link } from 'react-router-dom';

import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meet Ups</div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/new-meetup">New Meet Up</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                </ul>
            </nav>
            
        </header>
    )
}

export default Header;

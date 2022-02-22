import Logo from '../../image/logo2.png';
import './Header.css';

const Header = () => {
    return (
        <div className="Header">
            <div className="Logo"><img src={Logo}></img></div>
            <div className="Header_links">
                <a href="#" className="links">Home</a>
                <a href="#" className="links">About</a>
                <a href="#" className="links">Life</a>
                <a href="#" className="links">SSB</a>
                <a href="#" className="links">Contact Us</a>
            </div>
        </div>
    );
};

export default Header;
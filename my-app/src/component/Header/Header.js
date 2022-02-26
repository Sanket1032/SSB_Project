import Logo from '../../image/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="Header">
            <div className="Logo"><img src={Logo}></img></div>
            <div className="Header_links">
                <ul>
                    <li className="Header_links_sub">
                        <a href="#" className="links">Home</a>
                    </li>
                    <li className="Header_links_sub" id="about">
                        <a href="#" className="links">About</a>
                        <ul className="subHeader">
                            <li className="subHeader_link"><a href="#">How To Join</a></li>
                            <li className="subHeader_link"><a href="#">Gallantry Awards</a></li>
                            <li className="subHeader_link"><a href="#">The Ethos of Indian Army</a></li>
                        </ul>
                    </li>
                    <li className="Header_links_sub">
                        <a href="#" className="links">Life</a>
                    </li>
                    <li className="Header_links_sub">
                        <a href="#" className="links">SSB</a>
                    </li>
                    <li className="Header_links_sub">
                        <a href="#" className="links">Contact Us</a>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Header;
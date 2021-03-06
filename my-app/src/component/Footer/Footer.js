import LogoImage from '../../image/logo_image.png';
import LogoName from '../../image/logo_name.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="upperFooter">
                <div className="Footer_Logo">
                    <img src={LogoImage} className="Logo_image"></img>
                    <img src={LogoName} className="Logo_name"></img>
                </div>
                <div className="Footer_Form">
                    <form className="Footer_Form_main">
                        <input id="Name" className="form_input" type="text" placeholder="Name"></input>
                        <input id="Email" className='form_input' type="email" placeholder="Email"></input>
                        <textarea id="textarea" rows="5" placeholder="Type your message here..."></textarea>
                        <div className="button" id="button_3">
                            <div id="circle"></div>
                            <button type="submit" className="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="lowerFooter">
                <p className="Disclaimer">Hey..You are looking at this masterpiece. So if you like this website, give the owner a peri peri treat ;).</p>
                <p className="copyright">@2021 Service Preparatory Academy: All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
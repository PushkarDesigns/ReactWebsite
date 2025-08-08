import { FaPhone } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


const Navbar = (props) => {
    console.log(props.nav);
    return (
        <>
            <header className="header">
                <a href="#" className="logo"><img src={props.nav.logo.src} alt="" /></a>
                <nav className="navbar">
                    {
                        props.nav.link.map((item) => <li><a href="#">{item.label}</a></li>)
                    }
                </nav>
                <div className="phone">
                    <FaPhone/>
                    {
                        <span>{props.nav.number}</span>
                    }
                </div>
                <div className="social-icons">
                    {
                    <ul>
                        <li><a href="#"><FaInstagram /></a></li>
                        <li><a href="#"><FaLinkedinIn /></a></li>
                        <li><a href="#"><FaFacebookF /></a></li>
                        <li><a href="#"><FaGooglePlusG /></a></li>
                    </ul>
                    }
                </div>
                {
                    <div className="search-icon"><a href="#"><FaSearch /></a></div>
                }
            </header>
        </>
    )
}

export default Navbar;
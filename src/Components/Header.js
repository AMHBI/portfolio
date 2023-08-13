import {Link} from "react-router-dom";
import styles from "../Styles/Header.module.css";
import instagram from "../assets/png/instagram.png";
import telegram from "../assets/png/telegram.png";
import whatsapp from "../assets/png/whatsapp.png";
import linkedin from "../assets/png/linkedin.png";
import github from "../assets/png/github.png";
import gitlab from "../assets/png/gitlab.png";



const Header = () => {
    
    return (
        <div className={styles.container}>
            <div className={styles.menuContainer}>
                <ul>
                    <li><Link to="/">About Me</Link></li>
                    <li><Link to="/projects" >Projects </Link></li>
                    <li><Link to="/contact-me" >Contact Me </Link></li>
                </ul>
            </div>
            <div className={styles.socialContainer} >
                <ul>
                    <li><a href='https://instagram.com/ali_mhb_am'><img src={instagram} alt='instagram'/></a></li>
                    <li><a href='https://t.me/amhb_ir'><img src={telegram} alt='telegram'/></a></li>
                    <li><a href='https://wa.me/+989058414664'><img src={whatsapp} alt='whatsapp'/></a></li>
                    <li><a href='https://linkedin.com/in/ali-mhb'><img src={linkedin} alt='linked in'/></a></li>
                    <li><a href='https://github.com/AMHBI'><img src={github} alt='github'/></a></li>
                    <li><a href='https://gitlab.com/AMHBI'><img src={gitlab} alt='gitlab'/></a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
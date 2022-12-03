import "..//../stylesheet/main/footer.css"
import { FaRocket } from 'react-icons/fa';

const Footer = ()=>{
    return(
        <footer>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur quia, fugit dolorum perspiciatis.</span>
            <div className="button-footer">
                <span>Contáctame</span>
                <span><FaRocket/></span>
            </div>
            <span className="footer-text">Hecho con ♥ por <span>Keinner Ross</span> ©2022</span>
        </footer>
    )
}

export default Footer;
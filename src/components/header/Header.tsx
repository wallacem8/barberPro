import logoFacebook from "../../assets/logo-facebook.svg";
import logoInstagram from "../../assets/logo-instagram.svg";
import logoTwitter from "../../assets/logo-twitter.svg";
import logoBarber from "../../assets/logobarber.svg";


import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.redesSociais}>
        <div>
            <a href="https://www.instagram.com/" target="_blank">
              <img className={styles.icons} src={logoInstagram} alt="logo instagram" />
            </a>
        </div>
        <div>
            <a href="https://www.facebook.com/" target="_blank">
              <img className={styles.icons} src={logoFacebook} alt="logo facebook" />
            </a>
        </div>
        <div>
            <a href="https://twitter.com/" target="_blank">
              <img className={styles.icons} src={logoTwitter} alt="logo twitter" />
            </a>
        </div>
      </div>

      <img className={styles.imageFundo} src={logoBarber} alt="logo" />


      <div className={styles.agendarSup}>
        <a href="*" target="_blank">
          <p>Agendar horário</p>
        </a>
      </div>
  
    </div>
    
    
  );
};

export default Header;

import image1 from "../../assets/image1.svg";
import imgage2 from "../../assets/image2.svg";
import imgage3 from "../../assets/image3.svg";

import styles from "./Sobre.module.css";

const Sobre = () => {
  return (
    <div className={styles.main1}>
      <div className={styles.texto}>
        <h2 className={styles.h2}>SOBRE</h2>
        <p className={styles.paragrafo}>
          O homem moderno também cuida da sua aparência e a barbearia BarberPRO
          é o melhor lugar para fazer isso! Temos uma equipe com os melhores
          profissionais da cidade e condições especiais para você sair daqui de
          cabelo na régua! Estamos te esperando!{" "}
        </p>
        <p>Horário de funcionamento: 09:00 às 19:00</p>
        <div className={styles.images}>
          <img className={styles.img1} src={image1} alt="" />
          <img className={styles.img2} src={imgage2} alt="" />
          <img className={styles.img3} src={imgage3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sobre;

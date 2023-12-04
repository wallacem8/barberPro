import styles from './Home.module.css';

const Home = () => {
    return(
        <div className={styles.main}>
            <div className={styles.textoCentral}>
                <h2>ESTILO É UM REFLEXO DA SUA ATITUDE E <span className={styles.span}>SUA PERSONALIDADE.</span></h2>
                <p>Horário de funcionamento: 09:00 ás 19:00</p>
            </div>
            <div>
                <a href="*" target="_blank">
                    <button>Agendar horário</button>
                </a>
            </div>
        </div>
    )
}

export default Home;
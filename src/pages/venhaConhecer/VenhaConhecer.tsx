import styles from './VenhaConhecer.module.css';

const VenhaConhecer = () => {
    return(
        <div className={styles.main}>
            <h2 className={styles.title}>Venha conhecer</h2>
            <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.0360677388426!2d-35.96350702532302!3d-8.299209491735885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a98b006545b10d%3A0x9391c96ad2ec7144!2sTaty%20Drinks%20e%20Show!5e0!3m2!1spt-BR!2sbr!4v1701711621133!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy"></iframe>
        </div>
    )
}

export default VenhaConhecer;
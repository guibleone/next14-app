import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>guidev</div>
      <div className={styles.text}>
        <a href="https://github.com/guibleone">Guilherme Leone © Todos os direitos reservados.</a>
      </div>
    </div>
  );
};

export default Footer;
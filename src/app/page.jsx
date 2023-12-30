import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Agência de Pensamentos Criativos.</h1>
        <p className={styles.desc}>
        Transformamos ideias em impacto. Sua visão, nossa criatividade.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Saiba Mais</button>
          <button className={styles.button}>Contato</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
      </div>
    </div>
  );
};

export default Home;
import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "Sobre nós",
  description: "Sobre nós",
};

export default function AboutPage () {

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>Sobre Nós</h2>
        <h1 className={styles.title}>
        Desenvolvemos ideias digitais maiores, mais ousadas, corajosas e melhores.
        </h1>
        <p className={styles.desc}>
        Criamos ideias digitais que são maiores, mais ousadas, mais corajosas e melhores. Acreditamos na flexibilidade e precisão das boas ideias. Somos a melhor equipe de consultoria e soluções financeiras do mundo. Oferecemos uma ampla gama de serviços de desenvolvimento de web e software.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Anos de experiência</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Anos de experiência</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Anos de experiência</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
}

import Image from "next/image";
import styles from "./contact.module.css"

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Nome completo" />
          <input type="text" placeholder="Endereço de Email" />
          <input type="text" placeholder="Número de celular (Opcional)" />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Menssagem"
          ></textarea>
          <button>Enviar</button>
        </form>
      </div>
    </div>
  )
}

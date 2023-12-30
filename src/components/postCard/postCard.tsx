import Link from 'next/link'
import styles from './postCard.module.css'
import Image from 'next/image'

export default function PostCard() {

    const post = {
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem.",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem.",
        img: "/post1.png",
        createdAt: new Date(),
        slug: "lorem-ipsum"
    }

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                {post.img && <div className={styles.imgContainer}>
                    <Image src={'/blog.jpg'} alt="" fill className={styles.img} />
                </div>}
                <span className={styles.date}>{post.createdAt?.toString().slice(4, 16)}</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.desc}>{post.body}</p>
                <Link className={styles.link} href={`/blog/${post.slug}`}>LER MAIS</Link>
            </div>
        </div>
    )
}

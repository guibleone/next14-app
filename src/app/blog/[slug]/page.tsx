import { Suspense } from 'react'
import styles from './singlePost.module.css'
import Image from 'next/image'

export default function SinglePostPage() {
  const post = {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem.",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem.",
    img: "/post1.png",
    createdAt: new Date(),
    slug: "lorem-ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem."
  }

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={'/blog.jpg'} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>

            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Publicado</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  )
}

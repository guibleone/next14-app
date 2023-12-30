'use client'
import { useState } from 'react'
import styles from './links.module.css'
import NavLink from './navLink/navLink'

export default function Links() {

    const links = [
        {
            title: 'Início',
            href: '/'
        },
        {
            title: 'Sobre',
            href: '/sobre'
        },
        {
            title: 'Contato',
            href: '/contato'
        },
        {
            title: 'Blog',
            href: '/blog'
        }
    ]

    const [open, setOpen] = useState(false)


    const session = true
    const isAdmin = true

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link, index) => (
                    <NavLink item={link} key={index} />
                ))}
                {session ? (
                    <>
                        {isAdmin && (<NavLink item={{ title: 'Admin', href: '/admin' }} />)}
                        <button className={styles.logout}>Sair</button>
                    </>
                ) : (
                    <NavLink item={{ title: 'Entrar', href: '/login' }} />
                )}
            </div>
            <button className={styles.menuButton} onClick={() => setOpen(prev => !prev)}>Menu</button>
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link, index) => (
                        <NavLink item={link} key={index} />
                    ))}
                </div>
            )}
        </div>
    )
}

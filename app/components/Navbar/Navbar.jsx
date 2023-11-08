//Next.js configuration - renders component on the client side/browser, apply to components with interactivity
"use client";
//Imports Link functionality for routing between pages, wrapper for an <a> intercepts requests and handles routing on the browser side
import Link from 'next/Link';
import styles from './Navbar.module.css';

//Navbar Component
export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}><Link href="/"><img src={"/images/new-logo-long-reverse.png"} className={styles.img} /></Link></li>
                <li className={styles.li}><Link href="/" className={styles.navLinks}>Home</Link></li>
                <li className={styles.li}><Link href="/About" className={styles.navLinks}>About</Link></li>
                <li className={styles.li}><Link href="/Portfolio" className={styles.navLinks}>Portfolio</Link></li>
                <li className={styles.li}><Link href="/Contact" className={styles.navLinks}>Contact</Link></li>
            </ul>
        </nav>
    )
  }
  
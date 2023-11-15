import TypingAnimation from ".././components/TypingAnimation/TypingAnimation.jsx";
import styles from './page.module.css';
import Link from 'next/Link';

//Contact Page
export default function Contact() {
    return (
        <main>
            <div className={styles.introContainer}>
                <TypingAnimation page='Contact' />
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.textSection}>
                    <h1>Let's Chat!</h1>
                    <h2>Get in touch.</h2>
                    <h4>Email:</h4>
                    <p>dh@dylanhedges.com</p>
                    <h4>LinkedIn:</h4>
                    <Link href="https://www.linkedin.com/in/dylan-hedges/" className={styles.linkStyle} target="_blank"><p>linkedin.com/in/dylan-hedges/</p></Link>
                    <h4>GitHub:</h4>
                    <Link href="https://github.com/Dylan-Hedges" className={styles.linkStyle} target="_blank"><p>github.com/Dylan-Hedges</p></Link>
                </div>
                <div className={styles.imageSection}>
                    <img  className={styles.image}src="/images/contact.jpg" alt=""/>
                </div>
            </div>
        </main>
    )
}
  
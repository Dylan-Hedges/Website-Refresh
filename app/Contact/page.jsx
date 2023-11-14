import TypingAnimation from ".././components/TypingAnimation/TypingAnimation.jsx";
import styles from './page.module.css';

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
                    <p>linkedin.com/in/dylan-hedges/</p>
                    <h4>GitHub:</h4>
                    <p>github.com/Dylan-Hedges</p>
                </div>
                <div className={styles.imageSection}>
                    <img  className={styles.image}src="/images/contact.jpg" alt=""/>
                </div>
            </div>
        </main>
    )
}
  
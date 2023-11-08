import TypingAnimation from ".././components/TypingAnimation/TypingAnimation.jsx";
import styles from './page.module.css';

//Contact Page
export default function Contact() {
    return (
        <main>
            <div className={styles.introContainer}>
                <TypingAnimation page='Contact' />
            </div>
        </main>
    )
}
  
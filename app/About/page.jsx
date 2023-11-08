import TypingAnimation from ".././components/TypingAnimation/TypingAnimation.jsx";
import styles from './page.module.css';

//About Page
export default function About() {
    return (
        <main>
            <div className={styles.introContainer}>
                <TypingAnimation page='About' />
            </div>
            <iframe
                src="https://timeline.dylanhedges.com/"
                title="Example iframe"
                width="100%"
                height="500px"
                allowFullScreen
            ></iframe>
        </main>
    )
}
  
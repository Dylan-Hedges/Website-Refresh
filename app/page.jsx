import TypingAnimation from "./components/TypingAnimation/TypingAnimation.jsx";
import styles from './page.module.css';
import Link from 'next/Link';

//Home Page
export default function Home() {
    return (
        <main>
            <h1 className={styles.h1}>Dylan Hedges</h1>
            <TypingAnimation page='Home' />
            <h2 className={styles.h2}>Want to play a game instead?</h2>
            <Link href="https://portfoliogame.dylanhedges.com/" target="_blank"><img src={"/images/portfolio-game-thumb.png"} className={styles.img} /></Link>
        </main>
    )
}
  
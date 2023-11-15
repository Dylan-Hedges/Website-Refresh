import TypingAnimation from "./components/TypingAnimation/TypingAnimation.jsx";
import ProjectSelection from "./components/ProjectSelection/ProjectSelection";
import SkillsBanner from "./components/SkillsBanner/SkillsBanner.jsx";
import styles from './page.module.css';
import Link from 'next/Link';

//Home Page
export default function Home() {
    return (
        <main>
            {/*Intro Section*/}
            <div className={styles.introContainer}>
                <h1>Dylan Hedges</h1>
                <TypingAnimation page='Home' />
            </div>
            {/*About section*/}
            <div className={styles.aboutContainer}>
                <div className={styles.textSection}>
                    <p>Web & UI Developer specialising in creating interactive and engaging websites and web applications using HTML, CSS, JavaScript & React.</p>
                    <p>I’m always open to new opportunities. Reach out to me anytime directly via email or LinkedIn.</p>
                    <Link href="/Contact"><button>Get in touch!</button></Link>
                </div>
                <div className={styles.imageSection}>
                    <img src="/images/home-intro.jpg" />
                </div>
            </div>
            {/*Skills Section*/}
            <div className={styles.skillsContainer}>
                <h1>Skills</h1>
                <SkillsBanner />
            </div>
            {/*Game Section*/}
            <div className={styles.gameContainer}>
                <h1>Want to play a game instead?</h1>
                <Link href="https://portfoliogame.dylanhedges.com/" target="_blank"><img src={"/images/portfolio-game-thumb.png"} /></Link>
            </div>
            {/*Projects Section*/}
            <div className={styles.projectsContainer}>
                <h1>Projects</h1>
                <ProjectSelection />
            </div>
        </main>
    )
}
  
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
            <div className={styles.channelsContainer}>
                <h1 className={styles.channelsHeader}>Favourite Channels</h1>
                <iframe className={styles.video1} src="https://www.youtube.com/embed/VGu1vDAWNTg?si=qdByFbORh_xhRdck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe className={styles.video2} src="https://www.youtube.com/embed/BI1o2H9z9fo?si=EhtO0s8_x8zoe8hc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe className={styles.video3} src="https://www.youtube.com/embed/y8CYSwHXVNE?si=RTaVophJY22Txruh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe className={styles.video4} src="https://www.youtube.com/embed/RmveJc8_voo?si=YlDFAp4JvuaoDy31" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe className={styles.video5} src="https://www.youtube.com/embed/e1dA5MLuS44?si=uv_zeKquluwb_JUv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe className={styles.video6} src="https://www.youtube.com/embed/jx8olulc3zE?si=KK-F1ZFovhci7JFo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </main>
    )
}
  
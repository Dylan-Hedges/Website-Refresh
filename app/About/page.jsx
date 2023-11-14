import TypingAnimation from ".././components/TypingAnimation/TypingAnimation.jsx";
import styles from './page.module.css';

//About Page
export default function About() {
    return (
        <main>
            {/*Page Header Section*/}
            <div className={styles.introContainer}>
                <TypingAnimation page='About' />
            </div>
            {/*Intro Section*/}
            <div className={styles.contentContainer}>
                <div className={styles.textSection}>
                    <h4>Hi, i'm Dylan.</h4>
                    <p>I’m a Web & UI Developer specialising in creating interactive and engaging websites and web applications using HTML, CSS, JavaScript & React.</p>
                    <p>My background is in IT, Network Engineering and Front-End web development.</p>
                    <p>To learn more about my skills and experience please visit the portfolio and about pages of this site.</p>
                    <p>I’m always open to exploring new possibilities, reach out to me anytime directly via email or LinkedIn.</p>
                </div>
                <div className={styles.imageSection}>
                    <img src="/images/profile-photo.jpg" className={styles.image}/>
                </div>
            </div>
            {/*Interactive Timeline Section - Larger Screens*/}
            <div className={styles.timelineContainer}>
                <h3>Drag the slider to learn more</h3>
                <iframe
                    src="https://timeline.dylanhedges.com/"
                    title="Example iframe"
                    width="100%"
                    height="500px"
                    allowFullScreen
                ></iframe>
            </div>
            {/*Static Timeline Section - Smaller Screens*/}
            <div className={styles.staticTimelineContainer}>
                <div className={styles.row1}>
                    <div className={styles.rowImage}>
                        <img src="/images/circle-dot.svg" />
                    </div>
                    <div className={styles.rowText}>
                        <h5>IT BSc (First-Class Honours)</h5>
                        <h6>Bournemouth University (2010-2014)</h6>
                        <p>Web Development (HTML, CSS, JavaScript), Relational Databases (MySQL), Networking and Security (Cisco)</p>
                    </div>
                </div>
                <div className={styles.row2}>
                    <div className={styles.rowImage}>
                        <img src="/images/circle-dot.svg" />
                    </div>
                    <div className={styles.rowText}>
                        <h5>Network Engineer </h5>
                        <h6>Intel (2012-2013)</h6>
                        <p>Supported and maintained the enterprise network infrastructure, installed, configured and maintained networking equipment, provided end user support</p>
                    </div>
                </div>
                <div className={styles.row3}>
                    <div className={styles.rowImage}>
                        <img src="/images/circle-dot.svg" />
                    </div>
                    <div className={styles.rowText}>
                        <h5>UI Developer</h5>
                        <h6>PwC (2014-2017)</h6>
                        <p>Developed engaging web-based courses, created interactive User Interfaces and digital front-ends, coordinated projects and communicated with stakeholders</p>
                    </div>
                </div>
                <div className={styles.row4}>
                    <div className={styles.rowImage}>
                        <img src="/images/circle-dot.svg" />
                    </div>
                    <div className={styles.rowText}>
                        <h5>UI Developer</h5>
                        <h6>Pathways Training (2018-2022)</h6>
                        <p>Worked with clients to develop interactive web-based courses, created User Interfaces & engaging User Experiences, maintained & updated the company website and increased SEO ranking</p>
                    </div>
                </div>
                <div className={styles.row5}>
                    <div className={styles.rowImage}>
                        <img src="/images/circle-dot.svg" />
                    </div>
                    <div className={styles.rowText}>
                        <h5>UI Developer</h5>
                        <h6>IC Axon (2022-2023)</h6>
                        <p>Developed interactive web-based courses, maintained and updated the company website, created customised HTML emails for mass communication</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
  
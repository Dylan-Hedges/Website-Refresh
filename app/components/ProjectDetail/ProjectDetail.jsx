import Link from 'next/Link';
import styles from './ProjectDetail.module.css';

export default function ProjectCard(props){
    const name = props.projectInfo.name;
    const image = props.projectInfo.image;
    const projectURL = props.projectInfo.projectURL;
    const bullets = props.projectInfo.bullets;
    const gitHubURL = props.projectInfo.gitHubURL;

    return(
        <div className={styles.cardContainer}>
            <div className={styles.h1}>
                <h1>{name}</h1>
            </div>
            <div className={styles.thumbImg}>
                <Link href={projectURL} target="_blank"><img src={image} /></Link>
            </div>
            <div className={styles.icons}>
                <Link href={projectURL} target="_blank"><img src="/images/eye.png" /></Link>
                <Link href={gitHubURL} target="_blank"><img src="/images/github.png" /></Link>
            </div>
            <div className={styles.bulletList}>
                <ul className={styles.ul}>
                    {bullets.map((bullet)=>{
                        return <li className={styles.li}>{bullet}</li>
                    })
                    }
                </ul>
            </div>
        </div>
    )
}

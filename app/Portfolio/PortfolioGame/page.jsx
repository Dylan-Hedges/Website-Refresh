import ProjectCard from "../../components/ProjectDetail/ProjectDetail";

export default function PortfolioGame() {
    const projectInfo ={
        name: 'Portfolio Game',
        image: '/images/portfolio-game-thumb.png',
        projectURL: 'https://portfoliogame.dylanhedges.com/',
        bullets: [
            'Interactive Portfolio game developed using Storyline',
            'Alternative to a standard portfolio website',
            'Control the character using a keyboard',
            'Hit the boxes to get more information about my skills & experience',
            'Contains background music and sound effects'
        ],
        gitHubURL: 'https://github.com/Dylan-Hedges/Portfolio-Game'
    }

    return (
        <main>
            <ProjectCard projectInfo={projectInfo} />
        </main>
    )
}
  
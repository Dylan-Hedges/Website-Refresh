import ProjectCard from "../../components/ProjectDetail/ProjectDetail";

export default function PortfolioWebsite() {
    const projectInfo ={
        name: 'Portfolio Website',
        image: '/images/portfolio-thumb.png',
        projectURL: 'https://dylanhedges.com/',
        bullets: [
            'Personal Portfolio website',
            'Developed using React, Next.js, HTML & CSS modules',
            'Learn more about my background, skills and experience',
            'View projects under the Portfolio section',
            'Responsive for a variety of devices and is fully customisable '
        ],
        gitHubURL: 'https://github.com/Dylan-Hedges/Website-Refresh'
    }

    return (
        <main>
            <ProjectCard projectInfo={projectInfo} />
        </main>
    )
}
  
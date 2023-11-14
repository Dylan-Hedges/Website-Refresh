import ProjectCard from "../../components/ProjectDetail/ProjectDetail";

export default function EverydayHomes() {
    const projectInfo ={
        name: 'Everyday Homes',
        image: '/images/everyday-homes-thumb.png',
        projectURL: 'https://everydayhomes.dylanhedges.com/',
        bullets: [
            'Real Estate website',
            'Developed using React, Node, HTML, CSS, Bootstrap',
            'Search for and find properties',
            'Filter by home type, bedrooms, price and amenities',
            'Find more info about the company and its agents'
        ],
        gitHubURL: 'https://github.com/Dylan-Hedges/react-real-estate-app-cra'
    }

    return (
        <main>
            <ProjectCard projectInfo={projectInfo} />
        </main>
    )
}
  
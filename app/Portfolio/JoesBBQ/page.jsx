import ProjectCard from "../../components/ProjectDetail/ProjectDetail";

export default function JoesBBQ() {
    const projectInfo ={
        name: 'Joes BBQ',
        image: '/images/joes-bbq-thumb.png',
        projectURL: 'https://joesbbq.dylanhedges.com/',
        bullets: [
            'Restaurant website for a BBQ smokehouse',
            'Developed using React, Node, HTML, SCSS, Bootstrap',
            'Displays restaurant menu, reviews and special offers',
            'Contact info and opening times for the restaurant',
            'Fully responsive and works on a variety of devices'
        ],
        gitHubURL: 'https://github.com/Dylan-Hedges/React-Restaurant-App'
    }

    return (
        <main>
            <ProjectCard projectInfo={projectInfo} />
        </main>
    )
}
  
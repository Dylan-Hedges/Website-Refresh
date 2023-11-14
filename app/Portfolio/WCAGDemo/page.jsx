import ProjectCard from "../../components/ProjectDetail/ProjectDetail";

export default function WCAGDemo() {
    const projectInfo ={
        name: 'WCAG Demo',
        image: '/images/wcag-demo-thumb.png',
        projectURL: 'https://wcagdemo.dylanhedges.com/',
        bullets: [
            'Web Content Accessibility Guidelines demo',
            'Implements Success Criterion from WCAG 2.2',
            'Developed using Storyline',
            'Keyboard accessible and does not require a mouse',
            'Covers guidelines such as use of colour, captions, focus order etc.'
        ],
        gitHubURL: 'https://github.com/Dylan-Hedges/WCAG-Demo'
    }

    return (
        <main>
            <ProjectCard projectInfo={projectInfo} />
        </main>
    )
}
  
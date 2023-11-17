import ProjectCard from "../../components/ProjectDetail/ProjectDetail";

export default function SurveySend() {
    const projectInfo ={
        name: 'Survey-Send',
        image: '/images/survey-send-thumb.png',
        projectURL: 'https://quiet-coast-41651.herokuapp.com',
        bullets: [
            'Email Survey web application',
            'Developed using React, Redux, MongoDB, Node, Express, Stripe, SendGrid',
            'Create and send email surveys to participants and see responses',
            'Captures, stores and displays recipient response data',
            'To purchase credits use card number: 4242 4242 4242 4242',
        ],
        gitHubURL: 'https://github.com/Dylan-Hedges/NodeWithReactFullStack2019'
    }

    return (
        <main>
            <ProjectCard projectInfo={projectInfo} />
        </main>
    )
}
  
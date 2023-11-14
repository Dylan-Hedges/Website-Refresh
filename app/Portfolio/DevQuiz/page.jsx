import ProjectCard from "../../components/ProjectDetail/ProjectDetail";

export default function DevQuiz() {
    const projectInfo ={
        name: 'Dev-Quiz',
        image: '/images/dev-quiz-thumb.png',
        projectURL: 'https://dev-quiz-application-e66b5490dae6.herokuapp.com/',
        bullets: [
            'Interactive Quiz application ',
            'Developed using React, Node, Express & ChatGPT API',
            'Evaluate your proficiency in coding by engaging in conversations with ChatGPT',
            'Answer questions and receive immediate feedback and responses',
            'Click on one of the icons to get asked a question'
        ],
        gitHubURL: 'https://github.com/Dylan-Hedges/Dev-Quiz-App'
    }

    return (
        <main>
            <ProjectCard projectInfo={projectInfo} />
        </main>
    )
}
  
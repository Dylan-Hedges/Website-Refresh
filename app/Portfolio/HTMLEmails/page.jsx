import ProjectCard from "../../components/ProjectDetail/ProjectDetail";

export default function HTMLEmails() {
    const projectInfo ={
        name: 'Custom HTML Emails',
        image: '/images/custom-emails-thumb.png',
        projectURL: 'https://customhtmlemails.dylanhedges.com/',
        bullets: [
            'Custom HTML email templates',
            'Developed using MJML, HTML & CSS ',
            'Emails are compatible with a variety of email clients',
            'Contains light and dark versions of each email type',
            'Emails can be viewed in the browser or in an email client'
        ],
        gitHubURL: 'https://github.com/Dylan-Hedges/Custom-HTML-emails'
    }

    return (
        <main>
            <ProjectCard projectInfo={projectInfo} />
        </main>
    )
}
  
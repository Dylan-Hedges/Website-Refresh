import ProjectCard from "../../components/ProjectDetail/ProjectDetail";

export default function YouTubePlayer() {
    const projectInfo ={
        name: 'YouTube Player',
        image: '/images/youtube-player-thumb.png',
        projectURL: 'https://youtubeplayer.dylanhedges.com/',
        bullets: [
            'YouTube video player web application',
            'Developed using React, Node, HTML, CSS, Bootstrap',
            'Search for and play any YouTube videos',
            'Fully responsive and contains YouTube player functionality',
            'Integrates with the YouTube API'
        ],
        gitHubURL: 'https://github.com/Dylan-Hedges/ReactYoutubePlayer'
    }

    return (
        <main>
            <ProjectCard projectInfo={projectInfo} />
        </main>
    )
}
  
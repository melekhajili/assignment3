import { projects, skills } from '../constants';
import "../styles/Home.css"
import {MelekPic} from "../assets"

const Home = () => {
    return (
        <div className="home">
            <div className="about-section">
                <div className="about-image">
                    <img src={MelekPic} alt="my picture" />
                </div>
                <div className="about-content">
                    <h2>About Me</h2>
                    <p><span className="about-name">Hello! I'm Melek, a dedicated IT Project Manager </span> with a proven track record of successfully leading and delivering projects with precision. My passion lies in orchestrating seamless project executions, ensuring that timelines are met and objectives achieved.  Feel free to browse my portfolio and get in touch for any collaborations!</p>
                </div>
            </div>
            <h1>My Projects</h1>
            <div className="project-list">
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} project={project} />
                ))}
            </div>
            <div className="skills-section">
            <h2>My Skills</h2>
<p>Leadership Skills: Foster communication and teamwork.

Project Management Basics: Learn project planning and task management.

Business Alignment: Understand IT's role in achieving business goals.

Soft Skills: Improve writing, presentation, and team-building.

IT Security Awareness: Familiarize yourself with cybersecurity basics.

Budget Basics: Learn essentials of budgeting in IT projects.

Vendor Interaction: Explore working with external vendors.

Change Management Intro: Adapt to new technologies effectively.

Networking Skills: Develop connections within the IT community.

Continuous Learning: Cultivate a mindset of ongoing professional growth.</p>
        </div>
        </div>
    );
};

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
        </div>
    );
};
export default Home;

import { projects, skills } from '../constants';
import "../styles/Home.css"
import {melekPic} from "../assets"
const Home = () => {
    return (
        <div className="home">
            <div className="about-section">
                <div className="about-image">
                    <img src={melekPic} alt="my picture" />
                </div>
                <div className="about-content">
                    <h2>About Me</h2>
                    <p>Hello! I'm <span className="about-name">Melek</span>, a dedicated IT Project Manager with a proven track record of successfully leading and delivering projects with precision. My passion lies in orchestrating seamless project executions, ensuring that timelines are met and objectives achieved.  Feel free to browse my portfolio and get in touch for any collaborations!</p>
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
            {skills.map(skill => (
                <div className="skill" key={skill.name}>
                    <span>{skill.name}</span>
                    <div className="skill-bar">
                        <div className="skill-level" style={{ width: skill.level }}></div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a target="_blank" href={project.link} rel="noreferrer">Learn More</a>
        </div>
    );
};
export default Home;
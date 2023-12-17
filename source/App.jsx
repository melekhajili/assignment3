import { projects } from '../constants';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a target="_blank" href={project.link} rel='external'>Learn More</a>
        </div>
    );
};

const Home = () => {
    return (
        <div className="home">
            <h1>My Projects</h1>
            <div className="project-list">
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Home;
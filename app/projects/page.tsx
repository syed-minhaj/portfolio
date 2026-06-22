import { Projects } from "../data/projects";
import ProjectsClient from "./components/projectsClient";

export default function ProjectsPage() {
    return <ProjectsClient projects={Projects} />;
}
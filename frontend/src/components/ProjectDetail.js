import React from "react";
import {useParams} from "react-router-dom";
import ProjectItem from "./ProjectItem";

const ProjectDetail = ({projects}) => {
    let {projectId} = useParams()
    let filter_projects = projects.filter((project) => project.id = projectId)
    return (
        <div className="content">
            <table>
                <h1>JJJJ{projectId}</h1>
                <th>ID</th>
                <th>Name</th>
                <th>Users</th>
                <th>Repository</th>
                {filter_projects.map((item) => <ProjectItem project={item}/>)}
            </table>
        </div>
    )
}

export default ProjectDetail
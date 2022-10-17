import React from 'react'
import ProjectItem from "./ProjectItem";

const ProjectList = ({projects, delete_project}) => {
    return (
        <div className="content">
            <table>
                <th>ID</th>
                <th>Name </th>
                <th>Users</th>
                <th>Repository</th>
                {projects.map((item) => <ProjectItem project={item} delete_project={delete_project}/>)}
            </table>
        </div>
    )
}

export default ProjectList
import React from 'react'
import ProjectItem from "./ProjectItem";
import {Link} from 'react-router-dom';

const ProjectList = ({projects}) => {
    return (
        <div className="content">
            <table>
                <th>Name </th>
                <th>Users</th>
                <th>Repository</th>
                {projects.map((item) => <ProjectItem project={item}/>)}
            </table>
        </div>
    )
}

export default ProjectList
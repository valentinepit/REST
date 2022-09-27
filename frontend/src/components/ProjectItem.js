import React from 'react'
import {Link} from "react-router-dom";


const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>
                {project.id}
            </td>
            <td>
                <Link to={`/projects/${project.id}`}>{project.name}</Link>
            </td>
            <td>
                {project.users}
            </td>
            <td>
                {project.repository}
            </td>
        </tr>
    )
}


export default ProjectItem
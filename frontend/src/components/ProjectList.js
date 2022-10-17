import React from 'react'
import {Link} from "react-router-dom";


const ProjectList = ({project}) => {
    return (
        <li>
            <Link to={`/projects/${project.id}`}>{project.name}</Link>
        </li>
    )
}


export default ProjectList
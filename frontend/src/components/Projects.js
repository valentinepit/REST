import React from 'react'


const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>
                {project.name}
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

const ProjectList = ({projects}) => {
    return (
        <div className="content">
            <table>
                <th>Firs Name</th>
                <th>Last Name</th>
                <th>E-mail</th>
                {/*<div>{{ projects }}</div>*/}
                {/*{projects.map((item) => <ProjectItem project={item}/>)}*/}
            </table>
        </div>
    )
}

export default ProjectList
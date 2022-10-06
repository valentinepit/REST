import React from 'react'
import {useParams} from "react-router-dom";


const TodoFilter = ({notes}) => {
    let {todoId} = useParams()
    console.log("Notes = ", notes)
    let filter_notes = notes.filter((todo) => todo.id === parseInt(todoId))
    return (
        <div className="content">
            <table>
                <th>Text</th>
                <th>Project</th>
                <th>Created_at</th>
                <th>Updated_at</th>
                <th>User</th>
                <th>Is_Active</th>
                {filter_notes.map((item) => <TodoDetail todo={item}/>)}
            </table>
        </div>
    )
}
const TodoDetail = ({todo}) => {
    return (
        <tr>
            <td>{todo.text}</td>
            <td>{todo.project}</td>
            <td>{todo.createdAt}</td>
            <td>{todo.updatedAt}</td>
            <td>{todo.user}</td>
            <td>{todo.isActive}</td>
        </tr>
    )
}
export default TodoFilter
import React from 'react'
import {Link} from "react-router-dom";


const TodoItem = ({todo}) => {
    return (
        <tr>
            <td>
                {todo.project}
            </td>
            <td>
                <Link to={`/todo/${todo.id}`}>{todo.text}</Link>
            </td>
            <td>
                {todo.createdAt}
            </td>
        </tr>
    )
}

const TodoList = ({todo}) => {
    return (
        <div className="content">
            <table>
                <th>Project</th>
                <th>Text</th>
                <th>Created at</th>
                {todo.map((item) => <TodoItem todo={item}/>)}
            </table>
        </div>
    )
}

export default TodoList
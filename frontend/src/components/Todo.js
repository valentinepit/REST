import React from 'react'
import {Link} from "react-router-dom";


const TodoItem = ({todo, delete_todo}) => {
    return (
        <tr>
            <td>
                {todo.id}
            </td>
            <td>
                {todo.project}
            </td>
            <td>
                <Link to={`/todo/${todo.id}`}>{todo.text}</Link>
            </td>
            <td>
                {todo.createdAt}
            </td>
            <td>
                <button onClick={()=>delete_todo(todo.id)} type="button">Delete</button>
            </td>
        </tr>
    )
}

const TodoList = ({todo, delete_todo}) => {
    return (
        <div className="content">
            <table>
                <th>ID</th>
                <th>Project_ID</th>
                <th>Text</th>
                <th>Created at</th>
                {todo.map((item) => <TodoItem todo={item} delete_todo={delete_todo}/>)}
            </table>
        </div>
    )
}

export default TodoList
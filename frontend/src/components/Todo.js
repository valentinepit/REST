import React from 'react'


const TodoItem = ({todo}) => {
    return (
        <tr>
            <td>
                {todo.text}
            </td>
            <td>
                {todo.project}
            </td>
            <td>
                {todo.created_at}
            </td>
            <td>
                {todo.updated_at}
            </td>
            <td>
                {todo.is_active}
            </td>
            <td>
                {todo.user}
            </td>
        </tr>
    )
}

const TodoList = ({todo}) => {
    return (
        <div className="content">
            <table>
                <th>Name</th>
                <th>Users</th>
                <th>Repository</th>
                {todo.map((item) => <TodoItem todo={item}/>)}
            </table>
        </div>
    )
}

export default TodoList
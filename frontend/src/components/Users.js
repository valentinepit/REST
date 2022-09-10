import React from 'react'


const UserItem = ({user}) => {
    return (
        <tr>
            <td>
                {user.first_name}
            </td>
            <td>
                {user.last_name}
            </td>
            <td>
                {user.email}
            </td>
        </tr>
    )
}

const UserList = ({users}) => {
    return(
        <table>
            <th>Firs Name</th>
            <th>Last Name</th>
            <th>E-mail</th>
            {users.map((item) => <UserItem user={item}/>)}
        </table>
    )
}

export default UserList
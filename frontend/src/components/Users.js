import React from 'react'


const UserItem = ({user}) => {
    return (
        <tr>
            <td>
                {user.firstName}
            </td>
            <td>
                {user.lastName}
            </td>
            <td>
                {user.email}
            </td>
        </tr>
    )
}

const UserList = ({users}) => {
    return (
        <div className="content">
            <table>
                <th>Firs Name</th>
                <th>Last Name</th>
                <th>E-mail</th>
                {users.map((item) => <UserItem user={item}/>)}
            </table>
        </div>
    )
}

export default UserList
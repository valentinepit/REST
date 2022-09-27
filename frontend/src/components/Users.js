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
                <th className="components">Firs Name</th>
                <th className="components">Last Name</th>
                <th className="components">E-mail</th>
                {users.map((item) => <UserItem user={item}/>)}
            </table>
        </div>
    )
}

export default UserList
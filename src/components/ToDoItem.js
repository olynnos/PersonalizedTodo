import React from 'react'

export default function ToDoItem({ id, action, status, changeStatus, deleteTask }) {

    return (

        <tr>
            <th scope="row">{id}</th>
            <td>{action}</td>
            <td><input type="checkbox" checked={status && true} onChange={() => changeStatus(id)} /></td>
            {status && <td><button onClick={() => deleteTask(id)}>Delete</button></td>}
        </tr>

    )
}

import React from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'

export default function ToDoItem({ id, action, status }) {
    return (

        <tr>
            <th scope="row">{id}</th>
            <td>{action}</td>
            <td>{status ? <FaCheck /> : <FaTimes />}</td>
            {status && <td><button>delete</button></td>}
        </tr>

    )
}

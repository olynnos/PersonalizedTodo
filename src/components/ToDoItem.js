import React from 'react'

export default function ToDoItem({ id, action, status }) {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Action</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{id}</th>
                        <td>{action}</td>
                        <td>{status ? "Done" : "Not done"}</td>
                        {status && <td><button>delete</button></td>}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

import React, { useState } from 'react'

import ToDoItem from './ToDoItem';

export default function ToDoList({ name }) {


    const [todos, setTodos] = useState([{ id: 1, action: "Finish this project", status: true }])
    let [newTodo, setNewTodo] = useState("");

    const updateToDo = (e) => {
        setNewTodo(e.target.value)
    }

    const addTodo = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, { id: todos.length + 1, action: newTodo, status: false }])
            setNewTodo("")
        }
    }

    const changeStatus = id => {
        setTodos(todos.map(item => item.id === id ? { ...item, status: !item.status } : item))
    }

    const deleteTask = id => {
        {/* Delete the task but also update the id so that the id will match the number of task in the list */ }
        const updatedTodo = todos.filter(item => item.id !== id)
        let idCounter = 0
        setTodos(updatedTodo.map(item => {
            idCounter++;
            return ({ ...item, id: idCounter })
        }))
        // setTodos([...updatedTodo])
    }



    return (
        <div>
            <h4 className="bg-primary text-white text-center p-2">
                {/* Calling the userName state */}
                {name}'s To Do List
                ({todos.filter(t => !t.status).length} items to do)
            </h4>
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
                <table className="table table-striped table-hover text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Action</th>
                            <th scope="col">Status</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(todo => <ToDoItem key={todo.id} id={todo.id} action={todo.action} status={todo.status} changeStatus={changeStatus} deleteTask={deleteTask} />)}
                    </tbody>
                </table>
                <div className="input-group w-50 my-1">
                    <input
                        type="text"
                        className="form-control text-center"
                        placeholder="What do you want to add to the list"
                        value={newTodo}
                        onChange={updateToDo}
                    />
                    <div className="input-group-prepend">
                        <button
                            className="input-group-text"
                            style={{ cursor: "pointer" }}
                            onClick={addTodo}
                        >Add item to list</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

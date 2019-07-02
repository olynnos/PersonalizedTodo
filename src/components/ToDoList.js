import React, { useState } from 'react'

import ToDoItem from './ToDoItem';

export default function ToDoList({ name }) {


    const [todos, setTodos] = useState([{ id: 1, action: "Finish this project", status: true }])
    let [newTodo, setNewTodo] = useState("");

    const updateToDo = (e) => {
        /*
            Check if there are any changes in the input box and set the value of the new todo item to any changes.
        */
        setNewTodo(e.target.value)
    }

    const addTodo = () => {
        /*
            Check if there are any white spaces before or after the input value. Strip these whitespaces.
            Also prevent from adding item to list if input box is empty or contain only whitespaces
        */
        if (newTodo.trim() !== "") {
            setTodos([...todos, { id: todos.length + 1, action: newTodo, status: false }])
            setNewTodo("")
        }
    }

    const changeStatus = id => {
        /*
            loop through all the items in todos and find the item with the matching parameter
            Change the status of the matchign item while returning the rest untouched
        */
        setTodos(todos.map(item => item.id === id ? { ...item, status: !item.status } : item))
    }

    const deleteTask = id => {
        /*
            Updated the id of each element after deleting an item from the list.
            Loop throught the new array and update each element id with the idCounter.
            This way the id will update to match the current number of items in the lists and prevents repeating id's
        */
        const updatedTodo = todos.filter(item => item.id !== id)
        let idCounter = 0
        setTodos(updatedTodo.map(item => {
            idCounter++;
            return ({ ...item, id: idCounter })
        }))

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
                        {/* Mapping through each item in the todo state and rendering them each as a ToDoItem component with props*/}
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

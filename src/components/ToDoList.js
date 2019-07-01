import React from 'react'

export default function ToDoList({ name }) {
    return (
        <div>
            <h4 className="bg-primary text-white text-center p-2">
                {/* Calling the userName state */}
                {name || 'Anonymous'}'s To Do List
            </h4>
        </div>
    )
}

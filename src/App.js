import React, { useState } from 'react';

import ToDoList from './components/ToDoList'

function App() {

  // Using hooks to add a state to a function component and initiating the username state
  // mulitple states can be made using this method
  let [userName, setName] = useState('');
  let [nameChecked, setChecked] = useState(false);

  const changeName = (e) => {
    setName(e.target.value.trim())
  }

  const nameCheck = () => {
    setChecked(true)
  }

  return (
    <div>

      {
        nameChecked === false ?
          <div className="container-fluid d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
            <h1>Hello there, what is your name?</h1>
            <input type="text"
              className="form-control text-center w-50"
              placeholder='Enter your name here'
              onChange={changeName}
            />
            {
              userName !== "" && <button className='btn btn-primary m-2' onClick={nameCheck}>Use this name</button>
            }
          </div>
          :
          <>
            <ToDoList name={userName} />
          </>
      }

    </div>
  )
}

export default App;

import React, { useState } from 'react';

import ToDoList from './components/ToDoList'

function App() {

  // Using hooks to add a state to a function component and initiating the username state
  // mulitple states can be made using this method
  let [userName, setName] = useState('');
  let [nameChecked, setChecked] = useState(false)

  const changeName = (e) => {
    setName(e.target.value)
  }

  const nameCheck = () => {
    setChecked(true)
  }

  return (
    <div>

      {
        !nameChecked ?
          <>
            <h4>Hello there, what is your name?</h4>
            <input type="text"
              placeholder='your name here'
              onChange={changeName}
            />
            {
              userName !== "" && <button className='btn btn-primary m-2' onClick={nameCheck}>Ok</button>
            }
          </>
          :
          <>
            <ToDoList name={userName} />
          </>
      }

    </div>
  )
}

export default App;

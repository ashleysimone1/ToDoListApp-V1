import { useState } from 'react'


function ToDoForm() {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    

  }

    return (
      <div id = "user-todo-form" onSubmit={handleSubmit}>
        <form>
          <input type="text" 
          name="user-todo-input" 
          id="user-todo-input" 
          placeholder="What's next?"
          value = { input }/>
          <button type="submit" id='todo-submit-button'>Add Task</button>
        </form>
      </div>
    )
}

export default ToDoForm

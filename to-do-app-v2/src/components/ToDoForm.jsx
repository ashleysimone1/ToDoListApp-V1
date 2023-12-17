import { useState } from 'react'


function ToDoForm() {
    return (
      <div id = "user-todo-form">
        <form>
          <input type="text" name="user-todo-input" id="user-todo-input" placeholder="What's next?"/>
          <button type="submit">Add Task</button>
        </form>
      </div>
    )
}

export default ToDoForm

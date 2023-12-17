import { useState } from 'react'
import ToDoForm from './components/ToDoForm'
import './App.css'

function App() {

  return (
   <main>
    <div> 
      <h1>To Do List</h1>
      <ToDoForm />
    </div>
   </main>
  )
}

export default App

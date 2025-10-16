
import React,{useState} from 'react'
import "./App.css"

function todo() {
  const[toDos,setTodos]=useState([])
  const[todoText,settodoText]=useState("")
  const handle=(event)=>{
   settodoText(event.target.value)
  }
  const list=()=>{
    if(todoText.trim(toDos !=="")){
    setTodos([...toDos,todoText])
    settodoText('')
  }}
  const deleteItem=(index)=>{
    const copy=([...toDos])
    copy.splice(index,1)
    setTodos(copy)
  }
  return (
    <div>
      <h1>TODO APP</h1>
      <input onChange={handle} value={todoText} type="text" placeholder='ENTER A TASK' className='input'/>
      <button onClick={list}>ADD</button>
      <ul>
        {toDos.map((todo,index)=>(
          <li key={index}>
            <span>{toDos}</span>
            <button onClick={deleteItem}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default todo
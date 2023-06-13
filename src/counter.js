import React , {useState} from 'react'
import "./app.css"
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';

function Counter() {
  const [count,setCount] =useState(0)
  return (
    <div className='App'>
      <header>
      <h1>Counter App</h1>
      </header>
      <h2>Current Count - {count}</h2>
      <div className='buttons'>
        <Button type='submit' color='primary' onClick={()=>(count>=10)?"":setCount(count+1)}>Increment</Button>
        <Button color='primary' onClick={()=>(count<=0)?"":setCount(count-1)}>Decrement</Button>
        <Button color='success' type='reset' onClick={()=>setCount(0)}>reset</Button>
        </div>

    </div>
  )
}

export default Counter
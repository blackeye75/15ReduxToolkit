
import './App.css'
import AddTodo from './component/AddTodo'
import Todos from './component/Todos'

function App() {

  return (
    <>
      <h1 className='text-2xl text-center' >Your Todo's</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App

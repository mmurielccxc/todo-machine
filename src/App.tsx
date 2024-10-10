import './App.css'
import { 
  TodoCounter, 
  TodoSearch,
  TodoList,
  TodoItem,
  CreateButton
} from './components';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a react.js', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALALA', completed: false },
]

function App() {

  return (
    <>
      <TodoCounter completed={16} total={25}/>
       <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem key={todo.text} {...todo} />
        ))}
      </TodoList> 

      <CreateButton />
    </>
  )
}


export default App;
import { useState } from 'react';
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
  { text: 'Usar estados derivados', completed: true },
]

function App() {
  const [todos, setTodos] = useState(defaultTodos)
  const [searchValue, setSearchValue] = useState<string>('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    return todoText.includes(searchValue.toLowerCase());
  })

  const onCompleteTodo = (text: string) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  }

  const onDeleteTodo = (text: string) => {
    const newTodos = todos.filter((todo) => todo.text != text);
    setTodos(newTodos);
  }


  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
       <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem key={todo.text} {...todo} onCompleteTodo={onCompleteTodo} onDeleteTodo={onDeleteTodo}/>
        ))}
      </TodoList> 

      <CreateButton />
    </>
  )
}


export default App;
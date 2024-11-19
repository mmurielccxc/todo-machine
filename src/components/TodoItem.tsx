import './TodoItem.css';

interface ITodoItemProps {
  text: string;
  completed: boolean;
  onCompleteTodo: (text: string) => void;
  onDeleteTodo: (text: string) => void;
}

export const TodoItem: React.FC<ITodoItemProps> = ({ text, completed, onCompleteTodo, onDeleteTodo }) => {
  
  return (
    <li className="TodoItem">
      {/* <span onClick={() => onCompleteTodo(text)} className={`Icon Icon-check ${completed && "Icon-check--active"}`}>V</span> */}
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{ text }</p>
      {/* <span onClick={() => onDeleteTodo(text)} className="Icon Icon-delete">x</span> */}
    </li>
  )
}

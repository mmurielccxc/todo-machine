import './TodoItem.css';

interface ITodoItemProps {
  text: string;
  completed: boolean;
}

export const TodoItem: React.FC<ITodoItemProps> = ({ text, completed }) => {
    return (
        <li className="TodoItem">
          <span className={`Icon Icon-check ${completed && "Icon-check--active"}`}>V</span>
          <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{ text }</p>
          <span className="Icon Icon-delete">x</span>
        </li>
      )
}

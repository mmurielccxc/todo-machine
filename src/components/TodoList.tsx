import './TodoList.css';

interface ITodoListProps {
  children: React.ReactNode
}

export const TodoList: React.FC<ITodoListProps> = ({ children }) => {
  return (
    <ul  className="TodoList">
      {children}
    </ul>
  )
}

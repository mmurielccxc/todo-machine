import './TodoCounter.css';

interface ITodoCounterProps {
  total: number;
  completed: number;
}

export const TodoCounter: React.FC<ITodoCounterProps> = ({
  total, 
  completed
}) => {
  return (
    <h1 className="TodoCounter">
      {total === completed ? "Felicidades, completaste todas las tareas!!" : `Has completado ${completed} de ${total} TODOS`}
    </h1>
  )
}

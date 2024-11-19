import './CreateButton.css';
export const CreateButton = () => {
  return (
    <button onClick={(event) => {
      console.log('le diste click');
      console.log(event)
      console.log(event.target)
    }} className="CreateTodoButton">+</button>
  )
}

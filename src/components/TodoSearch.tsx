import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import './TodoSearch.css';

interface ITodoSearchProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export const TodoSearch: React.FC<ITodoSearchProps> = ({ searchValue, setSearchValue }) => {

  const onInputChange = (e : ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  return (
    <input type="text" className="TodoSearch" placeholder="Cortar cebolla" onChange={onInputChange} value={searchValue} />
  )
}

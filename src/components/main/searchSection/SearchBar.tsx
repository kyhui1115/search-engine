import { useState, type Dispatch, type SetStateAction } from 'react';
import { BiSearch } from 'react-icons/bi';

interface searchBar {
  setSearch: Dispatch<SetStateAction<string>>;
}

function SearchBar({ setSearch }: searchBar) {
  const [text, setText] = useState('');

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(text);
  };
  return (
    <form
      className="flex items-center justify-center h-20 mt-2"
      onSubmit={submitHandler}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        className="h-10 pl-2 border-l border-y w-96 border-slate-400"
      />
      <button
        type="submit"
        className="flex items-center justify-center w-10 h-10 border border-slate-400 bg-slate-300 text-slate-500"
      >
        <BiSearch className="w-6 h-6" />
      </button>
    </form>
  );
}

export default SearchBar;

import { BiSearch } from 'react-icons/bi';

function SearchBar() {
  return (
    <div className="flex items-center h-20">
      <input
        type="text"
        className="h-10 border-l border-y w-96 border-slate-500"
      />
      <button className="flex items-center justify-center w-10 h-10 border border-slate-500 bg-slate-300 text-slate-700">
        <BiSearch className="w-6 h-6" />
      </button>
    </div>
  );
}

export default SearchBar;

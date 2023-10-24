import api from 'api';
import type { SearchResult } from 'components/main/searchSection/SearchSection';
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

interface searchBar {
  setBlogData: Dispatch<SetStateAction<SearchResult>>;
}

function SearchBar({ setBlogData }: searchBar) {
  const [text, setText] = useState('');

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await api.get(
        `/v1/search/blog.json?query=${text}&display=10&start=1&sort=sim`
      );
      setBlogData(result.data);
    } catch (err) {
      console.log(err);
    }
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

import SearchItem from './SearchItem';

function SearchList() {
  return (
    <div className="flex flex-col overflow-y-scroll">
      <SearchItem />
      <SearchItem />
      <SearchItem />
      <SearchItem />
      <SearchItem />
      <SearchItem />
      <SearchItem />
      <div></div>
    </div>
  );
}

export default SearchList;

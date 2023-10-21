import { useState } from 'react';
import SearchBar from 'components/header/SearchBar';
import SearchList from './SearchList';
import SearchInfo from './SearchInfo';
import Pagination from './Pagination';
import ResizingBar from './ResizingBar';

function SearchSection() {
  const [isResizing, setIsResizing] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [width, setWidth] = useState(500);

  return (
    <>
      <div className="flex flex-col items-center" style={{ width }}>
        <SearchBar />
        <SearchInfo />
        <SearchList />
        <Pagination />
      </div>
      <ResizingBar
        isResizing={isResizing}
        setIsResizing={setIsResizing}
        initialX={initialX}
        setInitialX={setInitialX}
        width={width}
        setWidth={setWidth}
      />
    </>
  );
}

export default SearchSection;

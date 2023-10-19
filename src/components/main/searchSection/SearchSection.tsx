import SearchBar from 'components/header/SearchBar';
import SearchList from './SearchList';
import SearchInfo from './SearchInfo';
import { useEffect, useState } from 'react';

function SearchSection() {
  const [isResizing, setIsResizing] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [width, setWidth] = useState(500);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
    setInitialX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isResizing) {
      const newWidth = width + e.clientX - initialX;
      setInitialX(e.clientX);
      if (newWidth >= 430) {
        setWidth(newWidth);
      }
    }
  };

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  return (
    <div className="flex">
      <div className="flex flex-col" style={{ width }}>
        <SearchBar />
        <SearchInfo />
        <SearchList />
      </div>
      <div
        className="w-1.5 bg-blue-300 cursor-col-resize hover:bg-blue-500"
        onMouseDown={handleMouseDown}
      />
      <div className="flex items-center justify-center w-[1000px]">right</div>
    </div>
  );
}

export default SearchSection;

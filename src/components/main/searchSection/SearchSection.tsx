import { useState } from 'react';
import SearchBar from 'components/header/SearchBar';
import SearchList from './SearchList';
import SearchInfo from './SearchInfo';
import Pagination from './Pagination';
import ResizingBar from './ResizingBar';

export interface SearchResult {
  items: item[];
  total: number;
}

export interface item {
  title: string;
  postdate: string;
  bloggerlink: string;
  bloggername: string;
  description: string;
  link: string;
}

export default function SearchSection() {
  const [blogData, setBlogData] = useState<SearchResult>({
    items: [],
    total: 0
  });
  const [isResizing, setIsResizing] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [width, setWidth] = useState(500);

  return (
    <>
      <div className="flex flex-col items-center" style={{ width }}>
        <SearchBar setBlogData={setBlogData} />
        <SearchInfo total={blogData.total} />
        <SearchList blogList={blogData.items} />
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

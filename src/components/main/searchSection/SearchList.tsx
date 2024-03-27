import { type SetStateAction, type Dispatch, type RefObject } from 'react';
import SearchItem from './SearchItem';
import type { item } from './SearchSection';

interface searchList {
  blogList: item[];
  searchListRef: RefObject<HTMLDivElement>;
  selectBlog: string[];
  setSelectBlog: Dispatch<SetStateAction<string[]>>;
}

export default function SearchList({
  blogList,
  searchListRef,
  selectBlog,
  setSelectBlog
}: searchList) {
  return (
    <div
      className={`flex flex-col h-full ${
        blogList.length === 0 ? '' : 'overflow-y-scroll'
      }`}
      ref={searchListRef}
    >
      {blogList.length === 0 ? (
        <span className="flex items-center justify-center h-20 text-lg text-slate-700">
          검색어를 입력해 주세요
        </span>
      ) : (
        blogList.map((blog, idx) => (
          <SearchItem
            key={idx}
            blog={blog}
            selectBlog={selectBlog}
            setSelectBlog={setSelectBlog}
          />
        ))
      )}
    </div>
  );
}

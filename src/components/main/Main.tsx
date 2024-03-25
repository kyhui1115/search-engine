import { useState } from 'react';
import BlogSection from './blogSection/BlogSection';
import SearchSection from './searchSection/SearchSection';

export default function Main() {
  const [selectBlog, setSelectBlog] = useState(['']);
  return (
    <div className="flex h-screen pt-20">
      <SearchSection selectBlog={selectBlog} setSelectBlog={setSelectBlog} />
      <BlogSection selectBlog={selectBlog} />
    </div>
  );
}

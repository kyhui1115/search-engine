import addCoomasToPostDate from 'utils/addCoomasToPostDate';
import type { item } from './SearchSection';
import { type Dispatch, type SetStateAction } from 'react';

interface searchItem {
  blog: item;
  selectBlog: string[];
  setSelectBlog: Dispatch<SetStateAction<string[]>>;
}

export default function SearchItem({
  blog,
  selectBlog,
  setSelectBlog
}: searchItem) {
  const date = addCoomasToPostDate(blog.postdate);

  const blogClickHandler = () => {
    const MAX_OPEN_BLOG = 2;
    const mBlogLInk = `${blog.link.slice(0, 8)}m.${blog.link.slice(8)}`;

    if (selectBlog.includes(mBlogLInk)) {
      return;
    }

    if (selectBlog[0] === '') {
      setSelectBlog([mBlogLInk]);
      return;
    }

    if (selectBlog.length < MAX_OPEN_BLOG) {
      setSelectBlog((prev) => [...prev, mBlogLInk]);
    }
  };

  return (
    <div className="px-2 pt-4 pb-10 border-b border-slate-300">
      <button
        className="font-bold truncate text-slate-700 hover:text-blue-500"
        dangerouslySetInnerHTML={{ __html: blog.title }}
        onClick={blogClickHandler}
      />
      <p
        className="my-4 text-sm line-clamp-3 text-slate-600"
        dangerouslySetInnerHTML={{ __html: blog.description }}
      />
      <div className="flex items-center text-sm">
        <span className="text-slate-700">{blog.bloggername}</span>
        <span className="h-3 mx-2 border border-slate-400" />
        <span className="text-gray-400">{date}</span>
      </div>
    </div>
  );
}

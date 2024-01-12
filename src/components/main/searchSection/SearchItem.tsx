import addCoomasToPostDate from 'utils/addCoomasToPostDate';
import type { item } from './SearchSection';

interface searchItem {
  blog: item;
}

export default function SearchItem({ blog }: searchItem) {
  const date = addCoomasToPostDate(blog.postdate);
  return (
    <div className="px-2 pt-4 pb-10 border-b border-slate-300">
      <p
        className="font-bold truncate text-slate-700"
        dangerouslySetInnerHTML={{ __html: blog.title }}
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

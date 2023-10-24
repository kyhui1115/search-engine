import SearchItem from './SearchItem';
import type { item } from './SearchSection';

interface searchList {
  blogList: item[];
}

export default function SearchList({ blogList }: searchList) {
  return (
    <div className="flex flex-col overflow-y-scroll">
      {blogList.map((blog) => (
        <SearchItem key={blog.bloggername} blog={blog} />
      ))}
    </div>
  );
}

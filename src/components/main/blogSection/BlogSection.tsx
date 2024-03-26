import { type Dispatch, type SetStateAction } from 'react';
import IframeBlog from './IframeBlog';

interface blogSection {
  selectBlog: string[];
  setSelectBlog: Dispatch<SetStateAction<string[]>>;
}

export default function BlogSection({
  selectBlog,
  setSelectBlog
}: blogSection) {
  return selectBlog[0] === '' ? null : (
    <div className="flex w-5/6">
      {selectBlog.map((blog) => (
        <IframeBlog key={blog} blog={blog} setSelectBlog={setSelectBlog} />
      ))}
    </div>
  );
}

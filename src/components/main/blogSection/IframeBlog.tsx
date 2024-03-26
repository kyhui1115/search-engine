import { type Dispatch, type SetStateAction } from 'react';
import { IoClose } from 'react-icons/io5';

interface iframeBlog {
  blog: string;
  setSelectBlog: Dispatch<SetStateAction<string[]>>;
}

export default function IframeBlog({ blog, setSelectBlog }: iframeBlog) {
  const closeBtnHandler = () => {
    setSelectBlog((prev) => prev.filter((b) => b !== blog));
  };
  return (
    <div className="top-0 w-1/2 h-full border-r-8 border-slate-400">
      <div className="flex items-center justify-end h-8 border-b border-slate-400">
        <button className="flex items-center justify-center w-6 h-6 mr-2 border rounded-md border-slate-500">
          <IoClose className="text-slate-600" onClick={closeBtnHandler} />
        </button>
      </div>
      <iframe src={blog} className="w-full h-[95%]" />
    </div>
  );
}

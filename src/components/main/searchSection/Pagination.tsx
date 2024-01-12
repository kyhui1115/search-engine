import { useState, type Dispatch, type SetStateAction } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

interface pagination {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export default function Pagination({
  currentPage,
  setCurrentPage
}: pagination) {
  const [pageList, setPageList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const leftArrowHandler = () => {
    if (currentPage < 11) return;
    setPageList((prev) => prev.map((page) => page - 10));
    setCurrentPage((prev) => prev - 10);
  };
  const rightArrowHandler = () => {
    setPageList((prev) => prev.map((page) => page + 10));
    setCurrentPage((prev) => prev + 10);
  };

  return (
    <div className="flex items-center justify-between w-full h-12 px-8 border-y bg-slate-100 border-slate-400">
      <label>
        <input type="button" className="hidden" onClick={leftArrowHandler} />
        <MdKeyboardArrowLeft className="w-6 h-6 cursor-pointer hover:text-blue-300" />
      </label>
      {pageList.map((page) => (
        <input
          key={page}
          type="button"
          value={page}
          onClick={() => {
            setCurrentPage(page);
          }}
          className={`cursor-pointer 0 ${
            currentPage === page
              ? 'font-bold text-blue-500'
              : 'hover:text-blue-30'
          }`}
        />
      ))}
      <label>
        <input type="button" className="hidden" onClick={rightArrowHandler} />
        <MdKeyboardArrowRight className="w-6 h-6 cursor-pointer hover:text-blue-300" />
      </label>
    </div>
  );
}

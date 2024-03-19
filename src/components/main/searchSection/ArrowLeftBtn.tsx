import { MdKeyboardArrowLeft } from 'react-icons/md';
import { type pagination } from './Pagination';
import { type Dispatch, type SetStateAction } from 'react';

interface arrowLeftBtn extends pagination {
  setPageList: Dispatch<SetStateAction<number[]>>;
}

export default function ArrowLeftBtn({
  currentPage,
  setCurrentPage,
  setPageList
}: arrowLeftBtn) {
  const leftArrowHandler = () => {
    if (currentPage < 11) return;
    setPageList((prev) => prev.map((page) => page - 10));
    setCurrentPage((prev) => prev - 10);
  };

  return (
    <label>
      <input
        type="button"
        className="hidden"
        onClick={leftArrowHandler}
        disabled={currentPage < 11}
      />
      <MdKeyboardArrowLeft
        className={`w-6 h-6  ${
          currentPage < 11
            ? 'text-gray-300'
            : 'cursor-pointer hover:text-blue-300'
        }`}
      />
    </label>
  );
}

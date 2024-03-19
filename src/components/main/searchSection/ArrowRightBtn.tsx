import { type SetStateAction, type Dispatch } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

interface arrowRightBtn {
  setPageList: Dispatch<SetStateAction<number[]>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export default function ArrowRightBtn({
  setPageList,
  setCurrentPage
}: arrowRightBtn) {
  const rightArrowHandler = () => {
    setPageList((prev) => prev.map((page) => page + 10));
    setCurrentPage((prev) => prev + 10);
  };

  return (
    <label>
      <input type="button" className="hidden" onClick={rightArrowHandler} />
      <MdKeyboardArrowRight className="w-6 h-6 cursor-pointer hover:text-blue-300" />
    </label>
  );
}

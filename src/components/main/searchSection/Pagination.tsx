import { useState, type Dispatch, type SetStateAction } from 'react';
import ArrowLeftBtn from './ArrowLeftBtn';
import ArrowRightBtn from './ArrowRightBtn';
import PageNumberBtn from './PageNumberBtn';

export interface pagination {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export default function Pagination({
  currentPage,
  setCurrentPage
}: pagination) {
  const [pageList, setPageList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <div className="flex items-center justify-between w-full h-12 px-8 border-y bg-slate-100 border-slate-400">
      <ArrowLeftBtn
        currentPage={currentPage}
        setPageList={setPageList}
        setCurrentPage={setCurrentPage}
      />
      {pageList.map((page) => (
        <PageNumberBtn
          key={page}
          page={page}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ))}
      <ArrowRightBtn
        setPageList={setPageList}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

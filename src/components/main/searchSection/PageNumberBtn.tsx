import { type Dispatch, type SetStateAction } from 'react';

interface pageNumberBtn {
  page: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export default function PageNumberBtn({
  page,
  currentPage,
  setCurrentPage
}: pageNumberBtn) {
  return (
    <input
      key={page}
      type="button"
      value={page}
      onClick={() => {
        setCurrentPage(page);
      }}
      className={`cursor-pointer 0 ${
        currentPage === page ? 'font-bold text-blue-500' : 'hover:text-blue-30'
      }`}
    />
  );
}

import addCommasToNumber from 'utils/addCommasToNumber';

interface searchInfo {
  total: number;
}

export default function SearchInfo({ total }: searchInfo) {
  const totalNumber = addCommasToNumber(total);

  return (
    <div className="flex items-center w-full h-12 pl-4 mt-2 border-y border-slate-400 bg-slate-100">
      <div>
        <span className="text-slate-600">s</span>
        <span className="text-slate-600">에 대한 검색결과</span>
        <span className="ml-2 text-sm font-bold text-slate-600">
          {totalNumber}건
        </span>
      </div>
    </div>
  );
}

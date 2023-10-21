function SearchInfo() {
  return (
    <div className="flex items-center w-full h-16 pl-4 mt-2 border-y border-slate-400 bg-slate-100">
      <div>
        <span className="text-slate-600">s</span>
        <span className="text-slate-600">에 대한 검색결과</span>
        <span className="ml-2 text-sm font-bold text-slate-600">
          10,000,000건
        </span>
      </div>
      <div className="ml-auto">
        <input
          type="button"
          value="정확도"
          className="text-sm cursor-pointer text-slate-600"
        />
        <input
          type="button"
          value="최신순"
          className="mx-4 text-sm cursor-pointer text-slate-600"
        />
      </div>
    </div>
  );
}

export default SearchInfo;

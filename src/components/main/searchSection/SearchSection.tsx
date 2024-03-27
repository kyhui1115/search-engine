import {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react';
import SearchBar from './SearchBar';
import SearchList from './SearchList';
import SearchInfo from './SearchInfo';
import Pagination from './Pagination';
import api from 'api';

export interface searchResult {
  items: item[];
  total: number;
}

export interface item {
  title: string;
  postdate: string;
  bloggerlink: string;
  bloggername: string;
  description: string;
  link: string;
}

interface searchSection {
  selectBlog: string[];
  setSelectBlog: Dispatch<SetStateAction<string[]>>;
}

export default function SearchSection({
  selectBlog,
  setSelectBlog
}: searchSection) {
  const searchListRef = useRef<HTMLDivElement | null>(null);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [blogData, setBlogData] = useState<searchResult>({
    items: [],
    total: 0
  });

  const fetchBlogList = async () => {
    const startPage = currentPage * 10 - 9;
    if (search.length > 0) {
      try {
        const result = await api.get(
          `/v1/search/blog.json?query=${search}&display=10&start=${startPage}&sort=sim`
        );
        setBlogData(result.data);
        console.log(result);
      } catch (err) {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    void fetchBlogList();
  }, [search, currentPage, setBlogData]);

  useEffect(() => {
    if (searchListRef?.current !== null) {
      searchListRef.current.scrollTop = 0;
    }
  }, [currentPage]);

  return (
    <div className="flex flex-col items-center h-full border-r w-120 border-slate-400">
      <SearchBar setSearch={setSearch} />
      <SearchInfo total={blogData.total} />
      <SearchList
        blogList={blogData.items}
        searchListRef={searchListRef}
        selectBlog={selectBlog}
        setSelectBlog={setSelectBlog}
      />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

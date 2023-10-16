import api from 'api';
import { useEffect, useState } from 'react';

interface SearchResult {
  items: item[];
  total: number;
}

interface item {
  title: string;
  postdate: string;
  bloggerlink: string;
  bloggername: string;
  description: string;
  link: string;
}

const useSearchBlog = () => {
  const [searchResult, setSearchResult] = useState<SearchResult>({
    items: [],
    total: 0
  });

  const searchBlogAPI = async () => {
    try {
      const result = await api.get(
        `/v1/search/blog.json?query=s&display=10&start=1&sort=sim`
      );
      setSearchResult(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    void searchBlogAPI();
  }, []);

  return searchResult;
};

export default useSearchBlog;

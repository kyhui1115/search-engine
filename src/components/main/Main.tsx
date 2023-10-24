import BlogSection from './blogSection/BlogSection';
import SearchSection from './searchSection/SearchSection';

export default function Main() {
  return (
    <div className="flex h-screen pt-20">
      <SearchSection />
      <BlogSection />
    </div>
  );
}

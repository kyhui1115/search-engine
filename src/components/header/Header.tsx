import Logo from './Logo';
import SearchBar from './SearchBar';

function Header() {
  return (
    <div className="relative flex items-center justify-center w-screen h-20 bg-slate-400">
      <Logo />
      <SearchBar />
    </div>
  );
}

export default Header;

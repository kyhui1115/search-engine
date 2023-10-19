import Logo from './Logo';

function Header() {
  return (
    <div className="absolute top-0 flex items-center justify-center w-screen h-20 bg-slate-400">
      <Logo />
    </div>
  );
}

export default Header;

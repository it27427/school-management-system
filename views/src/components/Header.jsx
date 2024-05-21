import Navbar from './Navbar';

const Header = () => {
  return (
    <header className='sticky top-0 z-50 bg-sky-900 h-20 flex items-center'>
      <div className='container'>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;

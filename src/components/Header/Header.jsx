import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Kalender</h1>
      <div className="header__links">
        <a href="/home" className="header__link">Home</a>
        <a href="/login" className="header__link">Admin</a>
      </div>
    </header>
  );
};

export default Header;

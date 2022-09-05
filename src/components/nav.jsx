import "../stylesheet/nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <span>KeinnerRoss</span>
        </div>
        <ul className="ul-nav">
          <li>Works</li>
          <li>About</li>
          <li>Skills</li>
        </ul>
        <div className="button-cv-container">
          <div className="button-cv">
            <span>Download CV</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

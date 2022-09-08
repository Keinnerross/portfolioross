import "../stylesheet/nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        
        <div className="logo">
        <div className="isotype"></div>
          <span>KeinnerRoss</span>
        </div>
        <ul className="ul-nav">
          <li>About</li>
          <li>Skills</li>
          <li>Works</li>
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

import "../stylesheet/frontMain.css";

const FrontMain = () => {
  return (
    <div className="front-container">
      <div className="scroll right">
        <h4><a href="#about">scroll down</a></h4>
        <p>↓</p>
      </div>
      <div className="scroll left">
        <h4><a href="#about">scroll down</a></h4>
        <p>↓</p>
      </div>

      <div className="front">
        <div className="front-info">
          <h4>Hi,</h4>
          <h4>I'm Keinner Ross <span>👋</span></h4>
          <p className="description">
            {" "}
            <span className="purple-1">Frontend Developer</span> ( Artist /
            Developer / Designer )
          </p>
          <div className="front-buttons">
            <div
              className="button-front git"
              onClick={() => {
                alert("Corriendo Prroxd");
              }}
            ></div>
            <div className="button-front linkedin"></div>
            <div className="button-front instagram"></div>
          </div>
        </div>
        <div className="picture-container">
          <div className="picture"></div>
        </div>
      </div>
    </div>
  );
};

export default FrontMain;

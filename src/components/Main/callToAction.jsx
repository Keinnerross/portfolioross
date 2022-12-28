import "../../stylesheet/main/callToAction.css";
import { FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";
const CallToAction = () => {
  return (
    <div className="call-action-container">
      <span>
        Si tienes alguna pregunta o estás interesado en contratar mis servicios,
        no dudes en ponerte en contacto conmigo. 
      </span>
      <Link to="/contacto">
        <div className="button-call-action">
          <span>Contáctame</span>

          <span>
            <FaRocket />
          </span>
        </div>
      </Link>
    </div>
  );
};

export default CallToAction;

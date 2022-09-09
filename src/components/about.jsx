import "../stylesheet/about.css";
import Techsopher from "./svg/techsopher";

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-content-container">
        <div className="techsopher-container">
            <Techsopher></Techsopher>
        </div>
        <div className="about-info">
          <h4>About</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            velit nulla corporis ab illo at dicta, consectetur eaque obcaecati
            quod libero doloremque quae quidem saepe. Optio sequi libero
            eligendi a? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt excepturi id magni laboriosam quam ea tempore, sint illo facere perferendis doloremque. Quis libero laudantium provident dolorum beatae similique voluptatem quia? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas facere officiis incidunt odio nulla ullam? Accusantium in, magnam nisi praesentium ipsa totam quisquam, non, ullam nesciunt cumque iste inventore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

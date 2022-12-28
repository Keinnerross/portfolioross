import "../stylesheet/contact.css";
import Footer from "./Main/footer";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content-container">
        <div className="contact-form">
          <h2>¡Espero tu mensaje! 😎</h2>
          <form>
            <label htmlFor="name">Nombre</label>
            <input type="text" name="" id="name" />
            <label htmlFor="email">E-Mail</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="message">Mensaje</label>
            <textarea name="message" rows="4" cols="50" id="message" />
            <button className="send-button">Envíar Mensaje</button>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;

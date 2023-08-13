import "../stylesheet/contact.css";
import Footer from "./Main/footer";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsCheck } from "react-icons/bs";

const Contact = ({ refContact }) => {
  const form = useRef();
  const [toggleSend, setToggleSend] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ugztaon",
        "template_rmmpoci",
        form.current,
        "wFnHH8BHEebwedJ6Q"
      )
      .then(
        (result) => {
          setTimeout(() => {
            setToggleSend(true);
          }, 1000);
          setTimeout(() => {
            setToggleSend(false);
          }, 5500);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className={toggleSend ? "succefullMsj" : "succefullMsj hidden"}>
        <div className="succefullMsj-card">
          <BsCheck color="green" size="80px" />
        </div>
      </div>
      <div className="contact-container" ref={refContact}>
        <div className="contact-content-container">
          <div className="contact-form">
            <h2>¡Espero tu mensaje! 😎</h2>
            <form ref={form} onSubmit={sendEmail}>
              <label>Nombre</label>
              <input type="text" name="user_name" id="user_name" />
              <label>E-Mail</label>
              <input name="user_email" id="user_email" />
              <label>Mensaje</label>
              <textarea name="message" rows="4" cols="50" id="message" />
              <button className="send-button" type="submit" value="Send">
                Envíar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

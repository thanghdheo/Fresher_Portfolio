import {
  AiOutlineMail,
  AiOutlineMessage,
  AiOutlinePhone,
} from "react-icons/ai";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import swal from "sweetalert";
import "./contact.css";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hywlc7y",
        "template_lh4yvuc",
        form.current,
        "J1L58cuTLsEl5bvJE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    swal("Thông báo", "Gửi email thành công","success");
    e.target.reset();
  };
  return (
    <section style={{marginTop: '1500px'}} id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>hoducthangtn2nhvt@gmail.com</h5>
            <a href="mailto:hoducthangtn2nhvt@gmail.com">Send an email</a>
          </article>
          <article className="contact__option">
            <AiOutlineMessage className="contact__option-icon" />
            <h4>Message</h4>
            <h5>Đức Thắng</h5>
            <a href="https://m.me/profile.php?id=100016924470551">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlinePhone className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>+8436 592 0074</h5>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

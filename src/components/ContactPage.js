import React from "react";
import "./contact.css";
import mailDark from "./assets/images/contactMailDark.svg";

function ContactPage() {
  return (
    <section className="contact-main-wrapper" id="Contact">
      <div className="contact-cont">
        <div className="contact-details">
          <div className="contact-title">
            <h1>Holla Me!</h1>
          </div>
          <div className="contact-inputs">
            <form>
              <div className="input-div">
                <i className="fa fa-envelope"></i>
                <input type="text" placeholder="Enter your Email or Name" />
              </div>
              <div className="input-div">
                <i className="fa fa-phone"></i>
                <input type="tel" placeholder="Enter Phone Number" />
              </div>
              <textarea placeholder="Enter Message"></textarea>
              <button type="submit">Submit</button>
            </form>
            <div className="contact-info"> 
                <a href="mailto:clivemaina41@gmail.com">                <i className="far fa-envelope"></i> clivemaina41@gmail.com</a>
            </div>
            <div className="contact-info">
                <i className="fa fa-phone-alt"style={{
                    color: "black"
                }}></i> 
                +254 771 575 804
            </div>
          </div>
        </div>
        <div className="contact-pic">
          <div className="image-holder">
            <img src={mailDark} alt="Loading..." />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;

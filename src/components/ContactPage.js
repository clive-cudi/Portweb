import React from "react";
import "./contact.css";
import mailDark from "./assets/images/contactMailDark.svg";
import { ThemeContext } from "./contexts/ThemeContext";
import { useContext } from "react";
import { db } from "./firebase";
import { doc } from "@firebase/firestore";
import { setDoc } from "@firebase/firestore";
import { useState } from "react";

function ContactPage({contactInfo}) {
  const [darkTheme] = useContext(ThemeContext);
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [sent, setStatus] = useState(false)

  function handleSubmit(){
    setDoc(doc(db, "messages", email),{
      email: email,
      phone: phone,
      message: message
    }).then(()=>{
      console.log("sent");
      setStatus(true);
    }).catch((e)=>{
      console.log(e);
      setStatus(false);
    })
  }

  return (
    <section className="contact-main-wrapper" id="Contact">
      <div className="contact-cont">
        <div className="contact-details">
          <div className="contact-title">
            <h1 style={{
              color: darkTheme ? "white" : "black"
            }}>Holla Me!</h1>
          </div>
          <div className="contact-inputs">
            <form onSubmit={(e)=>{
              e.preventDefault();
              handleSubmit();
            }}>
              <div className="input-div">
                <i className="fa fa-envelope"></i>
                <input type="text" placeholder="Enter your Email or Name" style={{
                  color: darkTheme ? "white" : "black"
                }} onChange={(e)=>{setEmail(e.target.value)}} />
              </div>
              <div className="input-div">
                <i className="fa fa-phone"></i>
                <input type="tel" placeholder="Enter Phone Number" style={{
                  color: darkTheme ? "white" : "black"
                }} onChange={(e)=>{
                  setPhone(e.target.value)
                }} />
              </div>
              <textarea placeholder="Enter Message" style={{
                color: darkTheme ? "white" : "black"
              }} onChange={(e)=>{
                setMessage(e.target.value)
              }}></textarea>
              <button type="submit" onClick={(e)=>{
                e.preventDefault();
                handleSubmit();
              }} style={{
                background: sent ? "chartreuse" : ""
              }} >{sent ? "Sent" : "Submit"}</button>
            </form>
            <div className="contact-info"> 
                <a href={`mailto:${contactInfo.email}`}>                <i className="far fa-envelope"></i> {contactInfo.email}</a>
            </div>
            <div className="contact-info" style={{
              color: darkTheme ? "white" : "black"
            }}>
                <i className="fa fa-phone-alt"style={{
                    color: darkTheme ? "white" : "black"
                }}></i> 
                {contactInfo.phoneNumber}
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
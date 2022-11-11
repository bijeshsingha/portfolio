import React from "react";
import sendIcon from "../assets/Send.svg";
import emailjs from "@emailjs/browser";
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
import insta from "../assets/insta.png"
import ToTop from "../components/ToTop";

function Contact(props) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const form = React.createRef();
  const [success, setSuccess] = React.useState(false);
  const [failure,setFailure]=React.useState(false);
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function resetForm() {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log("submitted");
    console.log(props.state)
    emailjs
      .sendForm(
        "service_lmi5wd4",
        "template_h0cd50b",
        form.current,
        "J-nJnPiDE3gPrDh8G"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text)
          setSuccess(true)
          setFailure(false)
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Your file is being uploaded!")
          setFailure(true)
        }
      );
    
  }
  return (
    <>
    <div className="contact">
      <div className="form-section">
        {failure && <p className="normal-text"><span style={{color:'red'}}>!</span> Failed to send the form</p>}
        {!(success || failure) && (
          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            <label className="contact-label">
              <span className="title black">Name</span>
              <span className="brace">*</span>
              <input
                className="input"
                type="text"
                placeholder="name"
                onChange={handleChange}
                name="name"
                value={formData.firstName}
                required
              />
            </label>
            <label className="contact-label">
              <span className="title black">Email</span>
              <span className="brace">*</span>
              <input
                className="input email"
                type="email"
                placeholder="example@email.com"
                onChange={handleChange}
                name="email"
                value={formData.email}
                required
              />
            </label>
            <label className="contact-label">
              <span className="title black">Message</span>
              <span className="brace">*</span>
              <textarea
                className="input message"
                value={formData.message}
                placeholder="message"
                onChange={handleChange}
                name="message"
                required
              />
            </label>
            <button onSubmit={handleSubmit} type="submit" className="hire-me">
              <span className="title">Send</span>
              <img
                className="buttonIcon"
                src={sendIcon}
                alt="send icon"
                width="40px"
              />
            </button>
          </form>
        )}
        {success && (
          <div className="contact-form new-form">
            <p className="title black">SENT!</p>
            <button
              className="hire-me"
              onClick={() => {
                resetForm();
                setSuccess(false);
              }}
            >
              <span className="title">New Form</span>
              <img
                className="buttonIcon"
                src={sendIcon}
                alt="send icon"
                width="40px"
              />
            </button>
          </div>
        )}
      </div>
      <div className="otherContact-section">
           <span className="title black center">Meet me at other places<span className="brace">!</span></span>
           <div className="box center">
                <a href="https://github.com/bijeshsingha" target="_blank" rel="noreferrer"><img className="icon" src={github} alt="github" width="40px"/></a>
                <a href="https://www.linkedin.com/in/bijesh-singha-89a634159/" target="_blank" rel="noreferrer"><img className="icon" src={linkedin} alt="github" width="40px"/></a>
                <a href="https://www.instagram.com/bijeshsingha8/" target="_blank" rel="noreferrer"><img className="icon" src={insta} alt="github" width="40px"/></a>
            </div>
            
            <div className="box">
                <span className="title">Call <br/> <span className="brace"> +917002449198</span></span>
            </div>  
            <div className="box">
                <span className="title">Write <br/> <a className="brace" href="mailto:singhabijesh7@gamil.com">singhabijesh7@gamil.com</a></span>
            </div> 
      </div>
    </div>
    {props.width < 700 && <ToTop/>}
    </>
  );
}

export default Contact;

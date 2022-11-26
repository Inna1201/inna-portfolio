import React, { useState } from "react";


export default function Contact() {

 
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  function ValidEmail(email) {
    return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
  }

  const handleEmail = (event) => {
    if (!ValidEmail(event.target.value)) {
      setError("Email is invalid!");
    } else {
      setError(null);
    }

    setMessage(event.target.value);
  };

  return (
    <div>
      <h2>Contact me</h2>
      <div id="contactForm">
        <div class="row mt-4">
          <div class="col-md-6">
            <h4>Name:</h4>
            <div class="form-group">
              <label for="contact-title"></label>
              <input
                class="form-input"
                type="text"
                className="contact-title"
                name="contact-title"
              />
            </div>
            <h4>Email address:</h4>
            <div class="form-group">
              <label for="contact-title"></label>
              <input id="errorMsg" value={message} onChange={handleEmail} />
              {error && <h5 style={{ color: "#f126f8" }}>{error}</h5>}
            </div>
            <div class="form-group">
              <label id="message" for="message-content">
                <h4> Message:</h4>
              </label>
              <textarea
                rows="10"
                cols="90"
                class="form-input"
                id="message-content"
                name="message-content"
              ></textarea>
            </div>
            <div class="form-group">
              <button type="submit" id="btnSubmit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// const [imputIsValid, setImputIsValid] = useState(false);
  // const [imputTouched, setImputTouched] = useState(false);
// const onBlurHandler = (event) => {
  //   setImputTouched(true)
  //   if (event.target.value.trim().lenght === 0) {
  //     setImputIsValid(false)
  //   } else {
  //     setImputIsValid(true);
  //   }
  // }
  
  // if(!setMessage) {
    //   setError("Email is required!");
    // }

  // const blurHandler = (event) => {

  //   if (touched(event.target.value)) {
  //   setTouched(true);
  // } else {
  //   setError("Email is invalid!");
  // }
  // }
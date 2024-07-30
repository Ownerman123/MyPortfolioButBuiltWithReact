import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const email = document.getElementById("email");
    const name = document.getElementById("name");
    const message = document.getElementById("message");
    const err = document.getElementById('errmessage');

    if(!email.value){
        err.textContent = 'please enter an email'
        return;
    }else if(!name.value){
        err.textContent = 'name can not be empty'
        return;
    }else if(!message.value){
        err.textContent = 'message can not be empty'
        return;
    }
    


    emailjs
      .sendForm('service_m66z2jd', 'contact_form', form.current, {
        publicKey: '9Nqr-zk3f3CjukS33',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      name.value = '';
      email.value = '';
      message.value = '';
      alert('message sent!');

  };

  return (
    <>
    <form ref={form} onSubmit={sendEmail}>
<div className="contactinputs">
      <label>Name</label>
      <input type="text" name="user_name" id="name" className="boxedtext" />
      </div>
      <div className="contactinputs">
      <label>Email</label>
      <input type="email" name="user_email" id="email" className="boxedtext"/>
      </div>
      <div className="contactinputs">
      <label>Message</label>
      <textarea name="message" id="message" className="boxedtext"/>
      </div>
      <input type="submit" value="Send" className="boxedtext"/>
    </form>
    <p id='errmessage'></p>
    </>
  );
};

export default ContactUs;
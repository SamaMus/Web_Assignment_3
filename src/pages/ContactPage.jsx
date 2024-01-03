import React from 'react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm.jsx';
import '../assets/style/ContactPage.css';


const ContactPage = () => {
  return (
    <div className="contact-page">
      <Navbar/>
      <div className="container">
        <section className="contact">
          <h1>Contact Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum sit non voluptatem.
          </p>
        <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default ContactPage;

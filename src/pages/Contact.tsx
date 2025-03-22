import React from "react";
import ContactForm from "../component/ContactForm";

function Contact() {
  // Handle the form submission data
  function handleFormSubmit(formData) {
    console.log("Form submitted:", formData);
    // You can add more logic here, such as sending the data to a backend API
  }

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <ContactForm onFormSubmit={handleFormSubmit} />
    </div>
  );
}

export default Contact;

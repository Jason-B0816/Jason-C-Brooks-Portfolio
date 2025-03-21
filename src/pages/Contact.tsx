import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',   // Add email to form data
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' }); // Reset form data
  }

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      {submitted ? (
        <p className="success-message">
          Thank you for reaching out; I'll get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          {/* Name Field */}
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* Email Field */}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Message Field */}
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          {/* Submit Button */}
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
}

export default Contact;  // Export the Contact component
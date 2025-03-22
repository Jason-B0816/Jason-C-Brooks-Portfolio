import React, { useState } from "react";
import PropTypes from "prop-types";

function ContactForm({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle form field changes
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    onFormSubmit(formData); // Pass form data to parent component
    setSubmitted(true);

    // Clear form after submission
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <div className="contact-form-container">
      {submitted ? (
        <p className="success-message">
          Thank you for reaching out! I'll get back to you soon.
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
            placeholder="Enter your name"
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
            placeholder="Enter your email"
            required
          />

          {/* Message Field */}
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here"
            required
          ></textarea>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
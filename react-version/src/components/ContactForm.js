import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you for your message! We'll implement email functionality in Phase 2."
    );
  };

  return (
    <div className="contact-terminal-wrapper">
      <div className="contact-terminal-header">
        <div className="terminal-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="terminal-title">Secure Communication Channel</div>
      </div>
      <div className="contact-terminal-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="form-label terminal-label">
              &gt; IDENTIFY_NAME:
            </label>
            <input
              type="text"
              className="form-control terminal-input"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name..."
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="form-label terminal-label">
              &gt; CONTACT_EMAIL:
            </label>
            <input
              type="email"
              className="form-control terminal-input"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="form-label terminal-label">
              &gt; INPUT_MESSAGE:
            </label>
            <textarea
              className="form-control terminal-input"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="What do you have to say?"
              required
            />
          </div>

          <div className="d-grid mt-5">
            <button type="submit" className="btn btn-terminal">
              SEND_PACKET
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

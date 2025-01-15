import React from "react";
import { useState } from "react";
import { SocialLinks } from "../exports";

const Contact = () => {
  // function to handle form submission

  // Create state variables for each form field
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // need to send the data to your server
  };

  return (
    <>
      {/* The empty brackets <> </> are called Fragments - they let us return multiple elements */}
      <SocialLinks />
      {/* Contact Form Section */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="card shadow-lg"
              style={{ background: "rgba(255, 255, 255, 0.9)" }}>
              <div className="card-body p-5">
                <h2 className="text-center mb-4">Get in Touch</h2>
                <p className="text-center mb-5">
                  Need to contact me? Send me a message!
                </p>

                <form onSubmit={handleSubmit} className="needs-validation">
                  {/* Name Field */}
                  <div className="mb-4">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      required
                    />
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-purple btn-lg">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

import React, {useState} from "react";

const Contact = () => { // Create state variables for each form field
    const [formData, setFormData] = useState({name: "", email: "", message: ""});

    // Handle input changes
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement backend submission (Phase 2)
        alert("Thank you for your message! We'll implement email functionality in Phase 2.");
    };

    return (
        <> {/* Contact Form Section */}
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card shadow-lg"
                            style={
                                {background: "rgba(255, 255, 255, 0.9)"}
                        }>
                            <div className="card-body p-5">
                                <h2 className="text-center mb-4">Get in Touch</h2>
                                <p className="text-center mb-5">
                                    Need to contact me? Send me a message!
                                </p>

                                <form onSubmit={handleSubmit}
                                    className="needs-validation">
                                    {/* Name Field */}
                                    <div className="mb-4">
                                        <label htmlFor="name" className="form-label">
                                            Name
                                        </label>
                                        <input type="text" className="form-control" id="name" name="name"
                                            value={
                                                formData.name
                                            }
                                            onChange={handleChange}
                                            required/>
                                    </div>

                                    {/* Email Field */}
                                    <div className="mb-4">
                                        <label htmlFor="email" className="form-label">
                                            Email
                                        </label>
                                        <input type="email" className="form-control" id="email" name="email"
                                            value={
                                                formData.email
                                            }
                                            onChange={handleChange}
                                            required/>
                                    </div>

                                    {/* Message Field */}
                                    <div className="mb-4">
                                        <label htmlFor="message" className="form-label">
                                            Message
                                        </label>
                                        <textarea className="form-control" id="message" name="message"
                                            value={
                                                formData.message
                                            }
                                            onChange={handleChange}
                                            rows="5"
                                            required/>
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

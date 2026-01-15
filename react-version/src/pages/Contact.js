import React from "react";
import { ContactForm } from "../exports";

const Contact = () => {
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h2 className="text-center mb-4">Get in Touch</h2>
                    <p className="text-center mb-5">
                        Need to contact me? Send me a message through the secure channel below.
                    </p>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Contact;

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./ContactSection.css";

import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    FaUser,
} from "react-icons/fa";

import { MdBusinessCenter } from "react-icons/md";

const ContactSection = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const nameRegex = /^[A-Za-z.\s]+$/;

    const emailRegex =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

    const phoneRegex = /^[6-9]\d{9}$/;

    const handleChange = (e) => {

        let { name, value } = e.target;

        if (name === "name") {
            value = value.replace(/[^A-Za-z.\s]/g, "");
        }

        if (name === "phone") {
            value = value.replace(/\D/g, "").slice(0, 10);
        }

        setFormData({
            ...formData,
            [name]: value,
        });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, phone, service, message } = formData;

        // Name Validation
        if (!nameRegex.test(name.trim())) {
            return toast.error(
                "Name can contain only alphabets, spaces and dots."
            );
        }

        // Email Validation
        if (!emailRegex.test(email.trim())) {
            return toast.error("Please enter a valid email address.");
        }

        // Phone Validation
        if (!phoneRegex.test(phone.trim())) {
            return toast.error(
                "Please enter a valid 10-digit Indian mobile number."
            );
        }

        // Service Validation
        if (!service) {
            return toast.error("Please select a service.");
        }

        // Message Validation
        if (message.trim().length < 10) {
            return toast.error(
                "Message should contain at least 10 characters."
            );
        }

        try {
            setLoading(true);

            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/contact`,
                formData
            );

            toast.success(response.data.message);

            setFormData({
                name: "",
                email: "",
                phone: "",
                service: "",
                message: "",
            });

        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };
    return (
        <section className="contact section" id="contact">

            <div className="container">

                <div className="section-title">

                    <span>Get In Touch</span>

                    <h2>
                        Let's Talk About Your Accounting & Tax Requirements
                    </h2>

                    <p>
                        Our experts are ready to help you with Income Tax,
                        GST, Accounting, Audit, Company Registration and
                        Business Compliance.
                    </p>

                </div>

                <div className="contact-wrapper">

                    {/* Contact Form */}

                    <div className="contact-form">

                        <div className="form-header">

                            <h3>Send Us An Inquiry</h3>

                            <p>
                                Fill out the form below and we'll get back
                                to you within 24 hours.
                            </p>

                        </div>

                        <form onSubmit={handleSubmit}>

                            <div className="input-group">

                                <FaUser className="input-icon" />

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    maxLength={50}
                                    required
                                />

                            </div>

                            <div className="input-group">

                                <FaEnvelope className="input-icon" />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    maxLength={100}
                                    required
                                />

                            </div>

                            <div className="input-group">

                                <FaPhoneAlt className="input-icon" />

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    maxLength={10}
                                    required
                                />

                            </div>

                            <div className="input-group">

                                <MdBusinessCenter className="input-icon" />

                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                >

                                    <option value="">
                                        Select Service
                                    </option>

                                    <option>Income Tax Return</option>

                                    <option>GST Registration</option>

                                    <option>GST Return Filing</option>

                                    <option>Accounting</option>

                                    <option>Audit</option>

                                    <option>Business Registration</option>

                                    <option>Financial Consultancy</option>

                                </select>

                            </div>

                            <textarea
                                rows="6"
                                name="message"
                                placeholder="Tell us about your requirement..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>

                            <button
                                className="primary-btn contact-btn"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Send Inquiry"}
                            </button>

                        </form>

                    </div>

                    {/* Contact Information */}

                    <div className="contact-info">

                        <h3>Contact Information</h3>

                        <p className="contact-text">

                            Have questions?

                            <br />

                            Feel free to contact us through
                            any of the following methods.

                        </p>

                        <div className="info-card">

                            <div className="info-icon">
                                <FaPhoneAlt />
                            </div>

                            <div>
                                <h4>Phone</h4>
                                <p>+91 98765 43210</p>
                            </div>

                        </div>

                        <div className="info-card">

                            <div className="info-icon">
                                <FaEnvelope />
                            </div>

                            <div>
                                <h4>Email</h4>
                                <p>info@anandassociates.com</p>
                            </div>

                        </div>

                        <div className="info-card">

                            <div className="info-icon">
                                <FaMapMarkerAlt />
                            </div>

                            <div>

                                <h4>Office</h4>

                                <p>
                                    Anand & Associates
                                    <br />
                                    Kaithal, Haryana
                                </p>

                            </div>

                        </div>

                        <div className="info-card">

                            <div className="info-icon">
                                <FaClock />
                            </div>

                            <div>

                                <h4>Working Hours</h4>

                                <p>Monday - Saturday</p>

                                <p>9:00 AM - 6:00 PM</p>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="map-section">

                    <iframe
                        title="Office Location"
                        src="https://www.google.com/maps?q=Kaithal,Haryana&output=embed"
                        loading="lazy"
                        allowFullScreen=""
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                </div>

            </div>

        </section>
    );
};

export default ContactSection;
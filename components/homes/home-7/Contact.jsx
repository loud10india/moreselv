"use client";
import React, { useState } from "react";
import { contactItems } from "@/data/contact";

export default function Contact() {
    // Your email address
    const yourEmail = "poojaverma140400@gmail.com";
    // State for form fields
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
    });
    // State for form submission result
    const [result, setResult] = useState("");

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Include additional data like firstName, lastName, etc.
        const dataToSend = {
            name: formData.name,
            email: formData.email,
            phone: formData.mobile,
            message: formData.message,
        };

        // Send form data to the server
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSend),
            });

            if (response.ok) {
                setResult("Message sent successfully!");
                // Reset form fields
                setFormData({
                    name: "",
                    email: "",
                    mobile: "",
                    message: "",
                });
            } else {
                const errorData = await response.json(); // Assuming the server returns a JSON error message
                setResult(`Failed to send the message: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setResult("An error occurred. Please try again.");
        }
    };

    return (
        <div className='container position-relative'>
            <div className='row wow fadeInUp'>
                <div className='col-lg-4 mb-md-50 mb-sm-30 position-relative z-index-1'>
                    {contactItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <hr className='mt-0 mb-40 mb-sm-20' />
                            <div className={`contact-item mb-40 mb-sm-20`}>
                                <div
                                    className='ci-icon'
                                    style={{
                                        backgroundColor: "#ffeed9 !important",
                                        color: "#FECD8C",
                                        display: "inline - flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "50%",
                                        height: "20px",
                                        width: "20px",
                                    }}
                                >
                                    <i
                                        className={item.iconClass}
                                        style={{ backgroundColor: "#ffeed9", padding: "12px", borderRadius: "50%", marginTop: "25px" }}
                                    />
                                </div>
                                <h4 className='ci-title'>{item.title}</h4>
                                <div className='ci-text'>{item.text}</div>
                                <div className='ci-link'>
                                    <a href={item.link.url} target={item.link.target} rel={item.link.rel}>
                                        {item.link.text}
                                    </a>
                                </div>
                            </div>{" "}
                        </React.Fragment>
                    ))}
                    <hr className='mt-0 mb-0' />
                </div>

                <div className='col-lg-8 col-xl-7 offset-xl-1 d-flex align-items-strech'>
                    <div className=' round overflow-hidden w-100 px-4 py-5 p-sm-5' style={{ backgroundColor: "#ffeed9" }}>
                        <form onSubmit={handleSubmit} className='form contact-form' id='contact_form'>
                            <div className='row'>
                                <div>
                                    <div className='form-group'>
                                        <label htmlFor='name'>Name</label>
                                        <div className=' round' style={{ backgroundColor: "#EBBA78" }}>
                                            <input
                                                type='text'
                                                name='name'
                                                id='name'
                                                className='input-md input-grad round form-control'
                                                placeholder='Enter your name'
                                                value={formData.name}
                                                onChange={handleChange}
                                                pattern='.{3,100}'
                                                required
                                                aria-required='true'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label htmlFor='email'>Email</label>
                                        <div className=' round' style={{ backgroundColor: "#EBBA78" }}>
                                            <input
                                                type='email'
                                                name='email'
                                                id='email'
                                                className='input-md input-grad round form-control'
                                                placeholder='Enter your email'
                                                value={formData.email}
                                                onChange={handleChange}
                                                pattern='.{5,100}'
                                                required
                                                aria-required='true'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label htmlFor='mobile'>Phone</label>
                                        <div className=' round' style={{ backgroundColor: "#EBBA78" }}>
                                            <input
                                                type='tel'
                                                name='mobile'
                                                id='mobile'
                                                className='input-md input-grad round form-control'
                                                placeholder='Enter your mobile number'
                                                value={formData.mobile}
                                                onChange={handleChange}
                                                pattern='[0-9]{10,15}'
                                                required
                                                aria-required='true'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='message'>Tell Us About Your Appointment</label>
                                <div className=' round' style={{ backgroundColor: "#EBBA78" }}>
                                    <textarea
                                        name='message'
                                        id='message'
                                        className='input-md input-grad round form-control'
                                        style={{ height: 101 }}
                                        placeholder='Please provide your preferred service, desired appointment time/date, and any other details or special requests.'
                                        value={formData.message}
                                        onChange={handleChange}
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6 col-xl-7 d-flex align-items-center'>
                                    <div className='form-tip w-100 pt-3'>
                                        <i className='icon-info size-16' />
                                        All the fields are required. By sending the form you agree to the{" "}
                                        <a href='/terms-and-conditions'>Terms &amp; Conditions</a> and{" "}
                                        <a href='/privacy-and-policy'>Privacy Policy</a>.
                                    </div>
                                </div>
                                <div className='col-md-6 col-xl-5 mt-sm-20'>
                                    <div className='pt-3 text-md-end'>
                                        <button
                                            type='submit'
                                            className='submit_btn btn-mod btn-medium  btn-round'
                                            data-btn-animate='y'
                                            id='submit_btn'
                                            aria-controls='result'
                                            style={{ backgroundColor: "#EBBA78", color: "black" }}
                                        >
                                            Book Appointment
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div id='result' role='region' aria-live='polite' aria-atomic='true'>
                                {result && <p>{result}</p>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

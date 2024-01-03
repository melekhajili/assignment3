import React, { useState } from 'react';
import "../styles/ContactForm.css"
const ContactForm = () => {
    const [formData, setFormData] = useState({
        subject: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            alert('Message sent successfully');
            setFormData({ subject: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="contact-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="subject">Subject:</label>
                <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                />

                <label htmlFor="email">Email Address:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                />

                <label htmlFor="message">Message:</label>
                <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                />

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;

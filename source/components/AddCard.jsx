import React, { useState } from 'react';
import "../styles/AddCard.css";

const AddCard = () => {
    const [formData, setFormData] = useState({
        question: '',
        answer: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/flashs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    question: formData.question,
                    answer: formData.answer,
                    status: "Want to Learn",
                    createdAt: new Date(),
                    updatedAt: new Date()
                }),
            });

            if (response.ok) {
                console.log('Card added successfully');
                setFormData({
                    question: '',
                    answer: '',
                });
            } else {
                console.error('Error adding card');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="add-card-container">
            <h2>Add Card</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="question">Question:</label>
                    <input
                        type="text"
                        id="question"
                        name="question"
                        value={formData.question}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="answer">Answer:</label>
                    <input
                        type="text"
                        id="answer"
                        name="answer"
                        value={formData.answer}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddCard;

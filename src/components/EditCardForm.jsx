import React, { useState } from 'react';
import "../styles/EditCardForm.css"

const EditCardForm = ({ item, onUpdate, handleCancelEdit }) => {
  const [formData, setFormData] = useState({
    question: item.question,
    answer: item.answer,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    onUpdate(formData);
  };

  return (
    <div className="edit-card-form">
      <label htmlFor="edit-question">Edit Question:</label>
      <input
        type="text"
        id="edit-question"
        name="question"
        value={formData.question}
        onChange={handleChange}
        required
      />
      <label htmlFor="edit-answer">Edit Answer:</label>
      <input
        type="text"
        id="edit-answer"
        name="answer"
        value={formData.answer}
        onChange={handleChange}
        required
      />
      <button onClick={handleUpdate}>Update</button>
      <button className="cancel-button" onClick={handleCancelEdit}>Cancel</button>
    </div>
  );
};

export default EditCardForm;

import React, { useState } from 'react';
import '../styles/Card.css';
import EditCardForm from './EditCardForm'; // Import the EditCardForm

const Card = ({ item, refresh, isSelected, onToggleShared }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
  };

  const onUpdate = async (itemID, updatedData) => {
    try {
      const response = await fetch('http://localhost:8000/flashs/' + itemID, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...updatedData, "updatedAt": new Date(), "status": item.status, "createdAt": item.createdAt }),
      });

      if (response.ok) {
        console.log('Card updated successfully');
        refresh();
      } else {
        console.error('Error updating card');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async (itemID) => {
    try {
      const response = await fetch('http://localhost:8000/flashs/' + itemID, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Card deleted successfully');
        refresh();
      } else {
        console.error('Error deleting card');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Define a function to get a formatted date string
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  // Define a function to determine the card's background color based on status
  const getStatusColor = (status) => {
    switch (status) {
      case 'Learned':
        return 'rgba(39, 174, 96, 0.5)'; // Green with half opacity
      case 'Want to Learn':
        return 'rgba(41, 128, 185, 0.5)'; // Blue with half opacity
      case 'Noted':
        return 'rgba(243, 156, 18, 0.5)'; // Yellow with half opacity
      default:
        return 'rgba(255, 255, 255, 0.5)'; // White with half opacity
    }
  };

  return (
    <div className="card" style={{ backgroundColor: getStatusColor(item.status) }}>
      {editMode ? (
        <EditCardForm
          item={item}
          onUpdate={(updatedData) => {
            onUpdate(item.id, updatedData);
            setEditMode(false);
          }}
          handleCancelEdit={handleCancelEdit}
        />
      ) : (
        <>
          <div className="question">{item.question}</div>
          {showAnswer && <div className="answer">{item.answer}</div>}
          <div className='card-buttons'>
            <div className="date">
              Created: {formatDate(item.createdAt)} | Updated: {formatDate(item.updatedAt)}
            </div>
            <div className="status">Status: {item.status}</div>
            <div className='card-actions'>
              <button className='toggle-button' onClick={() => setShowAnswer(!showAnswer)}>Toggle Answer</button>
              <button className='edit-button' onClick={handleEditClick}>Edit</button>
              <button className='delete-button' onClick={() => handleDelete(item.id)}>Delete</button>
              <div className='mailselectedbox'>
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => onToggleShared(item)}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;

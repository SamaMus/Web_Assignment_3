import React, { useState } from "react";
import "../assets/style/EditCardModal.css";

const EditCardModal = ({ card, onUpdate, onClose }) => {
  const [frontText, setFrontText] = useState(card.frontText || "");
  const [backAnswer, setBackAnswer] = useState(card.backAnswer);
  const [status, setStatus] = useState(card.status);
  const [newImage, setNewImage] = useState(null);

  const isImageCard = !frontText && card.image;

  const handleUpdate = async () => {
    let editCard = {
      ...card,
      frontText: isImageCard ? "" : frontText,
      backAnswer,
      status,
      lastModificationDateTime: new Date().toLocaleString(),
    };

    if (isImageCard && newImage) {
      const formData = new FormData();
      formData.append("image", newImage);

      const response = await fetch(`http://localhost:3001/cards/${card.id}/image`, {
        method: "POST",
        body: formData,
      });
      const { image } = await response.json();

      editCard = {
        ...editCard,
        image,
      };

      setNewImage(null);
    }

    onUpdate(editCard);
    onClose();
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setNewImage(selectedImage);
  };

  return (
    <div className="modal-overlay">
      <div className="edit-card-modal">
        <div className="modal-content">
          {isImageCard && (
            <>
              <label htmlFor="image">Upload New Image:</label>
              <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
            </>
          )}

          {!isImageCard && (
            <>
              <label htmlFor="frontText">Front Text:</label>
              <textarea
                id="frontText"
                value={frontText}
                onChange={(e) => setFrontText(e.target.value)}
              />
            </>
          )}

          <label htmlFor="backAnswer">Back Text:</label>
          <textarea
            id="backAnswer"
            value={backAnswer}
            onChange={(e) => setBackAnswer(e.target.value)}
          />

          <label htmlFor="status">Status:</label>
          <select id="status" name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Want to Learn">Want to Learn</option>
            <option value="Mark as Noted">Mark as Noted</option>
            <option value="Learned">Learned</option>
          </select>
        </div>
        <div className="modal-footer">
          <button className="submit-button" onClick={handleUpdate}>
            Edit
          </button>
          <button className="back-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCardModal;

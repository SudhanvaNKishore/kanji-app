import React from 'react';
import './KanjiPopup.css';  // Make sure the path to CSS is correct

const KanjiPopup = ({ kanji, selectedKanji, onClose }) => {
  if (!kanji) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>×</button>
        <div className="kanji-character">{selectedKanji}</div>  
        <div className="kanji-details">
          <p><strong>Strokes:</strong> {kanji.strokes}</p>
          <p><strong>Meanings:</strong> {kanji.meanings.join(', ')}</p>
          <p><strong>On Reading:</strong> {kanji.readings_on.join(', ')}</p>
          <p><strong>Kun Reading:</strong> {kanji.readings_kun.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default KanjiPopup;

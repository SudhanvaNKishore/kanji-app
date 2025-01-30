import React from 'react';
import './KanjiTooltip.css';

const KanjiTooltip = ({ kanji }) => {
  // Take only the first 2 meanings
  const limitedMeanings = kanji.meanings.slice(0, 2).join(', ');
  // Add ellipsis if there are more meanings
  const displayText = kanji.meanings.length > 2 ? `${limitedMeanings}...` : limitedMeanings;

  return (
    <div className="kanji-tooltip">
      <div className="tooltip-meaning">
        {displayText}
      </div>
    </div>
  );
};

export default KanjiTooltip; 
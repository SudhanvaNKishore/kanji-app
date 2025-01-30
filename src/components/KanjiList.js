import React from "react";
import "./KanjiList.css";

function KanjiList({ level, kanjis, onKanjiClick }) {
  return (
    <div className="kanji-list">
      <h2>{level} Level Kanjis</h2>
      <div className="kanji-grid">
        {kanjis.map((kanji) => (
          <div
            key={kanji}
            className="kanji-item"
            onClick={() => onKanjiClick(kanji)}
          >
            {kanji}
          </div>
        ))}
      </div>
    </div>
  );
}

export default KanjiList;

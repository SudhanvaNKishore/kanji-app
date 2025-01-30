import React from "react";
import "./KanjiList.css";
import KanjiTooltip from './KanjiTooltip';
import n5Kanjis from "./data/jlpt_n5.json";
import n4Kanjis from "./data/jlpt_n4.json";
import n3Kanjis from "./data/jlpt_n3.json";
import n2Kanjis from "./data/jlpt_n2.json";
import n1Kanjis from "./data/jlpt_n1.json";

const getKanjiData = (kanji, level) => {
  switch(level) {
    case "N5": return n5Kanjis[kanji];
    case "N4": return n4Kanjis[kanji];
    case "N3": return n3Kanjis[kanji];
    case "N2": return n2Kanjis[kanji];
    case "N1": return n1Kanjis[kanji];
    default: return null;
  }
};

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
            <KanjiTooltip kanji={getKanjiData(kanji, level)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default KanjiList;

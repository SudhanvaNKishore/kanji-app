import React, { useState } from "react";
import KanjiList from "./components/KanjiList";
import KanjiPopup from "./components/KanjiPopup";
import n5Kanjis from "./components/data/jlpt_n5.json";
import n4Kanjis from "./components/data/jlpt_n4.json";
import n3Kanjis from "./components/data/jlpt_n3.json";
import n2Kanjis from "./components/data/jlpt_n2.json";
import n1Kanjis from "./components/data/jlpt_n1.json";
import "./App.css";

function App() {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedKanji, setSelectedKanji] = useState(null);

  const handleLevelClick = (level) => {
    setSelectedLevel(level);
  };

  const handleKanjiClick = (kanji) => {
    setSelectedKanji(kanji);
  };

  const closePopup = () => {
    setSelectedKanji(null);
  };

  const handleHomeClick = () => {
    setSelectedLevel(null);
    setSelectedKanji(null);
  };

  const kanjiData = (() => {
    switch(selectedLevel) {
      case "N5":
        return Object.keys(n5Kanjis);
      case "N4":
        return Object.keys(n4Kanjis);
      case "N3":
        return Object.keys(n3Kanjis);
      case "N2":
        return Object.keys(n2Kanjis);
      case "N1":
        return Object.keys(n1Kanjis);
      default:
        return [];
    }
  })();

  const getKanjiData = (kanji) => {
    switch(selectedLevel) {
      case "N5":
        return n5Kanjis[kanji];
      case "N4":
        return n4Kanjis[kanji];
      case "N3":
        return n3Kanjis[kanji];
      case "N2":
        return n2Kanjis[kanji];
      case "N1":
        return n1Kanjis[kanji];
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <button className="home-button" onClick={handleHomeClick}>
            Home
          </button>
          <h1>Kanjis</h1>
        </div>
        <div className="level-buttons">
          <button onClick={() => handleLevelClick("N5")}>N5 Level</button>
          <button onClick={() => handleLevelClick("N4")}>N4 Level</button>
          <button onClick={() => handleLevelClick("N3")}>N3 Level</button>
          <button onClick={() => handleLevelClick("N2")}>N2 Level</button>
          <button onClick={() => handleLevelClick("N1")}>N1 Level</button>
        </div>
      </header>
      <main>
        {selectedLevel && (
          <KanjiList
            level={selectedLevel}
            kanjis={kanjiData}
            onKanjiClick={handleKanjiClick}
          />
        )}
        {selectedKanji && (
          <KanjiPopup 
            kanji={getKanjiData(selectedKanji)} 
            selectedKanji={selectedKanji}
            onClose={closePopup} 
          />
        )}
      </main>
    </div>
  );
}

export default App;

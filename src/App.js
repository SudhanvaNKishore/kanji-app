import React, { useState, useEffect } from "react";
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
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

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

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <header className="App-header">
        <div className="header-container">
          <button className="home-button" onClick={handleHomeClick}>
            Home
          </button>
          <h1>勉強しましょう</h1>
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
        <div className="level-buttons">
          <button onClick={() => handleLevelClick("N5")}>N5 Level</button>
          <button onClick={() => handleLevelClick("N4")}>N4 Level</button>
          <button onClick={() => handleLevelClick("N3")}>N3 Level</button>
          <button onClick={() => handleLevelClick("N2")}>N2 Level</button>
          <button onClick={() => handleLevelClick("N1")}>N1 Level</button>
        </div>
        {!selectedLevel && (
          <div className="welcome-section">
            <p className="instruction-text">
              Select your JLPT level to explore the kanji characters ✨
            </p>
            <div className="content-container">
              <div className="kanji-showcase">
                <span>漢字</span>
              </div>
              <div className="kanji-description">
                <p>
                  Kanji (漢字) are Chinese characters used in the Japanese writing system. 
                  They are one of the three scripts used in Japanese, alongside hiragana and katakana. 
                  Each kanji character represents a meaning and can have multiple readings depending on the context.
                </p>
                <p>
                  The Japanese Language Proficiency Test (JLPT) categorizes kanji into different levels, 
                  from N5 (basic) to N1 (advanced). Start your kanji learning journey by selecting a level above!
                </p>
              </div>
            </div>
          </div>
        )}
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
      {!selectedLevel && (
        <footer className="footer">
          <p>Copyright © 2025 Sudhanva N Kishore</p>
        </footer>
      )}
    </div>
  );
}

export default App;
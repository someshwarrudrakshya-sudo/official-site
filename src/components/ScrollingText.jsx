import React, { useState, useEffect } from "react";
import "./css/ScrollingText.css";

export default function ScrollingText() {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("/ScrollingMessage.txt")
      .then((res) => res.text())
      .then((data) => setText(data))
      .catch((err) => console.error("Error loading greeting:", err));
  }, []);

  return (
    <div className="scroll-container news-ticker">
      <span className="ticker-label">सन्देश:</span>
      <div className="ticker-wrapper">
        <div className="ticker-content">
          {text}
        </div>
      </div>
    </div>
  );
}

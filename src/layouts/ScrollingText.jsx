import React from "react";
import "./css/ScrollingText.css";

export default function ScrollingText() {
  return (
    <div className="scroll-container news-ticker">
      <span className="ticker-label">स्वागत:</span>
      <div className="ticker-wrapper">
        <div className="ticker-content">
        प्रिय सदस्यज्यूहरू, बडादशैँ २०८२ को पावन अवसरमा तपाई र तपाईका परिवारजनमा सुख, शान्ति, स्वास्थ्य र समृद्धिको हार्दिक शुभकामना व्यक्त गर्दछौं । हामी सधैं तपाईंको साथ, विश्वास र सहकार्यका लागि आभारी छौं । धन्यवाद ।
        </div>
      </div>
    </div>
  );
}

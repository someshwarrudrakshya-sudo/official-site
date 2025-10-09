import { useEffect, useState } from "react";
import popupImg from "../assets/popup/p1.avif";

export default function Popup() {
  const [show, setShow] = useState(false);

  // show once on initial load
  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return null;   // hidden until setShow(true)

  return (
    <div className="popup-backdrop" onClick={() => setShow(false)}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <img src={popupImg} alt="Popup" />
        <button className="close-btn" onClick={() => setShow(false)}>
          Close
        </button>
      </div>
    </div>
  );
}

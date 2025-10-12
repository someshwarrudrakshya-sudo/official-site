import { useEffect, useState } from "react";
import {
  FaUsers,
  FaAward,
  FaMoneyBillWave,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./css/Stats.css";

export default function Stats() {
  const data = [
    { number: 5, label: "Happy Anniversary", icon: <FaAward /> },
    { number: 2327, label: "Our Active Members", icon: <FaUsers /> },
    { number: 207, label: "Loan Issued", icon: <FaMoneyBillWave /> },
    { number: 1, label: "Location", icon: <FaMapMarkerAlt /> },
  ];

  return (
    <section className="stats-section" aria-label="Key statistics">
      <div className="stats-grid">
        {data.map((d) => (
          <div key={d.label} className="stat-item">
            <div className="stat-icon">{d.icon}</div>
            <AnimatedNumber value={d.number} />
            <div className="stat-label">{d.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ✅ Animated Number Component
function AnimatedNumber({ value }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2s
    const increment = value / (duration / 16);

    const animate = () => {
      start += increment;
      if (start < value) {
        setDisplayValue(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animate();
  }, [value]);

  return (
    <div className="stat-number" aria-label={value}>
      {displayValue.toLocaleString()}
    </div>
  );
}

import React, { useEffect, useState, useRef } from "react";
import {
    FaUsers,
    FaMoneyBillWave,
    FaBuilding,
    FaPiggyBank,
    FaUserTie,
    FaChartLine,
} from "react-icons/fa";
import "./css/OrganizationProfile.css";

export default function OrganizationProfile() {
    const [data, setData] = useState([]);
    const [counts, setCounts] = useState([]);
    const [visible, setVisible] = useState(false);
    const ref = useRef();

    // Load and parse data from profile.txt
    useEffect(() => {
        fetch("/profile.txt")
            .then((res) => res.text())
            .then((text) => {
                const lines = text
                    .split("\n")
                    .map((l) => l.trim())
                    .filter((l) => l.length > 0);
                const parsed = lines.map((line) => {
                    const [label, value] = line.split(":").map((x) => x.trim());
                    return {
                        label,
                        value: Number(value),
                        type: /capital|assets|deposit|loan/i.test(label) ? "money" : "count",
                        icon:
                            /capital/i.test(label) ? (
                                <FaBuilding />
                            ) : /assets/i.test(label) ? (
                                <FaChartLine />
                            ) : /deposit/i.test(label) ? (
                                <FaPiggyBank />
                            ) : /loan/i.test(label) ? (
                                <FaMoneyBillWave />
                            ) : /member/i.test(label) ? (
                                <FaUsers />
                            ) : /staff/i.test(label) ? (
                                <FaUserTie />
                            ) : (
                                <FaChartLine />
                            ),
                    };
                });
                setData(parsed);
                setCounts(parsed.map(() => 0));
            })
            .catch((err) => console.error("Failed to load profile.txt:", err));
    }, []);

    // Intersection Observer for animation trigger
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    // Animated counting when visible
    useEffect(() => {
        if (visible && data.length > 0) {
            const duration = 2000;
            const steps = 60;
            const interval = duration / steps;

            data.forEach((item, index) => {
                let start = 0;
                const increment = item.value / steps;

                const timer = setInterval(() => {
                    start += increment;
                    setCounts((prev) => {
                        const updated = [...prev];
                        updated[index] = Math.min(start, item.value);
                        return updated;
                    });
                    if (start >= item.value) clearInterval(timer);
                }, interval);
            });
        }
    }, [visible, data]);

    return (
        <section className="profile-section container" ref={ref}>
            <div className="profile-grid">
                {data.map((item, i) => (
                    <div className="profile-card" key={i}>
                        <div className="icon">{item.icon}</div>
                        <div className="info">
                            <h3>
                                {item.type === "money"
                                    ? `Rs. ${Math.floor(counts[i]).toLocaleString()}`
                                    : Math.floor(counts[i]).toLocaleString()}
                            </h3>
                            <p>{item.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

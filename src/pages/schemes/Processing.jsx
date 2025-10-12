import React from "react";
import Note from "../../components/Note.jsx";
import "./css/Processing.css";

export default function FastProcessing() {
    return (
        <section className="container">
            {/* Page Title */}
            <div className="section-title">
                <h2>
                    Fast<span className="highlight"> Processing</span>
                </h2>
                <p>Get your financial services approved quickly and efficiently.</p>
            </div>

            {/* What We Offer Section */}
            <div className="processing-section">
                <h3>What We Offer</h3>
                <p>
                    Enjoy faster turnaround times with our streamlined processing system:
                </p>
                <ul className="section-list">
                    <li>Speedy loan approval with minimal documentation.</li>
                    <li>Instant account activation for new members.</li>
                    <li>Automated internal processing system for faster results.</li>
                    <li>Dedicated staff for priority support and assistance.</li>
                </ul>
            </div>

            {/* How It Works Section */}
            <div className="processing-section">
                <h3>How It Works</h3>
                <p>
                    {" "}
                    Submit your required documents and let our automated system handle the
                    rest. Most services are processed within the same day, ensuring you
                    get what you need without unnecessary delays.
                </p>
            </div>

            {/* Benefits Section */}
            <div className="processing-section">
                <h3>Benefits</h3>
                <p>
                    Our fast processing system ensures a smoother and more efficient
                    experience:
                </p>
                <ul className="section-list">
                    <li>Save valuable time and effort.</li>
                    <li>Transparent and efficient approval process.</li>
                    <li>Enhanced customer satisfaction and convenience.</li>
                </ul>
            </div>

            {/* Note Section */}
            <Note type="FastProcessing" />
        </section>
    );
}

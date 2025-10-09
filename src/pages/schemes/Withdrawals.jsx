import React from "react";
import Note from "../../components/Note.jsx";
import "./css/Withdrawals.css";

export default function EasyWithdrawals() {
    return (
        <div className="container">
            {/* Page Title */}
            <div className="section-title">
                <h2>
                    Easy <span className="highlight">Withdrawals</span>
                </h2>
                <p>Access your savings quickly, securely, and hassle-free.</p>
            </div>

            {/* Why Choose Section */}
            <section className="withdrawals-section">
                <h3>Why Choose Easy Withdrawals?</h3>
                <p className="section-text">
                    Experience convenient access to your funds with our straightforward process:
                </p>
                <ul className="section-list">
                    <li>Instant withdrawals from your savings account.</li>
                    <li>Available at all cooperative branches nationwide.</li>
                    <li>Minimal paperwork and friendly staff assistance.</li>
                    <li>Transparent process with zero hidden fees.</li>
                    <li>Open during all working hours for your convenience.</li>
                </ul>
            </section>

            {/* Eligibility Section */}
            <section className="withdrawals-section">
                <h3>Eligibility</h3>
                <p className="section-text">
                    All <strong>active members</strong> with a valid savings account can withdraw funds from any branch or authorized agent.
                </p>
            </section>

            {/* Required Documents Section */}
            <section className="withdrawals-section">
                <h3>Required Documents</h3>
                <p className="section-text">
                    Please bring the following when requesting a withdrawal:
                </p>
                <ul className="section-list">
                    <li>Valid Membership ID Card</li>
                    <li>Citizenship or government-issued ID</li>
                    <li>Withdrawal Slip (available at the cooperative counter)</li>
                </ul>
            </section>

            {/* Note Section */}
            <Note type="EasyWithdrawals" />
        </div>
    );
}

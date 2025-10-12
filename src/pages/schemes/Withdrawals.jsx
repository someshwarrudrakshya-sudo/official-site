import React from "react";
import Note from "../../components/Note.jsx";
import "./css/Withdrawals.css";

export default function EasyWithdrawals() {
    return (
        <section className="container">
            {/* Page Title */}
            <div className="section-title">
                <h2>Easy<span className="highlight"> Withdrawals</span>
                </h2>
                <p>Access your savings quickly, securely, and hassle-free.</p>
            </div>

            {/* Why Choose Section */}
            <div className="withdrawals-section">
                <h3>Easy Withdrawals</h3>
                <p>Experience convenient access to your funds with our straightforward process:</p>
                <ul className="section-list">
                    <li>Instant withdrawals from your savings account.</li>
                    <li>Available at all cooperative branches nationwide.</li>
                    <li>Minimal paperwork and friendly staff assistance.</li>
                    <li>Transparent process with zero hidden fees.</li>
                    <li>Open during all working hours for your convenience.</li>
                </ul>
            </div>

            {/* Eligibility Section */}
            <div className="withdrawals-section">
                <h3>Eligibility</h3>
                <p> All <strong>active members</strong> with a valid savings account can withdraw funds from any branch.</p>
            </div>

            {/* Required Documents Section */}
            <div className="withdrawals-section">
                <h3>Required Documents</h3>
                <p>Please bring the following when requesting a withdrawal:</p>
                <ul className="section-list">
                    <li>Valid Membership ID Card</li>
                    <li>Citizenship or government-issued ID</li>
                    <li>Withdrawal Slip (available at the cooperative counter)</li>
                </ul>
            </div>

            {/* Note Section */}
            <Note type="EasyWithdrawals" />
        </section>
    );
}

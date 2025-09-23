import React from "react";

export default function ErrorModal({ message, onClose }) {
    if (!message) return null;
    return (
        <div className="error-modal-backdrop">
            <div className="error-modal">
                <div className="error-modal-header">
                    <span>Login Error</span>
                    <button className="error-modal-close" onClick={onClose}>×</button>
                </div>
                <div className="error-modal-body">
                    {message}
                </div>
            </div>
        </div>
    );
}
import React from 'react';
import './Marquee.css';

const Marquee = () => {
    // Duplicate text to ensure smooth infinite loop
    const text = "SEASON 2026 • EXCLUSIVE COLLECTION • MIDNIGHT ROYALE • ";
    const repeats = 4;

    return (
        <div className="marquee-container fade-in">
            <div className="marquee-content">
                {[...Array(repeats)].map((_, i) => (
                    <span key={i} className="marquee-text">
                        {text}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Marquee;

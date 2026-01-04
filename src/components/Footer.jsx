import React from 'react';
import './Footer.css';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-centered">
                {/* 1. The Monolith Logo */}
                <h2 className="footer-large-logo">BOUTIQUE</h2>

                {/* 2. Minimal Navigation Rows */}
                <div className="footer-nav-group">
                    <nav className="footer-nav">
                        <a href="#">The Collection</a>
                        <span className="separator">•</span>
                        <a href="#">Atelier</a>
                        <span className="separator">•</span>
                        <a href="#">Private Services</a>
                        <span className="separator">•</span>
                        <a href="#">Contact</a>
                    </nav>
                    <nav className="footer-nav">
                        <a href="#">New Arrivals</a>
                        <span className="separator">•</span>
                        <a href="#">Best Sellers</a>
                        <span className="separator">•</span>
                        <a href="#">Accessories</a>
                        <span className="separator">•</span>
                        <a href="#">Gift Cards</a>
                    </nav>
                    <nav className="footer-nav">
                        <a href="#">Shipping & Returns</a>
                        <span className="separator">•</span>
                        <a href="#">Legal Area</a>
                        <span className="separator">•</span>
                        <a href="#">Careers</a>
                        <span className="separator">•</span>
                        <a href="#">FAQ</a>
                    </nav>
                    <nav className="footer-nav">
                        <a href="#">The House</a>
                        <span className="separator">•</span>
                        <a href="#">Sustainability</a>
                        <span className="separator">•</span>
                        <a href="#">Heritage</a>
                        <span className="separator">•</span>
                        <a href="#">Press</a>
                    </nav>
                </div>

                {/* 3. Sleek Newsletter */}
                <div className="footer-newsletter-minimal">
                    <p className="newsletter-label">Unlock the Rare</p>
                    <div className="minimal-input-group">
                        <input type="email" placeholder="ENTER YOUR EMAIL" />
                        <button type="button">→</button>
                    </div>
                </div>

                {/* 4. Socials & Legal */}
                <div className="footer-bottom-minimal">
                    {/* SVG Gradient Definition for Icons */}
                    <svg width="0" height="0" style={{ position: 'absolute', visibility: 'hidden' }}>
                        <defs>
                            <linearGradient id="footer-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#BF953F" />
                                <stop offset="25%" stopColor="#FCF6BA" />
                                <stop offset="50%" stopColor="#B38728" />
                                <stop offset="75%" stopColor="#FBF5B7" />
                                <stop offset="100%" stopColor="#AA771C" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <div className="social-minimal">
                        <a href="#"><Instagram size={20} stroke="url(#footer-icon-gradient)" /></a>
                        <a href="#"><Facebook size={20} stroke="url(#footer-icon-gradient)" /></a>
                        <a href="#"><Twitter size={20} stroke="url(#footer-icon-gradient)" /></a>
                    </div>
                    <p className="copyright-minimal">&copy; 2026 BOUTIQUE. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

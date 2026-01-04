import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, User, Heart, X } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <div className="mobile-menu" onClick={toggleMobileMenu}>
                    {mobileMenuOpen ?
                        <X size={24} className="nav-icon" strokeWidth={1} /> :
                        <Menu size={24} className="nav-icon" strokeWidth={1} />
                    }
                </div>

                <nav className="desktop-nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <span className="nav-link" style={{ cursor: 'default' }}>New Arrival</span>
                    <span className="nav-link" style={{ cursor: 'default' }}>Best Selling</span>
                </nav>

                <div className="logo-container">
                    <Link to="/" className="logo">
                        BOUTIQUE
                    </Link>
                </div>

                <div className="header-actions">
                    <button className="icon-btn" aria-label="Search">
                        <Search size={20} className="nav-icon" strokeWidth={1} />
                    </button>
                    <Link to="/profile" className="icon-btn" aria-label="Account">
                        <User size={20} className="nav-icon" strokeWidth={1} />
                    </Link>
                    <button className="icon-btn" aria-label="Wishlist">
                        <Heart size={20} className="nav-icon" strokeWidth={1} />
                    </button>
                    <Link to="/cart" className="icon-btn cart-btn" aria-label="Cart">
                        <ShoppingBag size={20} className="nav-icon" strokeWidth={1} />
                        <span className="cart-count">0</span>
                    </Link>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}>
                    <nav className="mobile-nav-links">
                        <Link to="/" className="mobile-nav-link" onClick={toggleMobileMenu}>Home</Link>
                        <span className="mobile-nav-link" onClick={toggleMobileMenu}>New Arrival</span>
                        <span className="mobile-nav-link" onClick={toggleMobileMenu}>Best Selling</span>
                        <Link to="/profile" className="mobile-nav-link" onClick={toggleMobileMenu}>Account</Link>
                        <span className="mobile-nav-link" onClick={toggleMobileMenu}>Wishlist</span>
                        <span className="mobile-nav-link" onClick={toggleMobileMenu}>Search</span>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;

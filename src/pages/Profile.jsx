import React, { useEffect } from 'react';
import './Profile.css';

const Profile = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="profile-page fade-in">
            <div className="dashboard-grid">

                {/* Sidebar Navigation */}
                <aside className="dashboard-sidebar">
                    <div className="user-snippet">
                        <div className="avatar-small">M</div>
                        <div className="user-info">
                            <h4>Marc Spector</h4>
                            <span>Member since 2024</span>
                        </div>
                    </div>

                    <nav className="dashboard-nav">
                        <button className="nav-item active">Overview</button>
                        <button className="nav-item">My Orders</button>
                        <button className="nav-item">Wishlist</button>
                        <button className="nav-item">Address Book</button>
                        <button className="nav-item">Settings</button>
                        <button className="nav-item" style={{ marginTop: '2rem', color: '#d9534f' }}>Log Out</button>
                    </nav>
                </aside>

                {/* Main Content Area */}
                <main className="dashboard-content">
                    <h2>Welcome back, Marc.</h2>



                    {/* Recent Orders */}
                    <div className="recent-orders">
                        <div className="section-header">
                            <span className="section-title">Recent Order</span>
                            <a href="#" className="view-all">View All History</a>
                        </div>

                        <div className="order-card">
                            <img src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=200" alt="Gown" className="order-img" />
                            <div className="order-details">
                                <div className="order-meta">
                                    <span className="order-number">#ORD-9921</span>
                                    <span className="order-status">Processing</span>
                                </div>
                                <h4 className="product-name">The Obsidian Gown</h4>
                                <span className="product-price">$4,200</span>
                            </div>
                        </div>

                        <div className="order-card">
                            <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=200" alt="Blazer" className="order-img" />
                            <div className="order-details">
                                <div className="order-meta">
                                    <span className="order-number">#ORD-9845</span>
                                    <span className="order-status" style={{ color: 'green', borderColor: 'green' }}>Delivered</span>
                                </div>
                                <h4 className="product-name">Midnight Velvet Blazer</h4>
                                <span className="product-price">$2,800</span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Profile;

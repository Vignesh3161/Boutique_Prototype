import React, { useEffect } from 'react';
import './Cart.css';

const Cart = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Mock items
    const cartItems = [
        { id: 1, title: "The Obsidian Gown - Midnight Collection", size: "38", price: "$4,200.00", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=300", qty: 1, inStock: true },
        { id: 4, title: "Lunar Clutch - Limited Edition", size: "OS", price: "$950.00", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=300", qty: 1, inStock: true }
    ];

    return (
        <div className="cart-page fade-in">
            <div className="cart-layout">

                {/* Left: Shopping Cart List */}
                <div className="cart-items-container">
                    <div className="cart-header">
                        <h1 className="cart-title">Shopping Cart</h1>
                        <span className="price-header-label">Price</span>
                    </div>

                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item-row">
                            {/* Image */}
                            <img src={item.image} alt={item.title} className="cart-img" />

                            {/* Details */}
                            <div className="item-details">
                                <a href="#" className="item-link-title">{item.title}</a>
                                <div className="item-stock">In Stock</div>
                                <div className="item-shipping">Eligible for <span>FREE Shipping</span></div>
                                <div className="item-meta">Size: <span>{item.size}</span></div>



                                <div className="action-row">
                                    <select className="qty-select" defaultValue={item.qty}>
                                        <option value="1">Qty: 1</option>
                                        <option value="2">Qty: 2</option>
                                        <option value="3">Qty: 3</option>
                                        <option value="4">Qty: 4</option>
                                    </select>
                                    <span className="action-divider">|</span>
                                    <span className="action-link">Remove</span>
                                    <span className="action-divider">|</span>
                                    <span className="action-link">Save for later</span>
                                    <span className="action-divider">|</span>
                                    <span className="action-link">Share</span>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="item-price-col">
                                {item.price}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right: Subtotal Card */}
                <aside className="">
                    <div className="subtotal-card">
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>$5,150.00</span>
                        </div>
                        <div className="summary-row">
                            <span>GST (18%)</span>
                            <span>$927.00</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping</span>
                            <span>$50.00</span>
                        </div>
                        <div className="summary-divider"></div>
                        <div className="summary-total">
                            <span>Total</span>
                            <span>$6,127.00</span>
                        </div>

                        <button className="checkout-btn">proceed to checkout</button>
                    </div>
                </aside>

            </div>
        </div>
    );
};

export default Cart;

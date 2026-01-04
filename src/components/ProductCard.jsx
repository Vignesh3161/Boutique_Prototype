import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ id, image, title, price, category, delay, sizes }) => {
    return (
        <Link to={`/product/${id}`} className="product-card" style={{ animationDelay: `${delay}ms` }}>
            <div className="product-image-container">
                <img src={image} alt={title} className="product-image" loading="lazy" />
                <div className="product-overlay"></div>
                <div className="product-gold-frame"></div>
            </div>

            <div className="product-info">
                <span className="product-category">{category}</span>
                <h3 className="product-title">{title}</h3>
                <div className="product-details-row">
                    <span className="product-price">{price}</span>
                    <button className="add-to-cart-btn" onClick={(e) => {
                        e.preventDefault();
                        // Add to cart logic placeholder
                    }}>
                        ADD
                    </button>
                </div>
                {sizes && sizes.length > 0 && (
                    <div className="product-sizes">
                        {sizes.map(size => (
                            <span key={size} className="size-badge">{size}</span>
                        ))}
                    </div>
                )}
            </div>
        </Link>
    );
};

export default ProductCard;

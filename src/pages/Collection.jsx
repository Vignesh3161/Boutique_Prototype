import React, { useEffect } from 'react';
import Marquee from '../components/Marquee';
import './Collection.css';

const collectionProducts = [
    { id: 1, title: "Obsidian Gown", category: "Evening", price: "$4,200", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800" },
    { id: 2, title: "Velvet Shade", category: "Coats", price: "$2,800", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800" },
    { id: 3, title: "Gold Thread Blazer", category: "Tailoring", price: "$3,100", image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80&w=800" },
    { id: 4, title: "Noir Silk Blouse", category: "Tops", price: "$1,200", image: "https://images.unsplash.com/photo-1550614000-4b9519e0031a?auto=format&fit=crop&q=80&w=800" },
    { id: 5, title: "Midnight Trousers", category: "Tailoring", price: "$1,500", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800" },
    { id: 6, title: "Lunar Clutch", category: "Accessories", price: "$950", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800" }
];

const Collection = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="collection-page container">
            <header className="collection-header fade-in">
                <span className="collection-subtitle">SEASON 2026</span>
                <h1 className="collection-title">Midnight Royale</h1>
                <p className="collection-desc">
                    A curated selection of evening wear inspired by the darkest hours.
                    Each piece tells a story of elegance and mystery.
                </p>
            </header>

            <div className="collection-grid">
                {collectionProducts.map((p, i) => (
                    <div key={p.id} className="collection-item" style={{ marginTop: i % 2 !== 0 ? '4rem' : '0' }}>
                        <ProductCard {...p} delay={i * 150} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Collection;

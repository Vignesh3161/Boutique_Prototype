import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const [loaded, setLoaded] = useState(false);
    const suggestedRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => setLoaded(true), 200);
    }, []);

    // Horizontal Scroll on Mouse Wheel
    useEffect(() => {
        const el = suggestedRef.current;
        if (!el) return;

        const handleWheel = (e) => {
            if (e.deltaY === 0) return;

            const isScrollingDown = e.deltaY > 0;
            const isScrollingUp = e.deltaY < 0;
            const isAtEnd = Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth;
            const isAtStart = el.scrollLeft <= 0;

            if (isScrollingDown && !isAtEnd) {
                // Scroll Right (until end)
                e.preventDefault();
                el.scrollLeft += e.deltaY;
            } else if (isScrollingUp && !isAtStart) {
                // Scroll Left (until start)
                e.preventDefault();
                el.scrollLeft += e.deltaY;
            }
            // If at edges, let default vertical scroll happen (go to footer/header)
        };

        // Passive: false is required to preventDefault
        el.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            el.removeEventListener('wheel', handleWheel);
        };
    }, []);

    const [currentImage, setCurrentImage] = useState(0);

    // Dummy product data simulation
    const product = {
        title: "The Obsidian Gown",
        price: "$4,200",
        description: [
            "Crafted from the finest Italian silk velvet, the Obsidian Gown is a testament to midnight luxury. Its corseted bodice provides a structured yet comfortable silhouette, while the hand-finished gold embroidery catches the light with every movement.",
            "Perfect for gala evenings or exclusive red-carpet events, this piece embodies the Botique philosophy: unapologetic elegance for the rare few. The velvet is sourced from a heritage mill in Como, ensuring a texture that is as rich to the touch as it is to the eye.",
            "Designed with a modern slit for ease of movement, allowing the fabric to flow dramatically as you walk. Paired best with minimal gold jewelry to let the embroidery standout."
        ],
        details: [
            "100% Italian Silk Velvet",
            "Hand-finished gold embroidery",
            "Corseted Bodice Structure",
            "Made in our Paris Atelier",
            "Dry clean only"
        ],
        images: [
            "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=1200", // Duplicate for demo or find new vertical
            "https://images.unsplash.com/photo-1583391733958-377142e9d887?auto=format&fit=crop&q=80&w=1200", // Detail shot
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=1200"  // Lifestyle/Mood
        ]
    };



    return (
        <div className={`product-detail-page ${loaded ? 'visible' : ''}`}>

            <div className="product-container-unique">
                {/* Left: Artistic Gallery (Carousel) */}
                <div className="product-gallery-unique">
                    <div className="carousel-container">
                        <img
                            src={product.images[currentImage]}
                            alt={`${product.title} ${currentImage + 1}`}
                            className="active-image"
                        />

                        {/* Pagination Dots */}
                        <div className="image-pagination">
                            {product.images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`pagination-dot ${currentImage === index ? 'active' : ''}`}
                                    onClick={() => setCurrentImage(index)}
                                    aria-label={`View image ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Sticky Info Panel */}
                <div className="product-info-panel">
                    <div className="sticky-wrapper">
                        <div className="product-header-unique">
                            <span className="collection-tag">Season 2026 // Evening</span>
                            <h1 className="title-unique">{product.title}</h1>
                            <span className="price-unique">{product.price}</span>
                        </div>

                        <div className="description-unique">
                            <p>{product.description}</p>
                            <p className="editors-note">
                                <em>Editor's Note:</em> Pair with the gold filigree cuffs for maximum impact.
                            </p>
                        </div>

                        <div className="actions-unique">
                            <div className="size-selector-minimal">
                                <span>SIZE:</span>
                                <div className="size-options">
                                    <button>36</button>
                                    <button className="active">38</button>
                                    <button>40</button>
                                    <button>42</button>
                                </div>
                            </div>

                            <button className="btn-add-unique">
                                Add to Bag
                            </button>
                        </div>

                        <div className="meta-unique">
                            <details open>
                                <summary>Composition</summary>
                                <ul>
                                    {product.details.map((detail, i) => <li key={i}>{detail}</li>)}
                                </ul>
                            </details>
                            <details>
                                <summary>Delivery & Returns</summary>
                                <p>Complimentary shipping and returns on all orders.</p>
                            </details>
                        </div>
                    </div>
                </div>
            </div>

            {/* Suggested Products Section - 7 Items */}
            <div className="suggested-products">
                <h3 className="suggested-title">You May Also Like</h3>
                <div className="suggested-grid" ref={suggestedRef}>
                    {[
                        { title: "Velvet Blazer", price: "$2,800", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=600" },
                        { title: "Silk Trousers", price: "$1,500", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600" },
                        { title: "Mesh Clutch", price: "$3,200", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=600" },
                        { title: "Gold Cuff", price: "$1,200", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=600" },
                        { title: "Satin Heels", price: "$980", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=600" },
                        { title: "Diamante Hairpin", price: "$450", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600" },
                        { title: "Velvet Scarf", price: "$650", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600" }
                    ].map((item, i) => (
                        <div key={i} className="suggested-item">
                            <div className="suggested-img-wrapper">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className="suggested-info">
                                <h4>{item.title}</h4>
                                <span>{item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

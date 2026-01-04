import React, { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Marquee from '../components/Marquee';
import { Link } from 'react-router-dom';
import './Home.css';

// Dummy Data
const featuredProducts = [
    { id: 1, title: "Obsidian Gown", category: "Evening", price: "$4,200", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800", sizes: ["S", "M", "L"] },
    { id: 2, title: "Velvet Shade", category: "Coats", price: "$2,800", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800", sizes: ["M", "L", "XL"] },
    { id: 3, title: "Gold Thread Blazer", category: "Tailoring", price: "$3,100", image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80&w=800", sizes: ["XS", "S", "M"] },
];

const Home = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 3);
        }, 5000); // 5 seconds per slide
        return () => clearInterval(timer);
    }, []);
    useEffect(() => {
        // Simple scroll reveal
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="home">
            {/* Hero */}
            <section className="hero">
                {[
                    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop", // Luxury Fashion 1
                    "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop", // Luxury Coat 2
                    "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"  // Fashion Model 3
                ].map((img, index) => (
                    <div
                        key={index}
                        className={`hero-bg ${currentSlide === index ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}

                <div className="hero-pagination">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className={`pagination-dot ${currentSlide === i ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(i)}
                        />
                    ))}
                </div>

                <div className="hero-content">
                    <p className="hero-subtitle fade-in delay-300">EST. 2026</p>
                    <h1 className="hero-title fade-in delay-500">
                        Private <span className="italic text-gold">Luxury</span><br />
                        For the Rare Few.
                    </h1>
                    <button className="cta-btn fade-in delay-500">
                        Enter the Collection
                    </button>
                </div>
            </section>

            <Marquee />

            {/* Story Section */}
            <section className="story-section container reveal">
                <div className="story-content">
                    <h2 className="story-title">Midnight Royale</h2>
                    <p className="story-text">
                        Designed for evenings that deserve attention.
                        A collection inspired by the silence of the night and the glow of the city.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="gallery-section container">
                <div className="product-grid">
                    {featuredProducts.map((p, i) => (
                        <ProductCard
                            key={p.id}
                            {...p}
                            delay={i * 200}
                        />
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <Link to="/collection" className="cta-btn fade-in" style={{ display: 'inline-block' }}>
                        View All Collections
                    </Link>
                </div>
            </section>

            {/* Editorial Block */}
            <section className="editorial-section reveal">
                <div className="editorial-image">
                    <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=2000" alt="Editorial" />
                </div>
                <div className="editorial-text-overlay">
                    <h2>The Golden Standard</h2>
                    <p>Excellence in every stitch. Unapologetic luxury.</p>
                </div>
            </section>
        </div >
    );
};

export default Home;

import React, { useEffect } from 'react';

const Journal = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const articles = [
        {
            title: "The Golden Era of Design",
            date: "OCTOBER 12, 2025",
            excerpt: "Exploring the resurgence of metallic accents in contemporary luxury interiors and fashion."
        },
        {
            title: "Midnight Opulence",
            date: "SEPTEMBER 28, 2025",
            excerpt: "Why deep blacks and muted golds are determining the palette of the decade."
        },
        {
            title: "Artisan Stories",
            date: "SEPTEMBER 15, 2025",
            excerpt: "A look behind the scenes at the master craftsmen who shape our signature collections."
        }
    ];

    return (
        <div className="container fade-in" style={{ paddingTop: '150px', paddingBottom: '100px' }}>
            <h1 className="text-metallic" style={{ marginBottom: '3rem', textAlign: 'center' }}>JOURNAL</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                {articles.map((article, index) => (
                    <div key={index} className="journal-card" style={{
                        border: '1px solid rgba(255, 215, 0, 0.1)',
                        padding: '2rem',
                        background: 'linear-gradient(to bottom, #0a0a0a, #000)'
                    }}>
                        <span style={{
                            display: 'block',
                            color: 'var(--color-gold)',
                            fontSize: '0.8rem',
                            letterSpacing: '0.1em',
                            marginBottom: '1rem'
                        }}>
                            {article.date}
                        </span>
                        <h3 style={{
                            marginBottom: '1rem',
                            fontFamily: 'var(--font-serif)',
                            color: 'var(--color-ivory)'
                        }}>
                            {article.title}
                        </h3>
                        <p style={{
                            opacity: 0.7,
                            marginBottom: '1.5rem',
                            fontSize: '0.9rem'
                        }}>
                            {article.excerpt}
                        </p>
                        <a href="#" style={{
                            color: 'var(--color-gold)',
                            textTransform: 'uppercase',
                            fontSize: '0.8rem',
                            letterSpacing: '0.1em',
                            borderBottom: '1px solid var(--color-gold)'
                        }}>
                            Read Story
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Journal;

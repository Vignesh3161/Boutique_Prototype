import React, { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container fade-in" style={{ paddingTop: '150px', paddingBottom: '100px', textAlign: 'center' }}>
            <h1 className="text-metallic" style={{ marginBottom: '2rem' }}>THE HOUSE OF SIGNATURE</h1>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--color-ivory)' }}>
                    Founded on the principles of timeless elegance and uncompromising quality,
                    SIGNATURE represents the pinnacle of modern luxury.
                </p>
                <div style={{
                    width: '100px',
                    height: '2px',
                    background: 'var(--gradient-gold-border)',
                    margin: '2rem auto'
                }}></div>
                <p style={{ marginBottom: '2rem', opacity: 0.8 }}>
                    Our master artisans dedicate countless hours to handcrafting each piece,
                    ensuring that every detail reflects our commitment to perfection.
                    From the rarest materials to the most intricate designs, we create
                    treasures that transcend trends.
                </p>
                <h3 style={{ marginTop: '4rem', marginBottom: '1rem' }} className="text-metallic">LEGACY & CRAFT</h3>
                <p style={{ opacity: 0.8 }}>
                    For generations, we have redefined what it means to be truly exclusive.
                    Welcome to a world where luxury knows no bounds.
                </p>
            </div>
        </div>
    );
};

export default About;

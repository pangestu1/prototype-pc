import './Hero.css';

export default function Hero() {
    const scrollTo = (id) => {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero" id="home">
            <div className="hero-bg">
                <div className="hero-orb hero-orb--1" />
                <div className="hero-orb hero-orb--2" />
                <div className="hero-orb hero-orb--3" />
                <div className="hero-particles" />
            </div>

            <div className="hero-content">
                <div className="hero-badge">
                    <span className="hero-badge-dot" />
                    Innovating Since 2020
                </div>

                <h1>
                    Building the <span className="highlight">Future</span> of<br />
                    Digital Innovation
                </h1>

                <p className="hero-description">
                    We craft cutting-edge technology solutions that empower businesses to thrive
                    in the digital era. From concept to deployment, we're your trusted partner.
                </p>

                <div className="hero-actions">
                    <button className="btn btn-primary" onClick={() => scrollTo('#contact')}>
                        Start a Project
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </button>
                    <button className="btn btn-outline" onClick={() => scrollTo('#services')}>
                        Our Services
                    </button>
                </div>

                <div className="hero-stats">
                    <div className="hero-stat">
                        <div className="hero-stat-number">150+</div>
                        <div className="hero-stat-label">Projects Delivered</div>
                    </div>
                    <div className="hero-stat">
                        <div className="hero-stat-number">50+</div>
                        <div className="hero-stat-label">Happy Clients</div>
                    </div>
                    <div className="hero-stat">
                        <div className="hero-stat-number">5+</div>
                        <div className="hero-stat-label">Years Experience</div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll">
                <span>Scroll</span>
                <div className="hero-scroll-line" />
            </div>
        </section>
    );
}

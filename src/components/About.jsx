import './About.css';

const features = [
    { icon: '🚀', label: 'Fast Delivery' },
    { icon: '🛡️', label: 'Secure & Reliable' },
    { icon: '🎨', label: 'Modern Design' },
    { icon: '📱', label: 'Responsive' },
];

export default function About() {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-image fade-up">
                        <div className="about-image-pattern" />
                        <div className="about-image-content">
                            <div className="about-image-icon">🏢</div>
                            <div className="about-image-text">NovaTech Solutions</div>
                        </div>
                    </div>

                    <div className="about-text fade-up">
                        <span className="section-label">About Us</span>
                        <h2 className="section-title">Empowering Business Through Technology</h2>
                        <p>
                            Founded in 2020, NovaTech Solutions has grown from a small startup into a
                            trusted technology partner for businesses across Southeast Asia. We believe
                            that great technology should be accessible to everyone.
                        </p>
                        <p>
                            Our team of passionate developers, designers, and strategists work together
                            to deliver innovative solutions that drive real business results. We don't
                            just build software — we build partnerships.
                        </p>

                        <div className="about-features">
                            {features.map((f) => (
                                <div className="about-feature" key={f.label}>
                                    <div className="about-feature-icon">{f.icon}</div>
                                    <span className="about-feature-label">{f.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

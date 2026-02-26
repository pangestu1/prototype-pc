import './Services.css';

const services = [
    {
        icon: '🌐',
        title: 'Web Development',
        description: 'Modern, responsive websites and web applications built with the latest frameworks and best practices.',
        tag: 'React · Next.js · Node.js',
    },
    {
        icon: '📱',
        title: 'Mobile Apps',
        description: 'Native and cross-platform mobile applications that deliver seamless user experiences across all devices.',
        tag: 'Flutter · React Native',
    },
    {
        icon: '☁️',
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure and DevOps solutions to keep your applications running smooth and fast.',
        tag: 'AWS · GCP · Docker',
    },
    {
        icon: '🤖',
        title: 'AI & Machine Learning',
        description: 'Intelligent automation and data-driven insights powered by cutting-edge AI and machine learning models.',
        tag: 'Python · TensorFlow',
    },
    {
        icon: '🎨',
        title: 'UI/UX Design',
        description: 'Beautiful, intuitive user interfaces designed with a focus on user experience and conversion optimization.',
        tag: 'Figma · Adobe XD',
    },
    {
        icon: '🔒',
        title: 'Cybersecurity',
        description: 'Comprehensive security audits and solutions to protect your digital assets from evolving threats.',
        tag: 'Penetration Testing',
    },
];

export default function Services() {
    return (
        <section className="services section" id="services">
            <div className="container">
                <div className="services-header fade-up">
                    <span className="section-label">What We Do</span>
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle">
                        We offer a comprehensive suite of technology services designed to
                        accelerate your digital transformation journey.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, i) => (
                        <div
                            className="glass-card service-card fade-up"
                            key={service.title}
                            style={{ transitionDelay: `${i * 0.1}s` }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <span className="service-tag">{service.tag}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

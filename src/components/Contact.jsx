import { useState } from 'react';
import './Contact.css';

const WHATSAPP_NUMBER = '6281234567890'; // Change this to your WhatsApp number

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const text = [
            `*New Inquiry from Website*`,
            ``,
            `👤 *Name:* ${form.name || '-'}`,
            `📧 *Email:* ${form.email || '-'}`,
            `📋 *Subject:* ${form.subject || '-'}`,
            ``,
            `💬 *Message:*`,
            form.message || '-',
        ].join('\n');

        const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
        window.open(waUrl, '_blank');
    };

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div className="contact-grid">
                    {/* Left — Info */}
                    <div className="contact-info fade-up">
                        <div>
                            <span className="section-label">Get in Touch</span>
                            <h2 className="section-title">Let's Work Together</h2>
                            <p className="section-subtitle" style={{ marginBottom: 32 }}>
                                Have a project in mind? We'd love to hear about it. Send us a message
                                and we'll respond as soon as possible.
                            </p>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-info-icon">📍</div>
                            <div className="contact-info-text">
                                <h4>Office</h4>
                                <p>Jl. Teknologi No. 42, Jakarta Selatan, Indonesia 12345</p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-info-icon">📧</div>
                            <div className="contact-info-text">
                                <h4>Email</h4>
                                <p>hello@novatech.co.id</p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-info-icon">📞</div>
                            <div className="contact-info-text">
                                <h4>Phone</h4>
                                <p>+62 812-3456-7890</p>
                            </div>
                        </div>

                        <div className="contact-whatsapp-banner">
                            <div className="contact-whatsapp-banner-icon">💬</div>
                            <div>
                                <h4>Chat via WhatsApp</h4>
                                <p>Get a faster response! Fill in the form and it will directly open WhatsApp for instant messaging.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right — Form */}
                    <form className="contact-form glass-card fade-up" onSubmit={handleSubmit} style={{ padding: '40px' }}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Project Inquiry"
                                value={form.subject}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tell us about your project..."
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-whatsapp">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            Send via WhatsApp
                        </button>

                        <p className="form-note">
                            This will open WhatsApp with your message pre-filled ✨
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}

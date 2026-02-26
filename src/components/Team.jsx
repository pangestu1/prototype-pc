import './Team.css';

const team = [
    {
        avatar: '👨‍💼',
        name: 'Alex Johnson',
        role: 'CEO & Founder',
        bio: 'Visionary leader with 10+ years in tech industry.',
    },
    {
        avatar: '👩‍💻',
        name: 'Sarah Chen',
        role: 'CTO',
        bio: 'Full-stack expert passionate about scalable architectures.',
    },
    {
        avatar: '👨‍🎨',
        name: 'David Park',
        role: 'Head of Design',
        bio: 'Award-winning designer crafting beautiful user experiences.',
    },
    {
        avatar: '👩‍🔬',
        name: 'Maria Santos',
        role: 'AI Lead',
        bio: 'PhD in ML, driving innovation with intelligent solutions.',
    },
];

export default function Team() {
    return (
        <section className="team section" id="team">
            <div className="container">
                <div className="team-header fade-up">
                    <span className="section-label">Our People</span>
                    <h2 className="section-title">Meet the Team</h2>
                    <p className="section-subtitle">
                        A diverse group of talented individuals dedicated to delivering
                        exceptional results for our clients.
                    </p>
                </div>

                <div className="team-grid">
                    {team.map((member, i) => (
                        <div
                            className="glass-card team-card fade-up"
                            key={member.name}
                            style={{ transitionDelay: `${i * 0.1}s` }}
                        >
                            <div className="team-avatar">{member.avatar}</div>
                            <h3>{member.name}</h3>
                            <div className="team-role">{member.role}</div>
                            <p className="team-bio">{member.bio}</p>
                            <div className="team-socials">
                                <a href="#" className="team-social-link" aria-label="LinkedIn">in</a>
                                <a href="#" className="team-social-link" aria-label="Twitter">𝕏</a>
                                <a href="#" className="team-social-link" aria-label="GitHub">⌘</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

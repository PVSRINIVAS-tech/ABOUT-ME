const { useState, useEffect, useRef } = React;

// Personal data - Update with your information
const profileData = {
    name: "PV SRINIVAS",
    profession: "Cloud Cyber Security Engineer",
    email: "4AL23EC058@aiet.org.in",
    location: "ANDHRA PRADESH, RAYALASEEMA",
    bio: "Experienced Cloud Cyber Security Engineer specializing in threat detection, incident response, and cloud infrastructure security. Passionate about protecting digital assets and implementing robust security frameworks across multi-cloud environments.",
    profileImage: "./pv-srinivas.jpg"
};

const skillsData = {
    completed: ["AWS Security", "Azure Security", "SIEM/SOAR", "Incident Response", "Penetration Testing", "Network Security", "Python", "PowerShell", "Linux", "Threat Hunting"],
    ongoing: ["GCP Security", "Kubernetes Security", "Zero Trust Architecture", "DevSecOps", "Cloud Forensics"],
    future: ["AI/ML Security", "Quantum Cryptography", "IoT Security", "Blockchain Security", "Advanced Threat Intelligence"]
};

const certificatesData = [
    {
        id: 1,
        title: "AWS Certified Security - Specialty",
        organization: "Amazon Web Services",
        date: "2024-01-15",
        link: "https://your-certificate-link.com"
    },
    {
        id: 2,
        title: "Certified Information Systems Security Professional (CISSP)",
        organization: "(ISC)² International",
        date: "2023-11-20",
        link: "https://your-certificate-link.com"
    },
    {
        id: 3,
        title: "Microsoft Azure Security Engineer Associate",
        organization: "Microsoft",
        date: "2023-08-10",
        link: "https://your-certificate-link.com"
    },
    {
        id: 4,
        title: "Certified Ethical Hacker (CEH)",
        organization: "EC-Council",
        date: "2023-05-15",
        link: "https://your-certificate-link.com"
    }
];

// Security Projects Data
const securityProjectsData = [
    {
        id: 1,
        title: "Multi-Cloud Security Orchestration Platform",
        description: "Developed automated security monitoring and incident response system across AWS, Azure, and GCP environments.",
        technologies: ["Python", "Terraform", "AWS Security Hub", "Azure Sentinel", "GCP Security Command Center"],
        category: "Cloud Security",
        status: "Completed",
        github: "https://github.com/your-username/cloud-security-platform",
        demo: "https://your-demo-link.com"
    },
    {
        id: 2,
        title: "Zero Trust Network Architecture Implementation",
        description: "Designed and implemented Zero Trust security model for enterprise infrastructure with micro-segmentation.",
        technologies: ["Palo Alto Networks", "Okta", "CrowdStrike", "Splunk", "Kubernetes"],
        category: "Network Security",
        status: "Completed",
        github: "https://github.com/your-username/zero-trust-implementation",
        demo: "#"
    },
    {
        id: 3,
        title: "AI-Powered Threat Detection System",
        description: "Built machine learning models for real-time threat detection and anomaly identification in cloud environments.",
        technologies: ["Python", "TensorFlow", "ELK Stack", "AWS SageMaker", "Docker"],
        category: "Threat Intelligence",
        status: "In Progress",
        github: "https://github.com/your-username/ai-threat-detection",
        demo: "#"
    }
];

// Cloud Platforms & Tools Data
const cloudToolsData = {
    aws: {
        name: "Amazon Web Services",
        level: "Expert",
        tools: ["Security Hub", "GuardDuty", "CloudTrail", "IAM", "KMS", "WAF", "Shield", "Inspector"],
        certifications: ["Security Specialty", "Solutions Architect"]
    },
    azure: {
        name: "Microsoft Azure",
        level: "Advanced",
        tools: ["Security Center", "Sentinel", "Key Vault", "Azure AD", "Application Gateway", "DDoS Protection"],
        certifications: ["Security Engineer Associate", "Azure Fundamentals"]
    },
    gcp: {
        name: "Google Cloud Platform",
        level: "Intermediate",
        tools: ["Security Command Center", "Cloud IAM", "Cloud KMS", "Cloud Armor", "Binary Authorization"],
        certifications: ["Associate Cloud Engineer"]
    }
};

// Security Frameworks Data
const securityFrameworksData = [
    { name: "NIST Cybersecurity Framework", proficiency: 95, description: "Risk management and cybersecurity best practices" },
    { name: "ISO 27001/27002", proficiency: 90, description: "Information security management systems" },
    { name: "CIS Controls", proficiency: 88, description: "Critical security controls implementation" },
    { name: "OWASP Top 10", proficiency: 92, description: "Web application security vulnerabilities" },
    { name: "MITRE ATT&CK", proficiency: 85, description: "Adversarial tactics, techniques, and procedures" },
    { name: "SOC 2 Type II", proficiency: 80, description: "Service organization control compliance" }
];

// Navigation Component
const Navigation = ({ darkMode, toggleDarkMode, activeSection, setActiveSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Security Projects' },
        { id: 'cloud-tools', label: 'Cloud Expertise' },
        { id: 'frameworks', label: 'Frameworks' },
        { id: 'certificates', label: 'Certifications' },
        { id: 'contact', label: 'Contact' },
        { id: 'feedback', label: 'Feedback' },
        { id: 'admin', label: '🔐 Admin' }
    ];

    const scrollToSection = (sectionId) => {
        if (sectionId === 'admin') {
            // Open admin page in new tab
            window.open('./admin.html', '_blank');
            setIsMenuOpen(false);
            return;
        }
        
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                            Portfolio
                        </h1>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                        activeSection === item.id
                                            ? 'bg-primary text-white'
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                        >
                            {darkMode ? '☀️' : '🌙'}
                        </button>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800 rounded-lg mt-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                                        activeSection === item.id
                                            ? 'bg-primary text-white'
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

// Profile Section Component
const ProfileSection = () => {
    const [typingComplete, setTypingComplete] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => setTypingComplete(true), 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <div className="mb-8 animate-bounce-in">
                        <div className="relative">
                            <img
                                src={profileData.profileImage}
                                alt={profileData.name}
                                className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary shadow-lg pulse-animation cinematic-hover profile-image"
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/300x300/8B5CF6/FFFFFF?text=PV+SRINIVAS";
                                }}
                            />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white glow-text mb-4 typing-animation">
                        {profileData.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-primary mb-4 animate-slide-up glow-text" style={{animationDelay: '1s'}}>
                        {profileData.profession}
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-300 mb-6 animate-slide-up" style={{animationDelay: '1.5s'}}>
                        <div className="flex items-center cinematic-hover">
                            <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                            </svg>
                            {profileData.email}
                        </div>
                        <div className="flex items-center cinematic-hover">
                            <svg className="w-5 h-5 mr-2 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                            </svg>
                            {profileData.location}
                        </div>
                    </div>
                    <p className="text-lg text-gray-200 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '2s'}}>
                        {profileData.bio}
                    </p>
                </div>
            </div>
        </section>
    );
};

// Skills Section Component
const SkillsSection = () => {
    const SkillCategory = ({ title, skills, color, icon, delay }) => (
        <div className={`bg-black bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg p-6 cinematic-hover animate-slide-up border border-purple-500 border-opacity-30`} style={{animationDelay: `${delay}s`}}>
            <div className="flex items-center mb-4">
                <span className="text-3xl mr-3 pulse-animation">{icon}</span>
                <h3 className={`text-xl font-semibold ${color} glow-text`}>{title}</h3>
            </div>
            <ul className="space-y-3">
                {skills.map((skill, index) => (
                    <li key={index} className="flex items-center text-gray-200 cinematic-hover" style={{'--stagger': index}}>
                        <span className={`w-3 h-3 rounded-full ${color.replace('text', 'bg')} mr-3 pulse-animation`}></span>
                        <span className="hover:text-white transition-colors duration-300">{skill}</span>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white glow-text mb-4 animate-slide-up">
                        Skills & Expertise
                    </h2>
                    <p className="text-lg text-gray-300 animate-slide-up" style={{animationDelay: '0.5s'}}>
                        My journey through technology and continuous learning
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <SkillCategory
                        title="Completed Skills"
                        skills={skillsData.completed}
                        color="text-secondary"
                        icon="✅"
                        delay={0.5}
                    />
                    <SkillCategory
                        title="Ongoing Learning"
                        skills={skillsData.ongoing}
                        color="text-primary"
                        icon="📚"
                        delay={1}
                    />
                    <SkillCategory
                        title="Future Goals"
                        skills={skillsData.future}
                        color="text-accent"
                        icon="🎯"
                        delay={1.5}
                    />
                </div>
            </div>
        </section>
    );
};

// Certificates Section Component
const CertificatesSection = () => {
    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        const savedCertificates = localStorage.getItem('portfolioCertificates');
        if (savedCertificates) {
            setCertificates(JSON.parse(savedCertificates));
        } else {
            // Default certificates if none exist
            const defaultCerts = [
                {
                    id: 1,
                    title: "Cybersecurity Fundamentals",
                    issuer: "CompTIA",
                    date: "2024",
                    description: "Comprehensive cybersecurity training covering network security, risk management, and incident response.",
                    image: "https://via.placeholder.com/300x200/1f2937/60a5fa?text=CompTIA+Security%2B",
                    credentialId: "COMP-SEC-2024-001",
                    verificationUrl: "#"
                },
                {
                    id: 2,
                    title: "Ethical Hacking Certification",
                    issuer: "EC-Council",
                    date: "2024",
                    description: "Advanced penetration testing and ethical hacking methodologies certification.",
                    image: "https://via.placeholder.com/300x200/1f2937/10b981?text=CEH+Certified",
                    credentialId: "CEH-2024-002",
                    verificationUrl: "#"
                }
            ];
            setCertificates(defaultCerts);
        }
    }, []);

    return (
        <section id="certificates" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white glow-text mb-4 animate-slide-up">
                        Professional Certifications
                    </h2>
                    <p className="text-lg text-gray-300 animate-slide-up" style={{animationDelay: '0.5s'}}>
                        Industry-recognized credentials and achievements
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <div
                            key={cert.id}
                            className="bg-black bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden cinematic-hover animate-slide-up border border-purple-500 border-opacity-30"
                            style={{animationDelay: `${index * 0.2}s`}}
                        >
                            {cert.image && (
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                    />
                                </div>
                            )}
                            
                            <div className="p-6">
                                <div className="text-center mb-4">
                                    {!cert.image && (
                                        <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 pulse-animation">
                                            <span className="text-2xl">🏆</span>
                                        </div>
                                    )}
                                    <h3 className="text-xl font-semibold text-white mb-2 glow-text">{cert.title}</h3>
                                    <p className="text-primary mb-2">🏢 {cert.issuer}</p>
                                    {cert.date && <p className="text-gray-400 mb-2">📅 {cert.date}</p>}
                                    {cert.credentialId && (
                                        <p className="text-sm text-gray-300 mb-3">
                                            <span className="font-medium">🆔 Credential ID:</span> {cert.credentialId}
                                        </p>
                                    )}
                                    {cert.description && (
                                        <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                                            {cert.description}
                                        </p>
                                    )}
                                </div>
                                
                                <div className="text-center">
                                    {cert.verificationUrl && cert.verificationUrl !== '#' ? (
                                        <a
                                            href={cert.verificationUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                                        >
                                            🔗 Verify Certificate
                                        </a>
                                    ) : (
                                        <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg">
                                            ✅ Verified Certificate
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
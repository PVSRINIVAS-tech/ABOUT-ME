// Contact Section Component
const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white glow-text mb-4 animate-slide-up">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-gray-300 animate-slide-up" style={{animationDelay: '0.5s'}}>
                        Let's discuss opportunities and collaborations
                    </p>
                </div>
                
                <div className="bg-black bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg p-8 animate-slide-up border border-purple-500 border-opacity-30 cinematic-hover">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors duration-200"
                                placeholder="Your full name"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors duration-200"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows={5}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors duration-200"
                                placeholder="Your message here..."
                            />
                        </div>
                        
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                        
                        {submitStatus === 'success' && (
                            <div className="text-secondary text-center font-medium">
                                ✅ Message sent successfully!
                            </div>
                        )}
                        
                        {submitStatus === 'error' && (
                            <div className="text-red-500 text-center font-medium">
                                ❌ Failed to send message. Please try again.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

// Enhanced Feedback Section Component
const FeedbackSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        contactNumber: '',
        note: ''
    });
    const [feedbacks, setFeedbacks] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [showWelcome, setShowWelcome] = useState(false);

    // Load feedbacks from localStorage
    useEffect(() => {
        const savedFeedbacks = localStorage.getItem('portfolioFeedbacks');
        if (savedFeedbacks) {
            setFeedbacks(JSON.parse(savedFeedbacks));
        }
    }, []);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            const newFeedback = {
                id: Date.now(),
                name: formData.name,
                contactNumber: formData.contactNumber,
                note: formData.note,
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
                status: 'unread'
            };
            
            const updatedFeedbacks = [newFeedback, ...feedbacks];
            setFeedbacks(updatedFeedbacks);
            
            // Save to localStorage for admin panel
            localStorage.setItem('portfolioFeedbacks', JSON.stringify(updatedFeedbacks));
            
            // Reset form
            setFormData({ name: '', contactNumber: '', note: '' });
            
            // Show welcome message
            setShowWelcome(true);
            setSubmitMessage(`Welcome ${newFeedback.name}! Thank you for your feedback. We appreciate your time and will get back to you soon.`);
            setIsSubmitting(false);
            
            setTimeout(() => {
                setSubmitMessage('');
                setShowWelcome(false);
            }, 5000);
        }, 1000);
    };

    return (
        <section id="feedback" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white glow-text mb-4 animate-slide-up">
                        💬 Feedback & Contact
                    </h2>
                    <p className="text-lg text-gray-300 animate-slide-up" style={{animationDelay: '0.5s'}}>
                        Share your thoughts and get in touch with us
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Enhanced Feedback Form */}
                    <div className="bg-black bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg p-8 cinematic-hover animate-slide-up border border-purple-500 border-opacity-30">
                        <h3 className="text-xl font-semibold text-white glow-text mb-6">📝 Leave Your Feedback</h3>
                        
                        {showWelcome && (
                            <div className="mb-6 p-4 bg-green-500 bg-opacity-20 border border-green-500 text-green-300 rounded-lg animate-bounce-in">
                                <div className="flex items-center mb-2">
                                    <span className="text-2xl mr-2">🎉</span>
                                    <h4 className="font-semibold">Welcome!</h4>
                                </div>
                                <p className="text-sm">{submitMessage}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">👤 Full Name *</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-purple-500 border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">📞 Contact Number *</label>
                                <input
                                    type="tel"
                                    value={formData.contactNumber}
                                    onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                                    placeholder="Enter your contact number"
                                    className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-purple-500 border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">📋 Your Message *</label>
                                <textarea
                                    value={formData.note}
                                    onChange={(e) => handleInputChange('note', e.target.value)}
                                    placeholder="Share your feedback, questions, or suggestions..."
                                    rows={5}
                                    className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-purple-500 border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                ></textarea>
                            </div>
                            
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 disabled:opacity-50 cinematic-hover"
                            >
                                {isSubmitting ? '📤 Submitting...' : '🚀 Submit Feedback'}
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-black bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg p-8 cinematic-hover animate-slide-up border border-purple-500 border-opacity-30" style={{animationDelay: '0.3s'}}>
                        <h3 className="text-xl font-semibold text-white glow-text mb-6">📞 Contact Information</h3>
                        
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="bg-purple-600 bg-opacity-50 p-3 rounded-full">
                                    <span className="text-2xl">👤</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Name</h4>
                                    <p className="text-gray-300">PV SRINIVAS</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                <div className="bg-purple-600 bg-opacity-50 p-3 rounded-full">
                                    <span className="text-2xl">📧</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Email</h4>
                                    <a href="mailto:4AL23EC058@aiet.org.in" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                                        4AL23EC058@aiet.org.in
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                <div className="bg-purple-600 bg-opacity-50 p-3 rounded-full">
                                    <span className="text-2xl">📱</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Phone</h4>
                                    <a href="tel:+919113097946" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                                        +91 9113097946
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                <div className="bg-purple-600 bg-opacity-50 p-3 rounded-full">
                                    <span className="text-2xl">📍</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Location</h4>
                                    <p className="text-gray-300">ANDHRA PRADESH, RAYALASEEMA</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-8 p-4 bg-purple-600 bg-opacity-20 rounded-lg border border-purple-500 border-opacity-30">
                            <h4 className="text-white font-semibold mb-2">🚀 Quick Response</h4>
                            <p className="text-gray-300 text-sm">
                                We typically respond to feedback within 24 hours. For urgent matters, please call directly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="bg-gray-900 dark:bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-gray-400 mb-4">
                    © 2025 {profileData.name}. All rights reserved.
                </p>
                <div className="flex justify-center space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                        LinkedIn
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                        GitHub
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    );
};

// Particle Animation Component
const ParticleSystem = () => {
    useEffect(() => {
        const createParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.width = particle.style.height = Math.random() * 10 + 5 + 'px';
            particle.style.animationDuration = Math.random() * 10 + 10 + 's';
            particle.style.animationDelay = Math.random() * 5 + 's';
            
            const particlesContainer = document.querySelector('.particles');
            if (particlesContainer) {
                particlesContainer.appendChild(particle);
                
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 25000);
            }
        };

        const interval = setInterval(createParticle, 300);
        return () => clearInterval(interval);
    }, []);

    return null;
};

// Main App Component
const App = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setDarkMode(savedTheme === 'dark');
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="min-h-screen relative">
            <ParticleSystem />
            <Navigation 
                darkMode={darkMode} 
                toggleDarkMode={toggleDarkMode}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />
            <ProfileSection />
            <SkillsSection />
            <SecurityProjectsSection />
            <CloudToolsSection />
            <SecurityFrameworksSection />
            <CertificatesSection />
            <ContactSection />
            <FeedbackSection />
            <Footer />
        </div>
    );
};

// Admin Access Button Component
const AdminAccessButton = () => {
    const openAdmin = () => {
        window.open('./admin.html', '_blank');
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <button
                onClick={openAdmin}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                title="Admin Access"
            >
                🔧
            </button>
        </div>
    );
};

// Update App component to include admin button
const AppWithAdmin = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [activeSection, setActiveSection] = useState('home');

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

    return (
        <div className="min-h-screen relative">
            <ParticleSystem />
            <Navigation 
                darkMode={darkMode} 
                toggleDarkMode={toggleDarkMode}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />
            <ProfileSection />
            <SkillsSection />
            <SecurityProjectsSection />
            <CloudToolsSection />
            <SecurityFrameworksSection />
            <CertificatesSection />
            <ContactSection />
            <FeedbackSection />
            <Footer />
            <AdminAccessButton />
        </div>
    );
};

// Render the app
ReactDOM.render(<AppWithAdmin />, document.getElementById('root'));
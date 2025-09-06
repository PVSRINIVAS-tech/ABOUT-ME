// Security Projects Section Component
const SecurityProjectsSection = () => {
    return (
        <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white glow-text mb-4 animate-slide-up">
                        🔒 Security Projects
                    </h2>
                    <p className="text-lg text-gray-300 animate-slide-up" style={{animationDelay: '0.5s'}}>
                        Real-world cybersecurity implementations and threat mitigation solutions
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {securityProjectsData.map((project, index) => (
                        <div
                            key={project.id}
                            className="bg-black bg-opacity-40 backdrop-blur-lg rounded-lg shadow-lg p-6 cinematic-hover animate-slide-up border border-purple-500 border-opacity-30"
                            style={{animationDelay: `${index * 0.3}s`}}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <div className="flex items-center mb-2">
                                        <span className="text-2xl mr-2">🛡️</span>
                                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                                            project.status === 'Completed' ? 'bg-green-500 text-white' : 
                                            project.status === 'In Progress' ? 'bg-yellow-500 text-black' : 
                                            'bg-blue-500 text-white'
                                        }`}>
                                            {project.status}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white glow-text mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-3">
                                        {project.description}
                                    </p>
                                    <div className="mb-4">
                                        <p className="text-primary font-medium mb-2 glow-text">
                                            Category: {project.category}
                                        </p>
                                        <div className="flex flex-wrap gap-1">
                                            {project.technologies.slice(0, 3).map((tech, i) => (
                                                <span key={i} className="px-2 py-1 bg-purple-600 bg-opacity-50 rounded text-xs text-white">
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <span className="px-2 py-1 bg-gray-600 bg-opacity-50 rounded text-xs text-gray-300">
                                                    +{project.technologies.length - 3} more
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-x-3">
                                <a
                                    href={project.github}
                                    className="flex-1 inline-flex items-center justify-center text-secondary hover:text-accent transition-colors duration-300 cinematic-hover glow-text text-sm"
                                >
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                    GitHub
                                </a>
                                {project.demo !== "#" && (
                                    <a
                                        href={project.demo}
                                        className="flex-1 inline-flex items-center justify-center text-primary hover:text-accent transition-colors duration-300 cinematic-hover glow-text text-sm"
                                    >
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Cloud Tools & Platforms Section Component
const CloudToolsSection = () => {
    const CloudPlatform = ({ platform, data, delay }) => (
        <div className={`bg-black bg-opacity-40 backdrop-blur-lg rounded-lg shadow-lg p-6 cinematic-hover animate-slide-up border border-purple-500 border-opacity-30`} style={{animationDelay: `${delay}s`}}>
            <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">
                    {platform === 'aws' ? '☁️' : platform === 'azure' ? '🔷' : '🌐'}
                </span>
                <div>
                    <h3 className="text-xl font-semibold text-white glow-text">{data.name}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                        data.level === 'Expert' ? 'bg-green-500 text-white' :
                        data.level === 'Advanced' ? 'bg-blue-500 text-white' :
                        'bg-yellow-500 text-black'
                    }`}>
                        {data.level}
                    </span>
                </div>
            </div>
            
            <div className="mb-4">
                <h4 className="text-primary font-medium mb-2 glow-text">Security Tools:</h4>
                <div className="flex flex-wrap gap-1">
                    {data.tools.map((tool, index) => (
                        <span key={index} className="px-2 py-1 bg-purple-600 bg-opacity-50 rounded text-xs text-white">
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
            
            <div>
                <h4 className="text-secondary font-medium mb-2 glow-text">Certifications:</h4>
                <ul className="space-y-1">
                    {data.certifications.map((cert, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                            <span className="w-2 h-2 rounded-full bg-secondary mr-2"></span>
                            {cert}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

    return (
        <section id="cloud-tools" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white glow-text mb-4 animate-slide-up">
                        ☁️ Cloud Security Expertise
                    </h2>
                    <p className="text-lg text-gray-300 animate-slide-up" style={{animationDelay: '0.5s'}}>
                        Multi-cloud security architecture and platform-specific security tools
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <CloudPlatform platform="aws" data={cloudToolsData.aws} delay={0.5} />
                    <CloudPlatform platform="azure" data={cloudToolsData.azure} delay={1} />
                    <CloudPlatform platform="gcp" data={cloudToolsData.gcp} delay={1.5} />
                </div>
            </div>
        </section>
    );
};

// Security Frameworks Section Component
const SecurityFrameworksSection = () => {
    return (
        <section id="frameworks" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white glow-text mb-4 animate-slide-up">
                        📋 Security Frameworks & Standards
                    </h2>
                    <p className="text-lg text-gray-300 animate-slide-up" style={{animationDelay: '0.5s'}}>
                        Expertise in industry-standard security frameworks and compliance requirements
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {securityFrameworksData.map((framework, index) => (
                        <div
                            key={index}
                            className="bg-black bg-opacity-40 backdrop-blur-lg rounded-lg shadow-lg p-6 cinematic-hover animate-slide-up border border-purple-500 border-opacity-30"
                            style={{animationDelay: `${index * 0.2}s`}}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-white glow-text mb-2">
                                        {framework.name}
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-3">
                                        {framework.description}
                                    </p>
                                </div>
                                <span className="text-2xl">🔐</span>
                            </div>
                            
                            <div className="mb-2">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-primary font-medium glow-text">Proficiency</span>
                                    <span className="text-white font-bold">{framework.proficiency}%</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div 
                                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                                        style={{width: `${framework.proficiency}%`}}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Threat Intelligence Dashboard Component
const ThreatIntelligenceSection = () => {
    const [threatData, setThreatData] = useState({
        criticalAlerts: 3,
        activeThreats: 12,
        blockedAttacks: 847,
        lastUpdate: new Date().toLocaleTimeString()
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setThreatData(prev => ({
                ...prev,
                blockedAttacks: prev.blockedAttacks + Math.floor(Math.random() * 5),
                lastUpdate: new Date().toLocaleTimeString()
            }));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="threat-intel" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white glow-text mb-4 animate-slide-up">
                        🚨 Threat Intelligence Dashboard
                    </h2>
                    <p className="text-lg text-gray-300 animate-slide-up" style={{animationDelay: '0.5s'}}>
                        Real-time security monitoring and threat detection metrics
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-black bg-opacity-40 backdrop-blur-lg rounded-lg shadow-lg p-6 cinematic-hover border border-red-500 border-opacity-30">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-red-400 text-sm font-medium">Critical Alerts</p>
                                <p className="text-3xl font-bold text-white glow-text">{threatData.criticalAlerts}</p>
                            </div>
                            <span className="text-3xl">🚨</span>
                        </div>
                    </div>
                    
                    <div className="bg-black bg-opacity-40 backdrop-blur-lg rounded-lg shadow-lg p-6 cinematic-hover border border-yellow-500 border-opacity-30">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-yellow-400 text-sm font-medium">Active Threats</p>
                                <p className="text-3xl font-bold text-white glow-text">{threatData.activeThreats}</p>
                            </div>
                            <span className="text-3xl">⚠️</span>
                        </div>
                    </div>
                    
                    <div className="bg-black bg-opacity-40 backdrop-blur-lg rounded-lg shadow-lg p-6 cinematic-hover border border-green-500 border-opacity-30">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-green-400 text-sm font-medium">Blocked Attacks</p>
                                <p className="text-3xl font-bold text-white glow-text">{threatData.blockedAttacks}</p>
                            </div>
                            <span className="text-3xl">🛡️</span>
                        </div>
                    </div>
                    
                    <div className="bg-black bg-opacity-40 backdrop-blur-lg rounded-lg shadow-lg p-6 cinematic-hover border border-blue-500 border-opacity-30">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-blue-400 text-sm font-medium">Last Update</p>
                                <p className="text-lg font-bold text-white glow-text">{threatData.lastUpdate}</p>
                            </div>
                            <span className="text-3xl">🔄</span>
                        </div>
                    </div>
                </div>
                
                <div className="bg-black bg-opacity-40 backdrop-blur-lg rounded-lg shadow-lg p-6 border border-purple-500 border-opacity-30">
                    <h3 className="text-xl font-semibold text-white glow-text mb-4">Recent Security Events</h3>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-800 bg-opacity-50 rounded">
                            <div className="flex items-center">
                                <span className="text-red-500 mr-3">🚨</span>
                                <span className="text-white">Suspicious login attempt blocked from IP 192.168.1.100</span>
                            </div>
                            <span className="text-gray-400 text-sm">2 min ago</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-800 bg-opacity-50 rounded">
                            <div className="flex items-center">
                                <span className="text-yellow-500 mr-3">⚠️</span>
                                <span className="text-white">Malware signature detected and quarantined</span>
                            </div>
                            <span className="text-gray-400 text-sm">5 min ago</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-800 bg-opacity-50 rounded">
                            <div className="flex items-center">
                                <span className="text-green-500 mr-3">✅</span>
                                <span className="text-white">Security patch deployed successfully</span>
                            </div>
                            <span className="text-gray-400 text-sm">10 min ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
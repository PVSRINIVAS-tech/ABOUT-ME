// Admin Authentication and Management System
const { useState, useEffect } = React;

// Admin credentials (in production, this should be handled securely)
const ADMIN_CREDENTIALS = {
    username: "ADMINSRINIVAS@2005",
    password: "ADMIN@778104"
};

// Admin Login Component
const AdminLogin = ({ onLogin }) => {
    const [step, setStep] = useState(1); // 1: credentials, 2: secure code
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [secureCode, setSecureCode] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showFloatingError, setShowFloatingError] = useState(false);

    const showAnimatedError = (message) => {
        setError(message);
        setShowFloatingError(true);
        // Auto hide after 5 seconds
        setTimeout(() => {
            setShowFloatingError(false);
        }, 5000);
    };

    const handleCredentialsSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate loading delay
        await new Promise(resolve => setTimeout(resolve, 500));

        if (credentials.username === 'ADMINSRINIVAS@2005' && credentials.password === 'ADMIN@778104') {
            setStep(2);
            setError('');
        } else {
            // Directly redirect to 404 page
            window.location.href = '404.html';
            return; // Prevent further execution
        }
        setIsLoading(false);
    };

    const handleSecureCodeSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate loading delay
        await new Promise(resolve => setTimeout(resolve, 500));

        if (secureCode === 'ADMIN@9030419554') {
            localStorage.setItem('adminLoggedIn', 'true');
            onLogin(true);
        } else {
            // Directly redirect to 404 page
            window.location.href = '404.html';
            return; // Prevent further execution
        }
        setIsLoading(false);
    };

    const resetLogin = () => {
        setStep(1);
        setCredentials({ username: '', password: '' });
        setSecureCode('');
        setError('');
        setShowFloatingError(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4 relative">
            {/* Floating Error Popup */}
            {showFloatingError && (
                <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
                    <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white px-6 py-4 rounded-lg shadow-2xl border-2 border-yellow-400 animate-pulse">
                        <div className="flex items-center space-x-3">
                            <div className="animate-spin text-2xl">🚀</div>
                            <div>
                                <p className="font-bold text-lg animate-bounce">{error}</p>
                                <p className="text-sm opacity-90">Wrong credentials detected! 🛡️</p>
                            </div>
                            <button 
                                onClick={() => setShowFloatingError(false)}
                                className="text-white hover:text-red-200 text-xl font-bold ml-2"
                            >
                                ✖️
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-md w-full">
                <div className="bg-black bg-opacity-40 backdrop-blur-lg rounded-lg p-8 border border-purple-500 border-opacity-30">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white glow-text mb-2">🔐 Secure Admin Access</h1>
                        <p className="text-gray-300">
                            {step === 1 ? 'Enter Admin Credentials' : 'Two-Factor Authentication'}
                        </p>
                        
                        {/* Progress Indicator */}
                        <div className="flex justify-center mt-4 space-x-2">
                            <div className={`w-3 h-3 rounded-full ${step >= 1 ? 'bg-purple-500' : 'bg-gray-600'}`}></div>
                            <div className={`w-3 h-3 rounded-full ${step >= 2 ? 'bg-purple-500' : 'bg-gray-600'}`}></div>
                        </div>
                    </div>

                    {step === 1 ? (
                        <form onSubmit={handleCredentialsSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    👤 Admin Username
                                </label>
                                <input
                                    type="text"
                                    value={credentials.username}
                                    onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                                    className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-purple-500 border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                                    placeholder="Enter admin username"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    🔒 Admin Password
                                </label>
                                <input
                                    type="password"
                                    value={credentials.password}
                                    onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                                    className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-purple-500 border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                                    placeholder="Enter admin password"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? '🔄 Verifying...' : '🔐 Verify Credentials'}
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleSecureCodeSubmit} className="space-y-6">
                            <div className="text-center mb-6">
                                <div className="bg-green-900 bg-opacity-30 border border-green-500 border-opacity-30 rounded-lg p-4 mb-4">
                                    <p className="text-green-300 text-sm">✅ Credentials Verified</p>
                                </div>
                                <p className="text-gray-300 text-sm">Enter the secure code to complete login</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    🛡️ Security Code
                                </label>
                                <input
                                    type="password"
                                    value={secureCode}
                                    onChange={(e) => setSecureCode(e.target.value)}
                                    className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-purple-500 border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-300 text-center tracking-wider"
                                    placeholder="Enter security code"
                                    required
                                />
                            </div>

                            <div className="space-y-3">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? '🔄 Authenticating...' : '🚀 Complete Login'}
                                </button>
                                
                                <button
                                    type="button"
                                    onClick={resetLogin}
                                    className="w-full py-2 bg-gray-700 bg-opacity-50 text-gray-300 font-medium rounded-lg hover:bg-gray-600 hover:bg-opacity-50 transition-all duration-300"
                                >
                                    ← Back to Credentials
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

// Admin Dashboard Component
const AdminDashboard = ({ onLogout }) => {
    const [activeTab, setActiveTab] = useState('profile');
    const [data, setData] = useState({
        profile: {...profileData},
        skills: {...skillsData},
        certificates: [...certificatesData],
        projects: [...securityProjectsData],
        cloudTools: {...cloudToolsData},
        frameworks: [...securityFrameworksData]
    });

    // Save data to localStorage
    const saveData = () => {
        localStorage.setItem('portfolioData', JSON.stringify(data));
        alert('Data saved successfully!');
    };

    // Load data from localStorage
    useEffect(() => {
        const savedData = localStorage.getItem('portfolioData');
        if (savedData) {
            setData(JSON.parse(savedData));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('adminLoggedIn');
        onLogout(false);
    };

    const tabs = [
        { id: 'profile', label: '👤 Profile', icon: '👤' },
        { id: 'skills', label: '🛠️ Skills', icon: '🛠️' },
        { id: 'projects', label: '🔒 Projects', icon: '🔒' },
        { id: 'certificates', label: '🏆 Certificates', icon: '🏆' },
        { id: 'cloudtools', label: '☁️ Cloud Tools', icon: '☁️' },
        { id: 'frameworks', label: '📋 Frameworks', icon: '📋' },
        { id: 'feedbacks', label: '💬 Feedbacks', icon: '💬' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
            {/* Header */}
            <div className="bg-black bg-opacity-40 backdrop-blur-lg border-b border-purple-500 border-opacity-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <h1 className="text-2xl font-bold text-white glow-text">🔧 Portfolio Admin Dashboard</h1>
                        <div className="flex space-x-4">
                            <button
                                onClick={saveData}
                                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                            >
                                💾 Save Changes
                            </button>
                            <button
                                onClick={handleLogout}
                                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                            >
                                🚪 Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-black bg-opacity-40 backdrop-blur-lg rounded-lg p-6 border border-purple-500 border-opacity-30">
                            <h2 className="text-lg font-semibold text-white mb-4">📋 Sections</h2>
                            <nav className="space-y-2">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-300 ${
                                            activeTab === tab.id
                                                ? 'bg-purple-600 text-white'
                                                : 'text-gray-300 hover:bg-gray-700'
                                        }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <div className="bg-black bg-opacity-40 backdrop-blur-lg rounded-lg p-6 border border-purple-500 border-opacity-30">
                            {activeTab === 'profile' && <ProfileEditor data={data} setData={setData} />}
                            {activeTab === 'skills' && <SkillsEditor data={data} setData={setData} />}
                            {activeTab === 'projects' && <ProjectsEditor data={data} setData={setData} />}
                            {activeTab === 'certificates' && <CertificatesEditor data={data} setData={setData} />}
                            {activeTab === 'cloudtools' && <CloudToolsEditor data={data} setData={setData} />}
                            {activeTab === 'frameworks' && <FrameworksEditor data={data} setData={setData} />}
                            {activeTab === 'feedbacks' && <FeedbacksViewer />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Profile Editor Component
const ProfileEditor = ({ data, setData }) => {
    const handleChange = (field, value) => {
        setData(prev => ({
            ...prev,
            profile: { ...prev.profile, [field]: value }
        }));
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-white glow-text mb-6">👤 Edit Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                        type="text"
                        value={data.profile.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-purple-500 border-opacity-30 rounded-lg text-white"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Profession</label>
                    <input
                        type="text"
                        value={data.profile.profession}
                        onChange={(e) => handleChange('profession', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-purple-500 border-opacity-30 rounded-lg text-white"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                        type="email"
                        value={data.profile.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-purple-500 border-opacity-30 rounded-lg text-white"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                    <input
                        type="text"
                        value={data.profile.location}
                        onChange={(e) => handleChange('location', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-purple-500 border-opacity-30 rounded-lg text-white"
                    />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Bio</label>
                    <textarea
                        value={data.profile.bio}
                        onChange={(e) => handleChange('bio', e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-purple-500 border-opacity-30 rounded-lg text-white"
                    />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Profile Image URL</label>
                    <input
                        type="url"
                        value={data.profile.profileImage}
                        onChange={(e) => handleChange('profileImage', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-purple-500 border-opacity-30 rounded-lg text-white"
                        placeholder="Enter image URL or local path"
                    />
                </div>
            </div>
        </div>
    );
};

// Skills Editor Component
const SkillsEditor = ({ data, setData }) => {
    const [newSkill, setNewSkill] = useState({ category: 'completed', skill: '' });

    const addSkill = () => {
        if (newSkill.skill.trim()) {
            setData(prev => ({
                ...prev,
                skills: {
                    ...prev.skills,
                    [newSkill.category]: [...prev.skills[newSkill.category], newSkill.skill.trim()]
                }
            }));
            setNewSkill({ ...newSkill, skill: '' });
        }
    };

    const removeSkill = (category, index) => {
        setData(prev => ({
            ...prev,
            skills: {
                ...prev.skills,
                [category]: prev.skills[category].filter((_, i) => i !== index)
            }
        }));
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-white glow-text mb-6">🛠️ Edit Skills</h2>
            
            {/* Add New Skill */}
            <div className="mb-8 p-4 bg-gray-800 bg-opacity-50 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-4">➕ Add New Skill</h3>
                <div className="flex gap-4">
                    <select
                        value={newSkill.category}
                        onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
                        className="px-4 py-2 bg-gray-700 border border-purple-500 border-opacity-30 rounded-lg text-white"
                    >
                        <option value="completed">Completed</option>
                        <option value="ongoing">Ongoing</option>
                        <option value="future">Future</option>
                    </select>
                    <input
                        type="text"
                        value={newSkill.skill}
                        onChange={(e) => setNewSkill({ ...newSkill, skill: e.target.value })}
                        placeholder="Enter skill name"
                        className="flex-1 px-4 py-2 bg-gray-700 border border-purple-500 border-opacity-30 rounded-lg text-white"
                    />
                    <button
                        onClick={addSkill}
                        className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
                    >
                        Add
                    </button>
                </div>
            </div>

            {/* Skills Lists */}
            {Object.entries(data.skills).map(([category, skills]) => (
                <div key={category} className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3 capitalize">
                        {category === 'completed' ? '✅ Completed Skills' : 
                         category === 'ongoing' ? '📚 Ongoing Learning' : '🎯 Future Goals'}
                    </h3>
                    <div className="space-y-2">
                        {skills.map((skill, index) => (
                            <div key={index} className="flex justify-between items-center bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                                <span className="text-gray-300">{skill}</span>
                                <button
                                    onClick={() => removeSkill(category, index)}
                                    className="text-red-400 hover:text-red-300 transition-colors duration-300"
                                >
                                    🗑️ Delete
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

// Projects Editor Component
const ProjectsEditor = ({ data, setData }) => {
    const [editingProject, setEditingProject] = useState(null);
    const [newProject, setNewProject] = useState({
        id: Date.now(),
        title: '',
        description: '',
        category: '',
        status: 'Completed',
        technologies: [],
        github: '',
        demo: ''
    });

    const addProject = () => {
        if (newProject.title.trim()) {
            setData(prev => ({
                ...prev,
                projects: [...prev.projects, { ...newProject, id: Date.now() }]
            }));
            setNewProject({
                id: Date.now(),
                title: '',
                description: '',
                category: '',
                status: 'Completed',
                technologies: [],
                github: '',
                demo: ''
            });
        }
    };

    const removeProject = (id) => {
        setData(prev => ({
            ...prev,
            projects: prev.projects.filter(p => p.id !== id)
        }));
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-white glow-text mb-6">🔒 Edit Security Projects</h2>
            
            {/* Add New Project Form */}
            <div className="mb-8 p-6 bg-gray-800 bg-opacity-50 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-4">➕ Add New Project</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        value={newProject.title}
                        onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                        placeholder="Project Title"
                        className="px-4 py-2 bg-gray-700 border border-purple-500 border-opacity-30 rounded-lg text-white"
                    />
                    <input
                        type="text"
                        value={newProject.category}
                        onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                        placeholder="Category"
                        className="px-4 py-2 bg-gray-700 border border-purple-500 border-opacity-30 rounded-lg text-white"
                    />
                    <textarea
                        value={newProject.description}
                        onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                        placeholder="Project Description"
                        className="md:col-span-2 px-4 py-2 bg-gray-700 border border-purple-500 border-opacity-30 rounded-lg text-white"
                        rows={3}
                    />
                    <input
                        type="text"
                        value={newProject.technologies.join(', ')}
                        onChange={(e) => setNewProject({ ...newProject, technologies: e.target.value.split(', ').filter(t => t.trim()) })}
                        placeholder="Technologies (comma separated)"
                        className="px-4 py-2 bg-gray-700 border border-purple-500 border-opacity-30 rounded-lg text-white"
                    />
                    <select
                        value={newProject.status}
                        onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
                        className="px-4 py-2 bg-gray-700 border border-purple-500 border-opacity-30 rounded-lg text-white"
                    >
                        <option value="Completed">Completed</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Planning">Planning</option>
                    </select>
                    <input
                        type="url"
                        value={newProject.github}
                        onChange={(e) => setNewProject({ ...newProject, github: e.target.value })}
                        placeholder="GitHub URL"
                        className="px-4 py-2 bg-gray-700 border border-purple-500 border-opacity-30 rounded-lg text-white"
                    />
                    <input
                        type="url"
                        value={newProject.demo}
                        onChange={(e) => setNewProject({ ...newProject, demo: e.target.value })}
                        placeholder="Demo URL"
                        className="px-4 py-2 bg-gray-700 border border-purple-500 border-opacity-30 rounded-lg text-white"
                    />
                </div>
                <button
                    onClick={addProject}
                    className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
                >
                    Add Project
                </button>
            </div>

            {/* Projects List */}
            <div className="space-y-4">
                {data.projects.map((project) => (
                    <div key={project.id} className="bg-gray-800 bg-opacity-50 p-4 rounded-lg">
                        <div className="flex justify-between items-start">
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                                <p className="text-gray-300 text-sm mb-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="px-2 py-1 bg-purple-600 bg-opacity-50 rounded text-xs text-white">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-400">Status: {project.status}</p>
                            </div>
                            <button
                                onClick={() => removeProject(project.id)}
                                className="text-red-400 hover:text-red-300 transition-colors duration-300 ml-4"
                            >
                                🗑️ Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Certificates Editor Component
const CertificatesEditor = ({ data, setData }) => {
    const [certificates, setCertificates] = useState([]);
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [newCertificate, setNewCertificate] = useState({
        title: '',
        issuer: '',
        date: '',
        description: '',
        image: '',
        credentialId: '',
        verificationUrl: ''
    });

    useEffect(() => {
        const savedCertificates = localStorage.getItem('portfolioCertificates');
        if (savedCertificates) {
            setCertificates(JSON.parse(savedCertificates));
        } else {
            // Default certificates
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
            localStorage.setItem('portfolioCertificates', JSON.stringify(defaultCerts));
        }
    }, []);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setNewCertificate({...newCertificate, image: event.target.result});
            };
            reader.readAsDataURL(file);
        }
    };

    const saveCertificate = () => {
        if (!newCertificate.title || !newCertificate.issuer) {
            alert('Please fill in required fields (Title and Issuer)');
            return;
        }

        let updatedCertificates;
        if (editingId) {
            updatedCertificates = certificates.map(cert =>
                cert.id === editingId ? { ...newCertificate, id: editingId } : cert
            );
        } else {
            const newId = Math.max(...certificates.map(c => c.id), 0) + 1;
            updatedCertificates = [...certificates, { ...newCertificate, id: newId }];
        }

        setCertificates(updatedCertificates);
        localStorage.setItem('portfolioCertificates', JSON.stringify(updatedCertificates));
        resetForm();
    };

    const editCertificate = (cert) => {
        setNewCertificate(cert);
        setEditingId(cert.id);
        setIsAdding(true);
    };

    const deleteCertificate = (id) => {
        if (confirm('Are you sure you want to delete this certificate?')) {
            const updatedCertificates = certificates.filter(cert => cert.id !== id);
            setCertificates(updatedCertificates);
            localStorage.setItem('portfolioCertificates', JSON.stringify(updatedCertificates));
        }
    };

    const resetForm = () => {
        setNewCertificate({
            title: '',
            issuer: '',
            date: '',
            description: '',
            image: '',
            credentialId: '',
            verificationUrl: ''
        });
        setIsAdding(false);
        setEditingId(null);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white glow-text">🏆 Manage Certificates</h2>
                <button
                    onClick={() => setIsAdding(true)}
                    className="px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                    ➕ Upload Certificate
                </button>
            </div>

            {isAdding && (
                <div className="mb-8 p-6 bg-gray-800 bg-opacity-50 rounded-lg border border-purple-500 border-opacity-30">
                    <h3 className="text-xl font-semibold text-white mb-4">
                        {editingId ? '✏️ Edit Certificate' : '📤 Upload New Certificate'}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                📜 Certificate Title *
                            </label>
                            <input
                                type="text"
                                value={newCertificate.title}
                                onChange={(e) => setNewCertificate({...newCertificate, title: e.target.value})}
                                className="w-full px-3 py-2 bg-gray-700 border border-purple-500 border-opacity-30 rounded-lg text-white"
                                placeholder="e.g., CompTIA Security+"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                🏢 Issuing Organization *
                            </label>
                            <input
                                type="text"
                                value={newCertificate.issuer}
                                onChange={(e) => setNewCertificate({...newCertificate, issuer: e.target.value})}
                                className="w-full px-3 py-2 bg-gray-700 border border-purple-500 border-opacity-30 rounded-lg text-white"
                                placeholder="e.g., CompTIA, Cisco, Microsoft"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                📅 Date Obtained
                            </label>
                            <input
                                type="text"
                                value={newCertificate.date}
                                onChange={(e) => setNewCertificate({...newCertificate, date: e.target.value})}
                                className="w-full px-3 py-2 bg-gray-700 border border-purple-500 border-opacity-30 rounded-lg text-white"
                                placeholder="e.g., 2024, Jan 2024"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                🆔 Credential ID
                            </label>
                            <input
                                type="text"
                                value={newCertificate.credentialId}
                                onChange={(e) => setNewCertificate({...newCertificate, credentialId: e.target.value})}
                                className="w-full px-3 py-2 bg-gray-700 border border-purple-500 border-opacity-30 rounded-lg text-white"
                                placeholder="Certificate ID or Badge Number"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                📝 Description
                            </label>
                            <textarea
                                value={newCertificate.description}
                                onChange={(e) => setNewCertificate({...newCertificate, description: e.target.value})}
                                className="w-full px-3 py-2 bg-gray-700 border border-purple-500 border-opacity-30 rounded-lg text-white h-20"
                                placeholder="Brief description of the certification..."
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                🔗 Verification URL
                            </label>
                            <input
                                type="url"
                                value={newCertificate.verificationUrl}
                                onChange={(e) => setNewCertificate({...newCertificate, verificationUrl: e.target.value})}
                                className="w-full px-3 py-2 bg-gray-700 border border-purple-500 border-opacity-30 rounded-lg text-white"
                                placeholder="https://verify.example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                🖼️ Certificate Image
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="w-full px-3 py-2 bg-gray-700 border border-purple-500 border-opacity-30 rounded-lg text-white"
                            />
                            {newCertificate.image && (
                                <img
                                    src={newCertificate.image}
                                    alt="Certificate preview"
                                    className="mt-2 w-32 h-20 object-cover rounded border"
                                />
                            )}
                        </div>
                    </div>

                    <div className="flex space-x-3 mt-6">
                        <button
                            onClick={saveCertificate}
                            className="px-6 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
                        >
                            💾 {editingId ? 'Update' : 'Save'} Certificate
                        </button>
                        <button
                            onClick={resetForm}
                            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300"
                        >
                            ❌ Cancel
                        </button>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificates.map((cert) => (
                    <div key={cert.id} className="bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-purple-500 border-opacity-30">
                        {cert.image && (
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-32 object-cover rounded-lg mb-4"
                            />
                        )}
                        
                        <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
                        <p className="text-purple-300 mb-2">🏢 {cert.issuer}</p>
                        {cert.date && <p className="text-gray-400 mb-2">📅 {cert.date}</p>}
                        {cert.credentialId && <p className="text-gray-400 mb-2">🆔 {cert.credentialId}</p>}
                        {cert.description && <p className="text-gray-300 text-sm mb-4">{cert.description}</p>}
                        
                        <div className="flex space-x-2">
                            <button
                                onClick={() => editCertificate(cert)}
                                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
                            >
                                ✏️ Edit
                            </button>
                            <button
                                onClick={() => deleteCertificate(cert.id)}
                                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-300"
                            >
                                🗑️ Delete
                            </button>
                            {cert.verificationUrl && cert.verificationUrl !== '#' && (
                                <a
                                    href={cert.verificationUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors duration-300"
                                >
                                    🔗 Verify
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {certificates.length === 0 && (
                <div className="text-center py-12">
                    <span className="text-6xl mb-4 block">🏆</span>
                    <h3 className="text-xl text-white mb-2">No Certificates Added</h3>
                    <p className="text-gray-400">Click "Upload Certificate" to add your first certification.</p>
                </div>
            )}
        </div>
    );
};

// Cloud Tools Editor Component
const CloudToolsEditor = ({ data, setData }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-white glow-text mb-6">☁️ Edit Cloud Tools</h2>
            <p className="text-gray-300">Cloud tools editor functionality coming soon...</p>
        </div>
    );
};

// Frameworks Editor Component
const FrameworksEditor = ({ data, setData }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-white glow-text mb-6">📋 Edit Frameworks</h2>
            <p className="text-gray-300">Frameworks editor functionality coming soon...</p>
        </div>
    );
};

// Feedbacks Viewer Component
const FeedbacksViewer = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const savedFeedbacks = localStorage.getItem('portfolioFeedbacks');
        if (savedFeedbacks) {
            setFeedbacks(JSON.parse(savedFeedbacks));
        }
    }, []);

    const markAsRead = (id) => {
        const updatedFeedbacks = feedbacks.map(feedback =>
            feedback.id === id ? { ...feedback, status: 'read' } : feedback
        );
        setFeedbacks(updatedFeedbacks);
        localStorage.setItem('portfolioFeedbacks', JSON.stringify(updatedFeedbacks));
    };

    const deleteFeedback = (id) => {
        const updatedFeedbacks = feedbacks.filter(feedback => feedback.id !== id);
        setFeedbacks(updatedFeedbacks);
        localStorage.setItem('portfolioFeedbacks', JSON.stringify(updatedFeedbacks));
    };

    const filteredFeedbacks = feedbacks.filter(feedback => {
        if (filter === 'unread') return feedback.status === 'unread';
        if (filter === 'read') return feedback.status === 'read';
        return true;
    });

    const unreadCount = feedbacks.filter(f => f.status === 'unread').length;

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white glow-text">💬 Customer Feedbacks</h2>
                <div className="flex items-center space-x-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                        {unreadCount} Unread
                    </span>
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="px-3 py-2 bg-gray-700 border border-purple-500 border-opacity-30 rounded-lg text-white"
                    >
                        <option value="all">All Feedbacks</option>
                        <option value="unread">Unread Only</option>
                        <option value="read">Read Only</option>
                    </select>
                </div>
            </div>

            {filteredFeedbacks.length === 0 ? (
                <div className="text-center py-12">
                    <span className="text-6xl mb-4 block">📭</span>
                    <h3 className="text-xl text-white mb-2">No Feedbacks Found</h3>
                    <p className="text-gray-400">
                        {filter === 'all' ? 'No feedbacks have been submitted yet.' : 
                         filter === 'unread' ? 'All feedbacks have been read.' : 
                         'No read feedbacks found.'}
                    </p>
                </div>
            ) : (
                <div className="space-y-4">
                    {filteredFeedbacks.map((feedback) => (
                        <div
                            key={feedback.id}
                            className={`p-6 rounded-lg border transition-all duration-300 ${
                                feedback.status === 'unread'
                                    ? 'bg-blue-900 bg-opacity-30 border-blue-500 border-opacity-50'
                                    : 'bg-gray-800 bg-opacity-50 border-gray-600 border-opacity-30'
                            }`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-purple-600 bg-opacity-50 p-2 rounded-full">
                                        <span className="text-lg">👤</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white">{feedback.name}</h4>
                                        <p className="text-sm text-gray-400">
                                            📞 {feedback.contactNumber}
                                        </p>
                                    </div>
                                    {feedback.status === 'unread' && (
                                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                                            NEW
                                        </span>
                                    )}
                                </div>
                                <div className="flex space-x-2">
                                    {feedback.status === 'unread' && (
                                        <button
                                            onClick={() => markAsRead(feedback.id)}
                                            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                                            title="Mark as Read"
                                        >
                                            ✅
                                        </button>
                                    )}
                                    <button
                                        onClick={() => deleteFeedback(feedback.id)}
                                        className="text-red-400 hover:text-red-300 transition-colors duration-300"
                                        title="Delete Feedback"
                                    >
                                        🗑️
                                    </button>
                                </div>
                            </div>

                            <div className="mb-4">
                                <h5 className="text-sm font-medium text-gray-300 mb-2">📋 Message:</h5>
                                <p className="text-white bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                                    {feedback.note}
                                </p>
                            </div>

                            <div className="flex justify-between items-center text-sm text-gray-400">
                                <span>📅 {feedback.date} at {feedback.time}</span>
                                <div className="flex space-x-4">
                                    <a
                                        href={`tel:${feedback.contactNumber}`}
                                        className="text-green-400 hover:text-green-300 transition-colors duration-300"
                                    >
                                        📞 Call
                                    </a>
                                    <a
                                        href={`sms:${feedback.contactNumber}`}
                                        className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                                    >
                                        💬 SMS
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

// Main Admin App Component
const AdminApp = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loggedIn = localStorage.getItem('adminLoggedIn') === 'true';
        setIsLoggedIn(loggedIn);
    }, []);

    if (!isLoggedIn) {
        return <AdminLogin onLogin={setIsLoggedIn} />;
    }

    return <AdminDashboard onLogout={setIsLoggedIn} />;
};
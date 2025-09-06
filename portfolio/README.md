# Professional Portfolio Website

A modern, responsive portfolio website built with React.js and Tailwind CSS, featuring dark/light mode toggle, smooth animations, and interactive components.

## Features

### 🎨 **Modern Design**
- Clean, professional layout with glass-effect navigation
- Responsive design that works on all devices
- Smooth animations and hover effects
- Dark/light mode toggle with system preference detection

### 📱 **Sections Included**
1. **Profile Section** - Personal details, photo, and bio
2. **Skills Section** - Categorized skills (Completed, Ongoing, Future Learning)
3. **Certificates Section** - Professional certifications with links
4. **Contact Form** - Interactive contact form with validation
5. **Feedback Section** - Visitor feedback submission and display

### 🛠 **Technical Stack**
- **Frontend**: React.js (via CDN)
- **Styling**: Tailwind CSS
- **Icons**: SVG icons
- **Animations**: Custom CSS animations
- **State Management**: React hooks (useState, useEffect)

## Quick Start

### Option 1: Direct File Opening
1. Download all files to a local directory
2. Open `index.html` in your web browser
3. The website will load with all features working

### Option 2: Local Server (Recommended)
```bash
# If you have Python installed
python -m http.server 8000

# If you have Node.js installed
npx serve .

# If you have PHP installed
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## File Structure

```
portfolio/
├── index.html          # Main HTML file with CDN links
├── app.js             # Core components (Navigation, Profile, Skills, Certificates)
├── components.js      # Additional components (Contact, Feedback, Footer, App)
└── README.md          # This file
```

## Customization Guide

### 1. **Update Personal Information**
Edit the `profileData` object in `app.js`:
```javascript
const profileData = {
    name: "Your Name",
    profession: "Your Title",
    email: "your.email@example.com",
    location: "Your Location",
    bio: "Your bio description",
    profileImage: "path/to/your/image.jpg"
};
```

### 2. **Modify Skills**
Update the `skillsData` object in `app.js`:
```javascript
const skillsData = {
    completed: ["HTML", "CSS", "JavaScript", ...],
    ongoing: ["Node.js", "React", ...],
    future: ["Machine Learning", "AI", ...]
};
```

### 3. **Add Certificates**
Update the `certificatesData` array in `app.js`:
```javascript
const certificatesData = [
    {
        id: 1,
        title: "Certificate Name",
        organization: "Issuing Organization",
        date: "2024-01-15",
        link: "https://certificate-link.com"
    },
    // Add more certificates...
];
```

### 4. **Color Customization**
Modify the Tailwind config in `index.html`:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#3B82F6',    // Blue
                secondary: '#10B981',  // Green
                accent: '#8B5CF6'      // Purple
            }
        }
    }
}
```

## Features in Detail

### **Dark/Light Mode**
- Automatic system preference detection
- Manual toggle button in navigation
- Persistent theme storage in localStorage
- Smooth transitions between modes

### **Contact Form**
- Form validation
- Loading states during submission
- Success/error feedback
- Simulated form submission (easily replaceable with real backend)

### **Feedback System**
- Real-time feedback submission
- Local storage of feedback
- Anonymous feedback support
- Scrollable feedback history

### **Responsive Navigation**
- Sticky navigation bar
- Mobile hamburger menu
- Smooth scrolling to sections
- Active section highlighting

### **Animations**
- Fade-in effects on load
- Slide-up animations for sections
- Bounce-in effects for profile image
- Hover effects on interactive elements

## Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Performance Features

- **CDN-based libraries** for fast loading
- **Optimized images** with proper sizing
- **Minimal JavaScript** for quick execution
- **CSS animations** instead of JavaScript for better performance

## Future Enhancements

### Backend Integration Ready
The website is structured to easily integrate with a backend:

```javascript
// Example: Real contact form submission
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('/api/contact', formData);
        // Handle success
    } catch (error) {
        // Handle error
    }
};
```

### Suggested Backend Stack
- **Node.js + Express** for API
- **MongoDB** for data storage
- **Nodemailer** for email functionality
- **Vercel/Netlify** for deployment

## Deployment Options

### **Static Hosting (Current Setup)**
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront

### **With Backend**
- Heroku
- Railway
- DigitalOcean
- AWS EC2

## Accessibility Features

- ✅ Semantic HTML structure
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ High contrast ratios
- ✅ Responsive text sizing
- ✅ Alt text for images

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or customization help, please reach out through the contact form on the website or create an issue in the repository.

---

**Built with ❤️ using React.js and Tailwind CSS**
# 🎯 Microtask Website

<div align="center">
  <img src="https://img.shields.io/badge/Flask-2.3.3-green?style=for-the-badge&logo=flask" alt="Flask">
  <img src="https://img.shields.io/badge/Python-3.7+-blue?style=for-the-badge&logo=python" alt="Python">
  <img src="https://img.shields.io/badge/Excel-Database-orange?style=for-the-badge&logo=microsoft-excel" alt="Excel">
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License">
</div>

<div align="center">
  <h3>🚀 A modern, responsive task management platform with proof submission system</h3>
  <p><em>Built with Flask, featuring multi-image uploads, admin controls, and professional UI</em></p>
</div>

---

## ✨ Features

### 🎨 **User Experience**
- **🖼️ Multi-Image Proof Submission** - Upload 1-3 images as task completion proof
- **📱 Mobile-Responsive Design** - Works seamlessly on all devices
- **⚡ Real-time Validation** - Instant feedback on file uploads and form inputs
- **🎯 Intuitive Interface** - Clean, professional design with smooth animations

### 👨‍💼 **Admin Dashboard**
- **🔍 Full-Screen Image Viewer** - Professional image review with zoom capabilities
- **📊 Comprehensive Analytics** - Track task completion and submission statistics
- **✅ Advanced Review System** - Approve/reject submissions with custom feedback
- **🖼️ Gallery Modal** - Browse multiple proof images with navigation controls
- **📥 Download Functionality** - Save proof images for record keeping

### 🔒 **Security & Data Management**
- **🛡️ Secure File Uploads** - Comprehensive validation and sanitization
- **📊 Excel-Based Storage** - No complex database setup required
- **🔐 Environment Configuration** - Secure credential management
- **📱 User Data Collection** - Name, email, and mobile number validation

### 🎨 **Design System**
- **🌿 Custom Green Theme** - Professional color palette
- **💫 Smooth Animations** - Enhanced user interactions
- **📱 Responsive Layout** - Mobile-first design approach
- **🎭 Modern UI Components** - Professional cards, modals, and buttons

---

## 🚀 Quick Start

### Prerequisites
- Python 3.7 or higher
- pip package manager

### Installation

1. **Clone the repository**
git clone https://github.com/yourusername/microtask-website.git
cd microtask-website

text

2. **Create virtual environment**
Windows
python -m venv venv
venv\Scripts\activate

Mac/Linux
python3 -m venv venv
source venv/bin/activate

text

3. **Install dependencies**
pip install -r requirements.txt

text

4. **Setup environment variables**
cp .env.example .env

text

5. **Generate secure SECRET_KEY**
python -c "import secrets; print('SECRET_KEY=' + secrets.token_hex(32))"

text
Copy the output and paste it in your `.env` file

6. **Configure your settings**
Edit `.env` file with your secure values:
SECRET_KEY=your-generated-64-character-hex-string
ADMIN_USERNAME=your-admin-username
ADMIN_PASSWORD=your-secure-password

text

7. **Run the application**
python app.py

text

8. **Access the website**
- 🌐 **Main Site**: http://localhost:5000
- 👨‍💼 **Admin Panel**: http://localhost:5000/admin

---

## 📁 Project Structure

📁 Project Structure
<details> <summary><strong>📂 Core Application Files</strong></summary>
📄 app.py - Main Flask application with all routes and database functions

📋 requirements.txt - Python dependencies

🔧 .env.example - Environment variables template

📝 README.md - Project documentation

🚫 .gitignore - Git exclusion rules

</details> <details> <summary><strong>📂 templates/ - HTML Templates</strong></summary>
🏠 base.html - Base template with navigation

🏠 index.html - Home page with task listings

📝 task_detail.html - Task submission form (1-3 images)

🔐 admin_login.html - Admin authentication

👨💼 admin_dashboard.html - Admin statistics

📊 admin_tasks.html - Task management

📋 admin_submissions.html - Submission review with full-screen viewer

</details> <details> <summary><strong>📂 static/ - Static Assets</strong></summary>
🎨 css/ - Custom green theme stylesheets

⚡ js/ - Interactive JavaScript functionality

📁 uploads/ - User uploaded files (excluded from Git)

📸 tasks/ - Admin reference images

🖼️ submissions/ - User proof images

</details> <details> <summary><strong>📊 data/ - Excel Database</strong></summary>
📋 tasks.xlsx - Task storage with status tracking

📊 submissions.xlsx - User submissions with mobile numbers

Note: These files are excluded from Git for security

</details> ```

---

## 🎮 Usage Guide

### 👤 **For Users**

1. **Browse Tasks** - View available tasks on the home page
2. **Select Task** - Click on any task to see detailed requirements
3. **Submit Proof** - Fill in your details and upload 1-3 proof images
4. **Track Status** - Your submission will be reviewed by admins

### 👨‍💼 **For Admins**

1. **Login** - Access admin panel with secure credentials
2. **Create Tasks** - Add new tasks with reference images
3. **Review Submissions** - View and evaluate user submissions
4. **Full-Screen Review** - Click images for detailed examination
5. **Approve/Reject** - Make decisions with custom feedback

---

## 🛠️ Technology Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Backend** | Flask 2.3.3 | Web framework |
| **Database** | Excel (openpyxl) | Data storage |
| **Frontend** | HTML5, CSS3, JavaScript | User interface |
| **File Handling** | Werkzeug | Secure uploads |
| **Security** | python-dotenv | Environment management |
| **Styling** | Custom CSS | Professional design |

---

## 🎨 Design System

### Color Palette
Primary Green: #6B8E6B
Primary Light: #8BA88B
Primary Dark: #4A6B4A
Secondary: #F5F3F0
Accent: #E8E3DC
Success: #22C55E
Error: #EF4444
Warning: #F59E0B

text

### Key Features
- 🎨 **Modern Green Theme** - Professional and calming
- 📱 **Mobile-First Design** - Responsive across all devices
- 💫 **Smooth Animations** - Enhanced user experience
- 🎭 **Professional Components** - Cards, modals, and forms

---

## 🔒 Security Features

- ✅ **Environment-based Configuration** - No hardcoded secrets
- ✅ **Secure File Upload Validation** - Type and size restrictions
- ✅ **Admin Authentication** - Password hashing with Werkzeug
- ✅ **Data Protection** - Sensitive files excluded from version control
- ✅ **Input Validation** - Both client-side and server-side
- ✅ **CSRF Protection** - Secure form submissions

---

## 📸 Screenshots

### 🏠 Home Page
Clean, modern interface showing available tasks with completion statistics.

### 📝 Task Submission
Intuitive form with drag-and-drop file upload and real-time validation.

### 👨‍💼 Admin Dashboard
Comprehensive analytics and management tools for task oversight.

### 🖼️ Image Review System
Professional full-screen image viewer with download capabilities.

---

## 🚀 Deployment

### Environment Variables
Ensure these are set in production:
SECRET_KEY=your-production-secret-key
ADMIN_USERNAME=your-admin-username
ADMIN_PASSWORD=your-secure-password
DEBUG=False
HOST=0.0.0.0
PORT=5000

text

### Security Checklist
- [ ] Generate strong SECRET_KEY
- [ ] Use unique admin credentials
- [ ] Set DEBUG=False in production
- [ ] Configure proper file permissions
- [ ] Set up HTTPS in production

---

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit changes** (`git commit -m 'Add amazing feature'`)
4. **Push to branch** (`git push origin feature/amazing-feature`)
5. **Open Pull Request**

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Flask Community** - For the excellent web framework
- **OpenPyXL** - For Excel file handling capabilities
- **Contributors** - Thanks to everyone who helped improve this project

---

## 📞 Support

If you encounter any issues or have questions:

- 🐛 **Report bugs** by opening an issue
- 💡 **Request features** through GitHub discussions
- 📧 **Contact** for general inquiries

---

<div align="center">
  <h3>⭐ Star this repository if you found it helpful!</h3>
  <p><em>Made with ❤️ for the developer community</em></p>
</div>

---

## 🔄 Changelog

### v1.0.0 (Latest)
- ✨ Initial release
- 🎨 Multi-image proof submission system
- 👨‍💼 Complete admin dashboard
- 🖼️ Full-screen image review system
- 📱 Mobile-responsive design
- 🔒 Comprehensive security features
# 🎯 Microtask Website

<div align="center">
  <img src="https://img.shields.io/badge/Flask-2.3.3-green?style=for-the-badge&logo=flask" alt="Flask">
  <img src="https://img.shields.io/badge/Python-3.10+-blue?style=for-the-badge&logo=python" alt="Python">
  <img src="https://img.shields.io/badge/Excel-Database-orange?style=for-the-badge&logo=microsoft-excel" alt="Excel">
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License">
</div>

<div align="center">
  <h3>🚀 Modern, Responsive Microtask Platform with AI-Powered Proof System</h3>
  <p><em>Built with Flask – multi-image upload, admin controls, similarity detection, and rich UI</em></p>
</div>

---

## ✨ Features

### 🎨 **User Experience**

* **🖼️ Multi-Image Proof Submission**: Upload 1-3 images as task completion proof
* **📱 Mobile-Responsive Design**: Seamless experience across devices
* **⚡ Live Validation**: Real-time checks on uploads, form fields
* **🎯 Intuitive Interface**: Stylish, clean design and smooth transitions

### 👨‍💼 **Admin Dashboard**

* **🔍 Full-Screen Image Viewer**: Review submissions with zoom/navigation
* **📊 Comprehensive Analytics**: Track task and submission statistics
* **✅ Approval Workflow**: Approve/reject submissions with custom admin notes
* **🖼️ Gallery Modal**: Browse user images, zoom, and swipe navigation
* **📥 Download Proofs**: Save original images for offline records
* **📈 Similarity Scores**: See AI-computed similarity % for each submission

### 🤖 **AI-Powered Image Checking**

* **SSIM, Perceptual Hashing**: Free and accurate image similarity for auto-approval
* **Histogram & Feature Matching**: Multiple techniques, high precision
* **Auto-Approve**: Save admin time for highly similar submissions

### 🔒 **Security & Data Management**

* **🛡️ Secure File Uploads**: Validates type and size, sanitizes filenames
* **🔏 Admin Authentication**: Password hashing, strict session management
* **📊 Excel-Based Storage**: Using XLSX files, no database setup required
* **🔐 Secret Configs**: All sensitive data in `.env`
* **📱 User Data Collection**: Full name, email, mobile validation

### 🎨 **Design System**

* **🌿 Green Theme**: Professional color palette, soothing UI
* **💫 Friendly Animations**: Enhanced interactions
* **🎭 Modern Components**: Cards, modals, badges, alerts

---

## 🚀 Quick Start

### Prerequisites

* Python 3.10 or higher
* pip (Python package manager)

### Installation

Clone the repository

```bash
git clone https://github.com/yourusername/microtask-website.git
cd microtask-website
```

Create a virtual environment

```bash
python -m venv venv
```

On Windows

```bash
venv\Scripts\activate
```

On Mac/Linux

```bash
source venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Setup environment variables

```bash
cp .env.example .env
```

Generate a secure FLASK SECRET\_KEY

```bash
python -c "import secrets; print('SECRET_KEY=' + secrets.token_hex(32))"
```

Copy the result into your `.env` file. Edit `.env` (admin credentials, paths, etc.).

Run the application

```bash
python app.py
```

Access your site!

* 🌐 Main Site: [http://localhost:5000](http://localhost:5000)
* 👨💼 Admin Panel: [http://localhost:5000/admin](http://localhost:5000/admin)

---

## 📁 Project Structure

```
microtask-website/
├── app.py                 # Flask backend, all routes & business logic
├── requirements.txt       # Python dependencies
├── .env.example           # Example environment settings
├── README.md              # This file!
├── static/
│   ├── css/style.css      # Green theme
│   ├── js/main.js         # File upload, modals, validation
│   └── uploads/
│       ├── tasks/         # Reference images
│       └── submissions/   # User-uploaded proofs
├── templates/
│   ├── base.html
│   ├── index.html
│   ├── task_detail.html
│   ├── admin_login.html
│   ├── admin_dashboard.html
│   ├── admin_tasks.html
│   └── admin_submissions.html
├── data/
│   ├── tasks.xlsx         # Excel database: tasks
│   └── submissions.xlsx   # Excel database: submissions
└── .gitignore             # Don't commit uploads or data files
```

---

## 🎮 Usage Guide

### 👤 **For Users**

1. **Browse Tasks**: Find active opportunities
2. **Select Task**: View instructions, reference image
3. **Submit Proof**: Enter your details, upload up to 3 images
4. **Track Status**: Await approval/feedback from admin

### 👨‍💼 **For Admins**

1. **Login**: Secure access at `/admin`
2. **Create Tasks**: Add new tasks and reference images
3. **Review Submissions**: See all pending/completed proofs
4. **View Similarity**: See % similarity for each proof vs reference
5. **Approve/Reject**: Set status and feedback, user is notified

---

## 🛠️ Technology Stack

| Component     | Technology                                  | Use                                |
| ------------- | ------------------------------------------- | ---------------------------------- |
| Backend       | Flask (Python)                              | Web framework                      |
| Database      | openpyxl + Excel                            | XLSX storage for tasks/submissions |
| Frontend      | HTML, CSS, JS                               | UI and user experience             |
| File Handling | Werkzeug                                    | Secure uploads                     |
| Security      | python-dotenv                               | Configuration and secrets          |
| Styling       | Custom CSS                                  | Professional, green-themed UI      |
| Imaging       | OpenCV, scikit-image, PIL, ImageHash, NumPy | Image processing & similarity      |

---

## 🎨 Design System

**Color Palette**

* Primary Green: `#6B8E6B`

* Primary Light: `#8BA88B`

* Primary Dark: `#4A6B4A`

* Secondary: `#F5F3F0`

* Accent: `#E8E3DC`

* Success: `#22C55E`

* Error: `#EF4444`

* Warning: `#F59E0B`

* Responsive and mobile-first layouts

* Modern UI: Cards, modals, badges, buttons

* Smooth animations for transitions and feedback

---

## 🔒 Security Features

* **Environment-based configuration** – no hardcoded secrets
* **Password hashing** – never store raw passwords
* **File validation** – restrict type and size, sanitize names
* **CSRF protection** – secure forms
* **Input validation** – server and client side
* **Sensitive files** – excluded from version control

---

## 🧠 AI Similarity Detection

* **Structural Similarity Index (SSIM)**
* **Perceptual Hashing** (imagehash)
* **Histogram Comparison** (OpenCV)
* **ORB Feature Matching** (OpenCV)
* **Multi-method weighted scoring** – for best accuracy

**Thresholds**

* > 75% similarity: Auto-approve
* 50–75%: Manual review
* <50%: Likely unrelated

Similarity scores (percentages) are shown for every submission in the admin review page.

---

## 🚀 Deployment

### Environment Variables

Place in your `.env` file:

```env
SECRET_KEY=your-generated-hex-key
DEBUG=True
HOST=0.0.0.0
PORT=5000
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your-password
MAX_FILE_SIZE=5242880
UPLOAD_FOLDER_TASKS=static/uploads/tasks
UPLOAD_FOLDER_SUBMISSIONS=static/uploads/submissions
TASKS_DB_PATH=data/tasks.xlsx
SUBMISSIONS_DB_PATH=data/submissions.xlsx
```

**Security Checklist**

* Strong SECRET\_KEY
* Unique admin credentials
* DEBUG=False on production
* Proper file permissions
* HTTPS for public deployments

---

## 🤝 Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🙏 Acknowledgments

* Flask Community – web framework
* OpenPyXL – Excel file handling
* Contributors – thank you for improving this project!

---

## 📞 Support

If you encounter issues or have questions:

* 🐛 Open an Issue on GitHub
* 💡 Request features via Discussions
* 📧 [techknoxofficial@gmail.com](mailto:techknoxofficial@gmail.com)

---

<div align="center">
  <h3>⭐ Star this repository if you found it helpful!</h3>
  <p><em>Made with ❤️ for the developer community</em></p>
  <h3>Built by <b>TECH KNOX 🦇</b></h3>
</div>

---

## 🔄 Changelog

### v1.0.0 (Latest)

* ✨ Initial release
* 🎨 Multi-image proof submission system
* 👨‍💼 Complete admin dashboard
* 🖼️ Full-screen image review system
* 📱 Mobile-responsive design
* 🔒 Comprehensive security features

---

## ☎ Tech Knox – Technology Provider

* 🏢 **Company**: Tech Knox
* 📧 **Email**: [techknoxofficial@gmail.com](mailto:techknoxofficial@gmail.com)
* 🌐 **Website**: [techknox.com](https://techknox.com) (Coming soon!)
* 🛠️ **Services**: Custom software, web applications, digital solutions

---

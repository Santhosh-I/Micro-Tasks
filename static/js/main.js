// File upload preview
document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('proof_image');
    const filePreview = document.getElementById('filePreview');
    const fileUploadArea = document.getElementById('fileUploadArea');

    if (fileInput && filePreview) {
        fileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                // Check file size (5MB limit)
                if (file.size > 5 * 1024 * 1024) {
                    alert('File size must be less than 5MB');
                    fileInput.value = '';
                    return;
                }

                // Show preview
                const reader = new FileReader();
                reader.onload = function(e) {
                    filePreview.innerHTML = `
                        <img src="${e.target.result}" alt="Preview" style="max-width: 200px; max-height: 200px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                        <p style="margin-top: 10px; color: #666; font-size: 14px;">${file.name}</p>
                    `;
                };
                reader.readAsDataURL(file);

                // Update upload area styling
                if (fileUploadArea) {
                    fileUploadArea.style.borderColor = '#6B8E6B';
                    fileUploadArea.style.backgroundColor = '#f0f8f0';
                }
            }
        });

        // Drag and drop functionality
        if (fileUploadArea) {
            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                fileUploadArea.addEventListener(eventName, preventDefaults, false);
            });

            function preventDefaults(e) {
                e.preventDefault();
                e.stopPropagation();
            }

            ['dragenter', 'dragover'].forEach(eventName => {
                fileUploadArea.addEventListener(eventName, highlight, false);
            });

            ['dragleave', 'drop'].forEach(eventName => {
                fileUploadArea.addEventListener(eventName, unhighlight, false);
            });

            function highlight(e) {
                fileUploadArea.style.borderColor = '#6B8E6B';
                fileUploadArea.style.backgroundColor = '#f0f8f0';
            }

            function unhighlight(e) {
                fileUploadArea.style.borderColor = '#E5E5E5';
                fileUploadArea.style.backgroundColor = 'transparent';
            }

            fileUploadArea.addEventListener('drop', handleDrop, false);

            function handleDrop(e) {
                const dt = e.dataTransfer;
                const files = dt.files;
                
                if (files.length > 0) {
                    fileInput.files = files;
                    // Trigger change event
                    const event = new Event('change', { bubbles: true });
                    fileInput.dispatchEvent(event);
                }
            }
        }
    }

    // Form validation
    const submissionForm = document.getElementById('submissionForm');
    if (submissionForm) {
        submissionForm.addEventListener('submit', function(e) {
            const userName = document.getElementById('user_name').value.trim();
            const userEmail = document.getElementById('user_email').value.trim();
            const proofImage = document.getElementById('proof_image').files[0];

            if (!userName || !userEmail || !proofImage) {
                e.preventDefault();
                alert('Please fill in all required fields and upload a proof image.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(userEmail)) {
                e.preventDefault();
                alert('Please enter a valid email address.');
                return;
            }

            // Show loading state
            const submitBtn = submissionForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = 'Submitting...';
            }
        });
    }

    // Auto-hide alerts after 5 seconds
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        setTimeout(() => {
            alert.style.opacity = '0';
            setTimeout(() => {
                alert.remove();
            }, 300);
        }, 5000);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Image modal functions
function openImageModal(src) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    if (modal && modalImg) {
        modal.style.display = 'block';
        modalImg.src = src;
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.style.display = 'none';
        
        // Restore body scroll
        document.body.style.overflow = 'auto';
    }
}

// Table responsive helper
document.addEventListener('DOMContentLoaded', function() {
    const tables = document.querySelectorAll('.admin-table');
    tables.forEach(table => {
        // Add mobile-friendly table scrolling indicator
        const wrapper = table.parentElement;
        if (wrapper && wrapper.classList.contains('table-responsive')) {
            if (table.scrollWidth > wrapper.clientWidth) {
                wrapper.style.position = 'relative';
                wrapper.insertAdjacentHTML('afterbegin', '<div class="table-scroll-indicator">← Scroll to see more →</div>');
            }
        }
    });
});

// Task card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const taskCards = document.querySelectorAll('.task-card');
    taskCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-6px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Form field focus effects
document.addEventListener('DOMContentLoaded', function() {
    const formInputs = document.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
});

// TypeScript-style JavaScript

// Plans data
const plans = [
    { speed: "100 Mbps", price: "₹999", popular: false },
    { speed: "75 Mbps", price: "₹799", popular: false },
    { speed: "50 Mbps", price: "₹699", popular: true },
    { speed: "40 Mbps", price: "₹599", popular: false },
    { speed: "30 Mbps", price: "₹499", popular: false }
];

// FAQ data
const faqs = [
    {
        question: "Which internet service provider is best in Achampet for a new connection?",
        answer: "Ritu Broadband offers reliable high-speed internet with speeds up to 200 Mbps, affordable pricing starting at ₹499, and excellent customer service. We provide fiber-optic connectivity with Digital TV and OTT platforms included."
    },
    {
        question: "Which WiFi connection is best in Achampet for families?",
        answer: "For families, we recommend our 50 Mbps or higher plans which provide sufficient bandwidth for multiple devices, streaming, online gaming, and work from home requirements. These plans also include access to 29 OTT platforms including Netflix and 300+ Live TV channels."
    },
    {
        question: "Which plan is suitable for work from home in Achampet?",
        answer: "Our 50 Mbps and above plans are ideal for work from home as they offer reliable speeds, ensuring smooth video conferencing, file uploads, and uninterrupted connectivity throughout the day."
    },
    {
        question: "Is Ritu Broadband reliable in Achampet?",
        answer: "Yes, Ritu Broadband is highly reliable with fiber-optic connectivity, minimal downtime, and dedicated customer support. Contact us at 7702935830 or 8500168970 for any assistance."
    },
    {
        question: "What is the minimum bandwidth required for home internet in Achampet?",
        answer: "For basic browsing and streaming, 30 Mbps (₹499) is sufficient. For multiple users and devices, we recommend at least 50 Mbps. For heavy usage, gaming, and 4K streaming, 75 Mbps or higher is ideal."
    }
];

// Render plans
function renderPlans() {
    const plansGrid = document.getElementById('plansGrid');
    if (!plansGrid) return;

    plansGrid.innerHTML = plans.map(plan => `
                <div class="plan-card ${plan.popular ? 'popular' : ''}">
                    ${plan.popular ? '<div class="popular-badge">MOST POPULAR</div>' : ''}
                    <div class="plan-speed">${plan.speed}</div>
                    <p>at just</p>
                    <div class="plan-price">${plan.price}<sup>^</sup></div>
                    <button class="plan-btn" onclick="requestCallback('${plan.speed}')">REQUEST CALLBACK</button>
                </div>
            `).join('');
}

// Render FAQs
function renderFAQs() {
    const faqContainer = document.getElementById('faqContainer');
    if (!faqContainer) return;

    faqContainer.innerHTML = faqs.map((faq, index) => `
                <div class="faq-item">
                    <div class="faq-question" onclick="toggleFAQ(${index})">
                        <span>${faq.question}</span>
                        <span class="faq-icon" id="faq-icon-${index}">▼</span>
                    </div>
                    <div class="faq-answer" id="faq-answer-${index}">
                        <p>${faq.answer}</p>
                    </div>
                </div>
            `).join('');
}

// Toggle FAQ
function toggleFAQ(index) {
    const answer = document.getElementById(`faq-answer-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);

    if (!answer || !icon) return;

    const isActive = answer.classList.contains('active');

    // Close all FAQs
    document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.remove('active'));
    document.querySelectorAll('.faq-icon').forEach(ic => ic.classList.remove('active'));

    // Open clicked FAQ if it wasn't active
    if (!isActive) {
        answer.classList.add('active');
        icon.classList.add('active');
    }
}

// Request callback
function requestCallback(plan) {
    alert(`Thank you for your interest in the ${plan} plan! Our team will contact you shortly.`);
}

// Form submission
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name')?.value;
    const mobile = document.getElementById('mobile')?.value;
    const city = document.getElementById('city')?.value;
    const pincode = document.getElementById('pincode')?.value;

    if (name && mobile && city && pincode) {
        alert(`Thank you ${name}! We'll contact you at ${mobile} to set up your connection in ${city}.`);
        this.reset();
    }
});

// Add scroll animations
function addScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.plan-card, .advantage-card, .faq-item').forEach(el => {
        observer.observe(el);
    });
}

// Duplicate OTT logos for infinite scroll
function duplicateOTTLogos() {
    const logosContainer = document.querySelector('.ott-logos');
    if (logosContainer) {
        const logosContent = logosContainer.innerHTML;
        logosContainer.innerHTML = logosContent + logosContent;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderPlans();
    renderFAQs();
    duplicateOTTLogos();
    addScrollAnimations();
});
// Interactive elements for Battalu Landing Page

document.addEventListener('DOMContentLoaded', () => {

  // 1. Sticky Header scroll effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const burgerMenu = document.getElementById('burger-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function toggleMobileMenu() {
    burgerMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    document.body.classList.toggle('overflow-hidden');
  }

  if (burgerMenu) burgerMenu.addEventListener('click', toggleMobileMenu);
  if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', toggleMobileMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu.classList.contains('active')) toggleMobileMenu();
    });
  });

  // 3. FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const isActive = faqItem.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
      if (!isActive) faqItem.classList.add('active');
    });
  });

  // 4. Pricing Tab Switcher — handled by global switchPricingTab() below


  // 5. Booking Modal Interactive System
  const bookButtons = document.querySelectorAll('.book-now-trigger');
  const modal = document.getElementById('booking-modal');
  const modalClose = document.getElementById('modal-close');
  const modalOverlay = document.getElementById('modal-overlay');
  const bookingForm = document.getElementById('booking-form');
  const successState = document.getElementById('success-state');

  function openModal() {
    if (modal) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
      setTimeout(() => {
        if (bookingForm) { bookingForm.style.display = 'block'; bookingForm.reset(); }
        if (successState) { successState.style.display = 'none'; }
      }, 300);
    }
  }

  bookButtons.forEach(btn => {
    btn.addEventListener('click', (e) => { e.preventDefault(); openModal(); });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

  // Handle Form Submission
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = bookingForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span style="display:inline-block;animation:spin 1s linear infinite;margin-right:8px;">◌</span> Scheduling...';

      setTimeout(() => {
        bookingForm.style.display = 'none';
        successState.style.display = 'block';
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 1200);
    });
  }
});

// --- Global CSS Keyframe Injections ---
(function () {
  const injectStyle = (css) => {
    const s = document.createElement('style');
    s.innerHTML = css;
    document.head.appendChild(s);
  };

  injectStyle(`
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%       { transform: translateX(-6px); }
      40%       { transform: translateX(6px); }
      60%       { transform: translateX(-4px); }
      80%       { transform: translateX(4px); }
    }
  `);
})();

// --- Pincode "Schedule Pickup" Handler (global, called via inline onclick) ---
function handlePincodeSubmit(e) {
  e.preventDefault();
  const pincodeInput = document.getElementById('pincode-input');
  const pincode = pincodeInput ? pincodeInput.value.trim() : '';

  // Validate that the pincode is exactly a 6-digit number
  const isSixDigitNumber = /^\d{6}$/.test(pincode);

  if (!isSixDigitNumber) {
    // Shake the input row to signal invalid input
    const form = document.getElementById('pincode-form');
    if (form) {
      form.style.animation = 'shake 0.4s ease';
      setTimeout(() => { form.style.animation = ''; }, 400);
    }
    if (pincodeInput) pincodeInput.focus();
    return;
  }

  // Pre-fill address field in the booking modal
  const addressField = document.getElementById('book-address');
  if (addressField) {
    addressField.value = `Pincode: ${pincode}`;
  }

  // Open booking modal
  const modal = document.getElementById('booking-modal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

// --- Pricing Tab Switcher (global, called via inline onclick) ---
function switchPricingTab(tabKey, clickedBtn) {
  // Deactivate all tabs
  document.querySelectorAll('.pricing-tab').forEach(tab => {
    tab.classList.remove('active');
    tab.setAttribute('aria-selected', 'false');
  });

  // Activate clicked tab
  clickedBtn.classList.add('active');
  clickedBtn.setAttribute('aria-selected', 'true');

  // Hide all panels
  document.querySelectorAll('.pricing-panel').forEach(panel => {
    panel.classList.remove('active');
  });

  // Show target panel
  const targetPanel = document.getElementById('panel-' + tabKey);
  if (targetPanel) {
    targetPanel.classList.add('active');
  }
}

// ============================
// BATTALU — script.js
// ============================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Mobile menu toggle ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      menuToggle.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  /* ---------- Pincode availability checker ---------- */
  const pincodeForm = document.getElementById('pincodeForm');
  const pincodeInput = document.getElementById('pincodeInput');
  const pincodeResult = document.getElementById('pincodeResult');

  // Actual list of serviceable Vizag pincodes based on application
  const servicePincodes = [
    '530041', '530045', '530048'
  ];

  if (pincodeForm) {
    pincodeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const value = pincodeInput.value.trim();

      if (!/^\d{6}$/.test(value)) {
        pincodeResult.textContent = 'Please enter a valid 6-digit pincode.';
        pincodeResult.className = 'pincode-result fail';
        return;
      }

      if (servicePincodes.includes(value)) {
        pincodeResult.textContent = `Great news! Battalu delivers to ${value}. Schedule your first pickup now.`;
        pincodeResult.className = 'pincode-result success';
      } else {
        pincodeResult.textContent = `We're not in ${value} just yet — but we're expanding fast. Stay tuned!`;
        pincodeResult.className = 'pincode-result fail';
      }
    });
  }

  /* ---------- Header shadow on scroll ---------- */
  const header = document.getElementById('header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 10) {
      header.style.boxShadow = '0 4px 20px rgba(15, 81, 50, 0.08)';
    } else {
      header.style.boxShadow = 'none';
    }
    lastScroll = currentScroll;
  });

  /* ---------- Scroll-reveal animation ---------- */
  const revealEls = document.querySelectorAll(
    '.step-card, .service-card, .section-head, .hero-content, .hero-visual'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Apply visible state once intersecting
  const styleTag = document.createElement('style');
  styleTag.textContent = `.in-view { opacity: 1 !important; transform: translateY(0) !important; }`;
  document.head.appendChild(styleTag);


  /* ---------- Services Interactive Tabs ---------- */
  const serviceTabs = document.querySelectorAll('.service-tab');
  const servicePanels = document.querySelectorAll('.service-panel');

  if (serviceTabs.length > 0 && servicePanels.length > 0) {
    serviceTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active class from all tabs and panels
        serviceTabs.forEach(t => t.classList.remove('active'));
        servicePanels.forEach(p => p.classList.remove('active'));

        // Add active class to clicked tab
        tab.classList.add('active');

        // Find and activate the corresponding panel
        const targetId = tab.getAttribute('data-target');
        const targetPanel = document.getElementById(targetId);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      });
    });
  }
});


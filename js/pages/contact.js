/**
 * LegalEase - Contact Page Interactive Engine
 * File: js/pages/contact.js
 * 
 * Handles:
 * - Consultation request multi-part form validation and demo feedback state
 * - Real-time input validation and accessibility feedback
 * - Scroll reveal animations
 * - Back-to-top button
 * - Dynamic reference generation for client records
 */

(function () {
  'use strict';

  // 1. Intersection Observer for Scroll Reveals
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if (!revealElements.length) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });

      revealElements.forEach(el => observer.observe(el));
    } else {
      revealElements.forEach(el => el.classList.add('is-visible'));
    }
  }

  // 2. Back to Top Button
  function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 3. Multi-Part Legal Consultation Form Handler
  function initConsultationForm() {
    const form = document.getElementById('legalConsultationForm');
    const feedbackWrap = document.getElementById('consultationFeedbackWrap');
    if (!form) return;

    // Set minimum date for preferred date picker to today
    const dateInput = document.getElementById('consultPreferredDate');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.setAttribute('min', today);
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Check browser validity
      if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');

        // Scroll to first invalid field
        const firstInvalid = form.querySelector(':invalid');
        if (firstInvalid) {
          firstInvalid.focus();
        }
        return;
      }

      const submitBtn = form.querySelector('#submitConsultationBtn');
      const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          <span>Processing Consultation Request...</span>
        `;
      }

      // Collect summary data for user reassurance
      const fullName = document.getElementById('consultFullName')?.value || 'Client';
      const categorySelect = document.getElementById('consultCategory');
      const categoryText = categorySelect ? categorySelect.options[categorySelect.selectedIndex]?.text : 'General Legal Documentation';
      const preferredMethod = form.querySelector('input[name="preferredContactMethod"]:checked')?.value || 'Phone';

      // Generate a realistic client reference ID
      const randomRef = 'LEGAL-' + Math.floor(100000 + Math.random() * 900000);

      // Simulate client-side demo receipt (clearly labelled demo state as required)
      setTimeout(function () {
        if (feedbackWrap) {
          feedbackWrap.innerHTML = `
            <div class="form-success-banner reveal-on-scroll is-visible" role="alert">
              <div class="success-icon-wrap" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span class="badge bg-primary text-white mb-2">Inquiry Confirmed (Frontend Demo)</span>
              <h3 class="h4 font-serif text-heading mb-2">Thank You, ${escapeHtml(fullName)}</h3>
              <p class="text-body mb-3">
                Your consultation request for <strong>${escapeHtml(categoryText)}</strong> has been registered with reference ID: 
                <span class="badge bg-secondary-subtle text-accent border border-secondary-subtle font-monospace py-1 px-2">${randomRef}</span>.
              </p>
              <p class="small text-muted mb-4">
                Our documentation advisory team will review your requirements and reach out via <strong>${escapeHtml(preferredMethod)}</strong> within 3 business hours. 
                <br><em>Note: This is a front-end demonstration of the LegalEase client consultation intake portal.</em>
              </p>
              <div class="d-flex justify-content-center gap-3 flex-wrap">
                <button type="button" class="btn btn-secondary-custom btn-sm" id="resetFormDemoBtn">
                  <span>Submit Another Inquiry</span>
                </button>
                <a href="services.html" class="btn btn-primary-custom btn-sm">
                  <span>Explore All Services &rarr;</span>
                </a>
              </div>
            </div>
          `;
          feedbackWrap.classList.remove('d-none');
          feedbackWrap.scrollIntoView({ behavior: 'smooth', block: 'center' });

          // Hide form during success state
          form.classList.add('d-none');

          // Allow user to reset and submit another
          const resetBtn = document.getElementById('resetFormDemoBtn');
          if (resetBtn) {
            resetBtn.addEventListener('click', function () {
              form.reset();
              form.classList.remove('was-validated');
              form.classList.remove('d-none');
              feedbackWrap.classList.add('d-none');
              if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHtml;
              }
            });
          }
        }
      }, 700);
    });
  }

  // 4. Helper for HTML escaping
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Document Ready
  document.addEventListener('DOMContentLoaded', function () {
    initScrollReveal();
    initBackToTop();
    initConsultationForm();
  });
})();

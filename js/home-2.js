/**
 * LegalEase - Home Page 2 JavaScript (js/home-2.js)
 * Specific interactive handlers for Home Page 2 (Niche-Specific Landing Page)
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // Scroll Reveal Observer
  // --------------------------------------------------------------------------
  function initScrollReveals() {
    const reveals = document.querySelectorAll('.reveal-on-scroll');
    if (!reveals.length) return;

    if (!('IntersectionObserver' in window)) {
      reveals.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  }

  // --------------------------------------------------------------------------
  // Back to Top Button
  // --------------------------------------------------------------------------
  function initBackToTop() {
    const btn = document.getElementById('backToTopBtn');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --------------------------------------------------------------------------
  // Consultation Form Handler (Modal)
  // --------------------------------------------------------------------------
  function initConsultationForm() {
    const form = document.getElementById('consultationForm');
    const feedbackBox = document.getElementById('formFeedback');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
      }

      form.classList.add('was-validated');

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Submitting Request...</span>';
      }

      setTimeout(() => {
        if (feedbackBox) {
          feedbackBox.classList.remove('d-none');
          feedbackBox.className = 'alert alert-success mt-3 py-2 small';
          feedbackBox.textContent = 'Your consultation request has been submitted. A LegalEase specialist will contact you shortly.';
        }

        form.reset();
        form.classList.remove('was-validated');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }

        setTimeout(() => {
          const modalElem = document.getElementById('consultationModal');
          if (modalElem && window.bootstrap) {
            const modalInstance = bootstrap.Modal.getInstance(modalElem);
            if (modalInstance) {
              modalInstance.hide();
              if (feedbackBox) feedbackBox.classList.add('d-none');
            }
          }
        }, 2800);
      }, 700);
    });
  }

  // --------------------------------------------------------------------------
  // DOM Ready
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initScrollReveals();
    initBackToTop();
    initConsultationForm();
  });
})();


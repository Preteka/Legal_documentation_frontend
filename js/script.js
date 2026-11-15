/**
 * LegalEase - Homepage Interactions & Behaviors (js/script.js)
 * Handles:
 * - Hero 4-service circular switcher with dynamic content update
 * - Statistics counter animation with IntersectionObserver
 * - Scroll-triggered section reveals
 * - Consultation request form handler
 * - Back to top floating button
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Hero Service Pill Interactive Switcher
  // --------------------------------------------------------------------------
  const serviceData = {
    'doc': {
      title: 'Legal Documentation Assistance',
      desc: 'Expert structuring and drafting assistance for standard agreements, affidavits, notices, and procedural declarations.',
      list: [
        'Rental & Lease Agreements',
        'General & Specific Affidavits',
        'Legal Notice Drafting Support',
        'Declaration & Indemnity Deeds'
      ]
    },
    'family': {
      title: 'Family Documentation Guidance',
      desc: 'Sensitive, organized document preparation support for family settlements, name change declarations, and succession paperwork.',
      list: [
        'Name Change Affidavits',
        'Family Settlement Frameworks',
        'Will & Testament Formatting',
        'Succession Certificate Documents'
      ]
    },
    'business': {
      title: 'Corporate & Business Setup',
      desc: 'Guiding entrepreneurs and growing businesses through company incorporation filings, vendor contracts, and compliance paperwork.',
      list: [
        'Commercial Lease Agreements',
        'Non-Disclosure Agreements (NDA)',
        'Partnership & Founder Deeds',
        'Vendor Service Level Agreements'
      ]
    },
    'property': {
      title: 'Property & Real Estate Papers',
      desc: 'Accurate and structured assistance with residential and commercial lease deeds, title search paperwork, and possession letters.',
      list: [
        'Residential Tenancy Contracts',
        'Sale Agreement Documentation',
        'Property Possession Letters',
        'Gift Deed & Transfer Formats'
      ]
    }
  };

  function initHeroIntroAnimation() {
    var backdrop    = document.getElementById('heroCinematicBackdrop');
    var motionWrap  = document.getElementById('statueMotionWrap');
    var statueImg   = document.getElementById('heroStatueImg');
    var heroCard    = document.querySelector('.hero-main-card');
    var textContent = document.getElementById('heroTextContent');
    var geoDecor    = document.getElementById('heroStatueGeo');

    if (!motionWrap || !statueImg) return;

    // Respect prefers-reduced-motion: show final state immediately
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      if (backdrop) backdrop.style.display = 'none';
      if (geoDecor) geoDecor.classList.add('geo-visible');
      if (statueImg) statueImg.classList.add('statue-floating');
      return;
    }

    function runAnimation() {
      // Ensure page starts at top for accurate coordinate calculation
      window.scrollTo(0, 0);

      // Mark intro as active on body (locks scroll, keeps hero card transparent)
      document.body.classList.add('hero-intro-active');

      // Measure the exact in-flow bounding box of the statue motion wrap
      var rect = motionWrap.getBoundingClientRect();
      var trackCenterX = rect.left + rect.width / 2;
      var trackCenterY = rect.top + rect.height / 2;

      var viewportCenterX = window.innerWidth / 2;
      var viewportCenterY = window.innerHeight / 2;

      // Delta to position the single image at the exact center of the viewport
      var deltaX = Math.round(viewportCenterX - trackCenterX);
      var deltaY = Math.round(viewportCenterY - trackCenterY);

      // Initial prominent scale (~72% of viewport height, max 1.65x)
      var targetHeight = Math.min(window.innerHeight * 0.72, 620);
      var initialScale = Math.max(1.28, Math.min(1.65, +(targetHeight / (rect.height || 500)).toFixed(3)));

      // ── STAGE 1: Centered entrance & Extended Hold (0.0s – 3.6s) ──
      // Place the single image element directly at the viewport center with initial scale
      motionWrap.style.transition = 'none';
      motionWrap.style.opacity = '0';
      motionWrap.style.transform = 'translate3d(' + deltaX + 'px, ' + deltaY + 'px, 0) scale(' + initialScale + ')';

      // Force layout reflow so initial transform is immediately applied
      void motionWrap.offsetHeight;

      // Smoothly fade in the centered statue (0.8s duration)
      requestAnimationFrame(function () {
        motionWrap.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        motionWrap.style.opacity = '1';
      });

      // ── FULL-SCREEN IMAGE HOLD (2.8 seconds after full appearance) ──
      // The statue remains prominently centered on the dark navy background until 3.6s.

      // ── STAGE 2: Continuous scale and movement (3.6s – 5.9s, ~2.3s duration) ──
      // Gradually reduces size while simultaneously moving towards the right-side Hero position
      setTimeout(function () {
        // One smooth, continuous transition for both scale and position
        motionWrap.style.transition = 'transform 2.3s cubic-bezier(0.22, 1, 0.36, 1)';
        motionWrap.style.transform = 'translate3d(0, 0, 0) scale(1)';

        // Fade out dark navy backdrop & reveal off-white hero card
        if (backdrop) backdrop.style.opacity = '0';
        if (heroCard) heroCard.classList.add('hero-card-visible');
      }, 3600);

      // ── TEXT REVEAL: Staggered reveal while image is traveling (4.4s) ──
      setTimeout(function () {
        if (textContent) textContent.classList.add('hero-text-visible');
      }, 4400);

      // ── STAGE 3: Final Hero Position reached & settled (5.95s) ──
      setTimeout(function () {
        // Reveal subtle geometric gold decorations around the statue
        if (geoDecor) geoDecor.classList.add('geo-visible');

        // Clean up backdrop & body intro lock
        if (backdrop) backdrop.style.display = 'none';
        document.body.classList.remove('hero-intro-active');

        // Transition complete: clean up inline transform to pure in-flow styling
        motionWrap.style.transition = '';
        motionWrap.style.transform = '';
      }, 5950);

      // ── Subtle idle floating starts after settling (6.45s) ──
      setTimeout(function () {
        if (statueImg) statueImg.classList.add('statue-floating');
      }, 6450);
    }

    // Run when layout is ready
    if (statueImg.complete) {
      runAnimation();
    } else {
      statueImg.addEventListener('load', runAnimation, { once: true });
    }
  }

  function initHeroServiceSwitcher() {
    const pillButtons = document.querySelectorAll('.service-pill-btn');
    const titleElem = document.getElementById('heroFeaturedTitle');
    const descElem = document.getElementById('heroFeaturedDesc');
    const listContainer = document.getElementById('heroServiceList');

    if (!pillButtons.length || !titleElem || !descElem || !listContainer) return;

    pillButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        const key = this.getAttribute('data-service-key');
        if (!serviceData[key]) return;

        // Toggle active button state
        pillButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        // Smooth fade out and update
        const card = document.getElementById('heroFeaturedCard');
        if (card) {
          card.style.opacity = '0.4';
          card.style.transform = 'translateY(4px)';

          setTimeout(() => {
            const data = serviceData[key];
            titleElem.textContent = data.title;
            descElem.textContent = data.desc;

            // Update compact list items
            listContainer.innerHTML = data.list.map(item => `
              <li class="compact-service-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
                <span>${item}</span>
              </li>
            `).join('');

            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 150);
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 2. Statistics Counter Animation (Runs Once When In View)
  // --------------------------------------------------------------------------
  function initStatsCounters() {
    const statCounters = document.querySelectorAll('.stat-counter');
    if (!statCounters.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elem = entry.target;
          const targetNum = parseInt(elem.getAttribute('data-count-target'), 10);
          const suffix = elem.getAttribute('data-suffix') || '';
          const prefix = elem.getAttribute('data-prefix') || '';
          const duration = 1800; // ms
          const startTimestamp = performance.now();

          const updateCount = (currentTimestamp) => {
            const elapsed = currentTimestamp - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad
            const easeProgress = 1 - (1 - progress) * (1 - progress);
            const currentVal = Math.floor(easeProgress * targetNum);

            elem.textContent = `${prefix}${currentVal.toLocaleString()}${suffix}`;

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              elem.textContent = `${prefix}${targetNum.toLocaleString()}${suffix}`;
            }
          };

          requestAnimationFrame(updateCount);
          obs.unobserve(elem);
        }
      });
    }, { threshold: 0.3 });

    statCounters.forEach(counter => observer.observe(counter));
  }

  // --------------------------------------------------------------------------
  // 3. Scroll Reveal Animations (IntersectionObserver)
  // --------------------------------------------------------------------------
  function initScrollReveals() {
    const reveals = document.querySelectorAll('.reveal-on-scroll');
    if (!reveals.length) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      reveals.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.15
    });

    reveals.forEach(el => revealObserver.observe(el));
  }

  // --------------------------------------------------------------------------
  // 4. Back to Top Button
  // --------------------------------------------------------------------------
  function initBackToTop() {
    const backBtn = document.getElementById('backToTopBtn');
    if (!backBtn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backBtn.classList.add('is-active');
      } else {
        backBtn.classList.remove('is-active');
      }
    }, { passive: true });

    backBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // 5. Consultation Modal Form Handling
  // --------------------------------------------------------------------------
  function initConsultationForm() {
    const form = document.getElementById('consultationForm');
    const feedbackBox = document.getElementById('consultationFeedback');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('consultName').value.trim();
      const phone = document.getElementById('consultPhone').value.trim();
      const service = document.getElementById('consultService').value;

      if (!name || !phone || !service) {
        if (feedbackBox) {
          feedbackBox.className = 'alert alert-warning mt-3';
          feedbackBox.textContent = 'Please fill out all required fields.';
          feedbackBox.classList.remove('d-none');
        }
        return;
      }

      // Simulate submission success
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Submitting...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();

        if (feedbackBox) {
          feedbackBox.className = 'alert alert-success mt-3';
          feedbackBox.innerHTML = `
            <strong>Thank you, ${name}!</strong> Your consultation request has been received. Our legal documentation specialist will connect with you shortly.
          `;
          feedbackBox.classList.remove('d-none');
        }

        setTimeout(() => {
          if (window.bootstrap) {
            const modalElem = document.getElementById('consultationModal');
            const modalInstance = bootstrap.Modal.getInstance(modalElem);
            if (modalInstance) {
              modalInstance.hide();
              if (feedbackBox) feedbackBox.classList.add('d-none');
            }
          }
        }, 3000);
      }, 900);
    });
  }

  // --------------------------------------------------------------------------
  // DOM Ready
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initHeroIntroAnimation();
    initStatsCounters();
    initScrollReveals();
    initBackToTop();
    initConsultationForm();
  });
})();


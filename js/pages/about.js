/**
 * LegalEase - About Us Page Interactive Scripts
 * File: js/pages/about.js
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
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      });

      revealElements.forEach(el => observer.observe(el));
    } else {
      // Fallback for older browsers
      revealElements.forEach(el => el.classList.add('is-visible'));
    }
  }

  // 2. Interactive Journey Book
  function initJourneyBook() {
    const book = document.querySelector('[data-journey-book]');
    if (!book) return;

    const cover = book.querySelector('.journey-book-cover');
    const spread = book.querySelector('.journey-open-spread');
    const prompt = book.querySelector('[data-book-prompt]');
    const controls = book.querySelector('[data-book-controls]');
    const previousButton = book.querySelector('[data-previous-page]');
    const nextButton = book.querySelector('[data-next-page]');
    const closeButton = book.querySelector('[data-close-book]');
    const readAgainButton = book.querySelector('[data-read-again]');
    const pageNextButton = book.querySelector('[data-page-next]');
    const pageTurn = book.querySelector('[data-page-turn]');
    const rightPage = book.querySelector('.journey-book-page-right');
    const pageStatus = book.querySelector('[data-page-status]');
    const pageKicker = book.querySelector('[data-page-kicker]');
    const pageTitle = book.querySelector('[data-page-title]');
    const pageDescription = book.querySelector('[data-page-description]');
    const leftLabel = book.querySelector('[data-left-label]');
    const leftFolio = book.querySelector('[data-left-folio]');
    const rightFolio = book.querySelector('[data-right-folio]');
    const coverChapter = book.querySelector('[data-cover-chapter]');
    const coverFolio = book.querySelector('[data-cover-folio]');
    const flipFront = {
      kicker: book.querySelector('[data-turn-front-kicker]'),
      title: book.querySelector('[data-turn-front-title]'),
      description: book.querySelector('[data-turn-front-description]')
    };
    const flipBack = {
      kicker: book.querySelector('[data-turn-back-kicker]'),
      title: book.querySelector('[data-turn-back-title]'),
      description: book.querySelector('[data-turn-back-description]')
    };

    const milestones = [
      {
        kicker: 'PAGE 01 / OUR JOURNEY',
        title: 'The Idea',
        description: 'Recognising the widespread need for simpler, more approachable documentation assistance for everyday legal agreements and personal affidavits.',
        chapter: 'CHAPTER 01',
        folio: '01'
      },
      {
        kicker: 'PAGE 02 / OUR JOURNEY',
        title: 'The Beginning',
        description: 'Establishing a dedicated, client-focused documentation support framework with standardized drafting guidelines and verified document checklists.',
        chapter: 'CHAPTER 02',
        folio: '02'
      },
      {
        kicker: 'PAGE 03 / OUR JOURNEY',
        title: 'Expanding Support',
        description: 'Covering a wider range of documentation requirements, including commercial lease agreements, business incorporation paperwork, and legal notice drafting.',
        chapter: 'CHAPTER 03',
        folio: '03'
      },
      {
        kicker: 'PAGE 04 / OUR JOURNEY',
        title: 'Looking Ahead',
        description: 'Continuing to refine consultation accessibility, digital review tools, and reliable documentation workflows for clients across diverse sectors.',
        chapter: 'CHAPTER 04',
        folio: '04'
      },
      {
        kicker: 'CLOSING NOTE / OUR JOURNEY',
        title: 'Our Journey Continues',
        description: 'Every document we help simplify represents another step towards making legal documentation clearer, more accessible and more confident for everyone.',
        chapter: 'CLOSING NOTE',
        folio: '05',
        isFinal: true
      }
    ];

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let currentIndex = 0;
    let phase = 'closed';

    function updateControls() {
      const currentPage = milestones[currentIndex];
      const isFinal = currentPage.isFinal === true;

      previousButton.disabled = currentIndex === 0 || phase !== 'open';
      nextButton.disabled = isFinal || phase !== 'open';
      pageNextButton.disabled = isFinal || phase !== 'open';
      closeButton.disabled = phase !== 'open';
      readAgainButton.disabled = phase !== 'open';
      pageNextButton.hidden = isFinal;
      pageStatus.textContent = isFinal
        ? 'Closing Note'
        : 'Page ' + currentPage.folio + ' of 04';
      controls.hidden = phase === 'closed';
    }

    function renderPage(index, updateChapterDetail) {
      const page = milestones[index];
      const isFinal = page.isFinal === true;

      pageKicker.textContent = page.kicker;
      pageTitle.textContent = page.title;
      pageDescription.textContent = page.description;
      rightFolio.textContent = page.folio;
      if (updateChapterDetail !== false) {
        leftLabel.textContent = page.chapter;
        leftFolio.textContent = page.folio;
        coverChapter.textContent = page.chapter;
        coverFolio.textContent = page.folio;
      }
      rightPage.classList.toggle('is-ending', isFinal);
      readAgainButton.hidden = !isFinal;
    }

    function renderTurnFace(face, page) {
      face.kicker.textContent = page.kicker;
      face.title.textContent = page.title;
      face.description.textContent = page.description;
    }

    function waitForTransition(element, duration, callback) {
      if (reducedMotion) {
        callback();
        return;
      }

      let completed = false;
      const finish = () => {
        if (completed) return;
        completed = true;
        window.clearTimeout(timeoutId);
        element.removeEventListener('transitionend', onTransitionEnd);
        callback();
      };
      const onTransitionEnd = event => {
        if (event.target === element && event.propertyName === 'transform') {
          finish();
        }
      };
      const timeoutId = window.setTimeout(finish, duration);

      element.addEventListener('transitionend', onTransitionEnd);
    }

    function openBook() {
      if (phase !== 'closed') return;

      const returnFocus = cover.matches(':focus');
      phase = 'opening';
      currentIndex = 0;
      renderPage(currentIndex);
      cover.disabled = true;
      cover.setAttribute('aria-expanded', 'true');
      spread.hidden = false;
      spread.inert = false;
      spread.setAttribute('aria-hidden', 'false');
      prompt.hidden = true;
      controls.hidden = false;
      book.dataset.state = 'opening';
      updateControls();

      void spread.offsetWidth;
      window.requestAnimationFrame(() => {
        book.dataset.state = 'open';
        waitForTransition(cover, 1200, () => {
          phase = 'open';
          updateControls();
          if (returnFocus) nextButton.focus();
        });
      });
    }

    function closeBook() {
      if (phase !== 'open') return;

      phase = 'closing';
      currentIndex = 0;
      renderPage(currentIndex);
      updateControls();
      cover.disabled = true;
      spread.setAttribute('aria-hidden', 'true');
      spread.inert = true;
      book.dataset.state = 'closing';

      waitForTransition(cover, 1200, () => {
        phase = 'closed';
        book.dataset.state = 'closed';
        spread.hidden = true;
        prompt.hidden = false;
        cover.disabled = false;
        cover.setAttribute('aria-expanded', 'false');
        updateControls();
        cover.focus();
      });
    }

    function turnPage(direction) {
      if (phase !== 'open') return;

      const nextIndex = currentIndex + direction;
      if (nextIndex < 0 || nextIndex >= milestones.length) return;

      const focusedNext = document.activeElement === nextButton || document.activeElement === pageNextButton;
      const focusedPrevious = document.activeElement === previousButton;
      phase = 'turning';
      updateControls();
      rightPage.setAttribute('aria-live', 'off');
      rightPage.setAttribute('aria-busy', 'true');
      renderTurnFace(flipFront, milestones[currentIndex]);
      renderTurnFace(flipBack, milestones[nextIndex]);
      renderPage(nextIndex, false);

      pageTurn.hidden = false;
      pageTurn.classList.remove('is-turning-forward', 'is-turning-backward');
      void pageTurn.offsetWidth;

      window.requestAnimationFrame(() => {
        pageTurn.classList.add(direction > 0 ? 'is-turning-forward' : 'is-turning-backward');
        waitForTransition(pageTurn, 1000, () => {
          currentIndex = nextIndex;
          phase = 'open';
          renderPage(currentIndex);
          pageTurn.hidden = true;
          pageTurn.classList.remove('is-turning-forward', 'is-turning-backward');
          rightPage.setAttribute('aria-live', 'polite');
          rightPage.setAttribute('aria-busy', 'false');
          updateControls();
          if (focusedNext) (milestones[currentIndex].isFinal ? readAgainButton : nextButton).focus();
          else if (focusedPrevious) (currentIndex === 0 ? nextButton : previousButton).focus();
        });
      });
    }

    cover.addEventListener('click', openBook);
    previousButton.addEventListener('click', () => turnPage(-1));
    nextButton.addEventListener('click', () => turnPage(1));
    pageNextButton.addEventListener('click', () => turnPage(1));
    closeButton.addEventListener('click', closeBook);
    readAgainButton.addEventListener('click', closeBook);
  }

  // 3. Back to Top Button
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

  // 4. Consultation Form Validation & Feedback
  function initConsultationForm() {
    const form = document.getElementById('consultationForm');
    const feedbackBox = document.getElementById('formFeedback') || document.getElementById('consultationFeedback');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          <span>Submitting...</span>
        `;

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          form.reset();
          form.classList.remove('was-validated');

          if (feedbackBox) {
            feedbackBox.className = 'alert alert-success mt-3 py-2 small';
            feedbackBox.textContent = 'Your consultation request has been submitted. A LegalEase specialist will contact you shortly.';
            feedbackBox.classList.remove('d-none');

            setTimeout(() => {
              feedbackBox.classList.add('d-none');
              const modalEl = document.getElementById('consultationModal');
              if (modalEl && window.bootstrap) {
                const bsModal = bootstrap.Modal.getInstance(modalEl);
                if (bsModal) bsModal.hide();
              }
            }, 3000);
          }
        }, 800);
      }
    });
  }

  // Initialize all scripts on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initJourneyBook();
    initBackToTop();
    initConsultationForm();
  });
})();


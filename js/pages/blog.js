/**
 * LegalEase - Blog Listing Page Script
 * File: js/pages/blog.js
 *
 * Handles:
 * - Rendering 6 blog cards from LEGALEASE_BLOG_POSTS data
 * - Category filter buttons
 * - Live search by title, excerpt, category
 * - Combined search + filter
 * - Empty state display
 * - Scroll reveal animation
 * - Back to top button
 */

(function () {
  'use strict';

  /* ------------------------------------------------------------------
     Helpers
  ------------------------------------------------------------------ */
  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ------------------------------------------------------------------
     Render Blog Cards
  ------------------------------------------------------------------ */
  function buildCard(post) {
    return `
      <div class="col-lg-4 col-md-6 blog-card-col reveal-on-scroll" data-category="${escHtml(post.categorySlug)}" data-id="${escHtml(post.id)}">
        <article class="blog-card">
          <a href="blog-detail.html?id=${escHtml(post.id)}" class="blog-card-img-link" aria-label="Read: ${escHtml(post.title)}">
            <div class="blog-card-img-wrap">
              <img
                src="${escHtml(post.featuredImage)}"
                alt="${escHtml(post.featuredImageAlt || post.title)}"
                class="blog-card-img"
                loading="lazy"
                width="600" height="380"
              >
            </div>
          </a>
          <div class="blog-card-body">
            <div class="blog-card-meta">
              <span class="blog-cat-badge">${escHtml(post.category)}</span>
              <span class="blog-meta-date">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                ${escHtml(post.date)}
              </span>
            </div>
            <h3 class="blog-card-title">
              <a href="blog-detail.html?id=${escHtml(post.id)}">${escHtml(post.title)}</a>
            </h3>
            <p class="blog-card-excerpt">${escHtml(post.excerpt)}</p>
            <div class="blog-card-footer">
              <div class="blog-card-author">
                <img src="${escHtml(post.authorImage)}" alt="${escHtml(post.author)}" class="blog-author-avatar" width="32" height="32" loading="lazy">
                <span class="blog-author-name">${escHtml(post.author)}</span>
              </div>
              <a href="blog-detail.html?id=${escHtml(post.id)}" class="blog-read-link" aria-label="Read full article: ${escHtml(post.title)}">
                Read Article
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </div>
        </article>
      </div>
    `;
  }

  /* ------------------------------------------------------------------
     Filter + Search Logic
  ------------------------------------------------------------------ */
  var currentCategory = 'all';
  var currentSearch = '';

  function normalise(str) {
    return String(str).toLowerCase().trim();
  }

  function filterPosts(posts) {
    return Object.values(posts).filter(function (post) {
      var matchCat = currentCategory === 'all' || post.categorySlug === currentCategory;
      var q = normalise(currentSearch);
      var matchSearch = !q ||
        normalise(post.title).includes(q) ||
        normalise(post.excerpt).includes(q) ||
        normalise(post.category).includes(q) ||
        (post.tags || []).some(function (t) { return normalise(t).includes(q); });
      return matchCat && matchSearch;
    });
  }

  function renderCards() {
    var grid = document.getElementById('blog-grid');
    var emptyState = document.getElementById('blog-empty-state');
    if (!grid) return;

    var posts = window.LEGALEASE_BLOG_POSTS || {};
    var filtered = filterPosts(posts);

    if (!filtered.length) {
      grid.innerHTML = '';
      if (emptyState) emptyState.classList.remove('d-none');
      return;
    }

    if (emptyState) emptyState.classList.add('d-none');
    grid.innerHTML = filtered.map(buildCard).join('');

    // Re-trigger scroll reveals for new cards
    initScrollReveal();
  }

  /* ------------------------------------------------------------------
     Category Filters
  ------------------------------------------------------------------ */
  function initFilters() {
    var filterBtns = document.querySelectorAll('.blog-filter-btn');
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        currentCategory = btn.dataset.filter || 'all';
        renderCards();
      });
    });
  }

  /* ------------------------------------------------------------------
     Search
  ------------------------------------------------------------------ */
  function initSearch() {
    var searchInput = document.getElementById('blog-search-input');
    var clearBtn = document.getElementById('blog-search-clear');

    if (!searchInput) return;

    searchInput.addEventListener('input', function () {
      currentSearch = searchInput.value;
      if (clearBtn) {
        clearBtn.classList.toggle('d-none', !currentSearch);
      }
      renderCards();
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        searchInput.value = '';
        currentSearch = '';
        clearBtn.classList.add('d-none');
        searchInput.focus();
        renderCards();
      });
    }
  }

  /* ------------------------------------------------------------------
     Scroll Reveal
  ------------------------------------------------------------------ */
  function initScrollReveal() {
    var revealEls = document.querySelectorAll('.reveal-on-scroll:not(.is-visible)');
    if (!revealEls.length) return;

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

      revealEls.forEach(function (el) { observer.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    }
  }

  /* ------------------------------------------------------------------
     Back to Top
  ------------------------------------------------------------------ */
  function initBackToTop() {
    var btn = document.getElementById('backToTopBtn');
    if (!btn) return;
    window.addEventListener('scroll', function () {
      btn.classList.toggle('is-visible', window.scrollY > 400);
    }, { passive: true });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ------------------------------------------------------------------
     Consultation Form
  ------------------------------------------------------------------ */
  function initConsultationForm() {
    var form = document.getElementById('consultationForm');
    var feedback = document.getElementById('consultationFeedback');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (feedback) {
        feedback.className = 'alert alert-success mt-3';
        feedback.innerHTML = '<strong>Thank you!</strong> Your consultation request has been received. We will be in touch shortly.';
        feedback.classList.remove('d-none');
      }
      form.reset();
      setTimeout(function () {
        var modal = document.getElementById('consultationModal');
        if (modal) {
          var bsModal = bootstrap.Modal.getInstance(modal);
          if (bsModal) bsModal.hide();
        }
      }, 2500);
    });
  }

  /* ------------------------------------------------------------------
     Init
  ------------------------------------------------------------------ */
  function init() {
    renderCards();
    initFilters();
    initSearch();
    initScrollReveal();
    initBackToTop();
    initConsultationForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

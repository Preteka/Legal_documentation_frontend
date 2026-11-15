/**
 * LegalEase - Blog Detail Page Engine
 * File: js/pages/blog-detail.js
 *
 * Reads ?id= URL param, renders full blog article, sidebar, related posts.
 */

(function () {
  'use strict';

  /* ------------------------------------------------------------------
     Helpers
  ------------------------------------------------------------------ */
  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ------------------------------------------------------------------
     Render Not Found
  ------------------------------------------------------------------ */
  function renderNotFound() {
    var container = document.getElementById('blog-detail-container');
    var notFound = document.getElementById('blog-not-found');
    if (container) container.classList.add('d-none');
    if (notFound) notFound.classList.remove('d-none');
    document.title = 'Article Not Found | LegalEase Blog';
  }

  /* ------------------------------------------------------------------
     Related Post Card
  ------------------------------------------------------------------ */
  function relatedCard(post) {
    return `
      <div class="col-md-4 col-sm-6 reveal-on-scroll">
        <article class="related-post-card">
          <a href="blog-detail.html?id=${escHtml(post.id)}" class="related-post-img-link">
            <div class="related-post-img-wrap">
              <img src="${escHtml(post.featuredImage)}" alt="${escHtml(post.featuredImageAlt || post.title)}" loading="lazy" width="400" height="240">
            </div>
          </a>
          <div class="related-post-body">
            <span class="blog-cat-badge blog-cat-badge-sm">${escHtml(post.category)}</span>
            <h4 class="related-post-title">
              <a href="blog-detail.html?id=${escHtml(post.id)}">${escHtml(post.title)}</a>
            </h4>
            <a href="blog-detail.html?id=${escHtml(post.id)}" class="blog-read-link">
              Read Article
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </article>
      </div>
    `;
  }

  /* ------------------------------------------------------------------
     Sidebar Recent Posts
  ------------------------------------------------------------------ */
  function recentPostItem(post, currentId) {
    if (post.id === currentId) return '';
    return `
      <a href="blog-detail.html?id=${escHtml(post.id)}" class="sidebar-recent-item">
        <div class="sidebar-recent-img-wrap">
          <img src="${escHtml(post.featuredImage)}" alt="${escHtml(post.title)}" loading="lazy" width="72" height="52">
        </div>
        <div class="sidebar-recent-info">
          <span class="sidebar-recent-title">${escHtml(post.title)}</span>
          <span class="sidebar-recent-date">${escHtml(post.date)}</span>
        </div>
      </a>
    `;
  }

  /* ------------------------------------------------------------------
     Main Render
  ------------------------------------------------------------------ */
  function render() {
    var id = getParam('id');
    var posts = window.LEGALEASE_BLOG_POSTS || {};
    var post = id ? posts[id] : null;

    if (!post) {
      renderNotFound();
      return;
    }

    // Page title + meta
    document.title = post.title + ' | LegalEase Legal Insights';
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', post.seoDesc || post.excerpt);

    // Show container
    var container = document.getElementById('blog-detail-container');
    var notFound = document.getElementById('blog-not-found');
    if (container) container.classList.remove('d-none');
    if (notFound) notFound.classList.add('d-none');

    // ---- Breadcrumb ----
    var breadcrumbTitle = document.getElementById('detail-breadcrumb-title');
    if (breadcrumbTitle) breadcrumbTitle.textContent = post.title;

    // ---- Hero ----
    var elCategory = document.getElementById('detail-category');
    var elTitle = document.getElementById('detail-title');
    var elExcerpt = document.getElementById('detail-excerpt');
    var elAuthor = document.getElementById('detail-author-name');
    var elDate = document.getElementById('detail-date');
    var elReadTime = document.getElementById('detail-read-time');
    var elFeaturedImg = document.getElementById('detail-featured-img');

    if (elCategory) elCategory.textContent = post.category;
    if (elTitle) elTitle.textContent = post.title;
    if (elExcerpt) elExcerpt.textContent = post.excerpt;
    if (elAuthor) elAuthor.textContent = post.author;
    if (elDate) elDate.textContent = post.date;
    if (elReadTime) elReadTime.textContent = post.readTime;
    if (elFeaturedImg) {
      elFeaturedImg.src = post.featuredImage;
      elFeaturedImg.alt = post.featuredImageAlt || post.title;
    }

    // ---- Article Content ----
    var elContent = document.getElementById('detail-article-content');
    if (elContent) elContent.innerHTML = post.content || '';

    // ---- Author Section ----
    var elAuthorImg = document.getElementById('detail-author-img');
    var elAuthorNameFull = document.getElementById('detail-author-name-full');
    var elAuthorRole = document.getElementById('detail-author-role');
    var elAuthorBio = document.getElementById('detail-author-bio');

    if (elAuthorImg) { elAuthorImg.src = post.authorImage; elAuthorImg.alt = post.author; }
    if (elAuthorNameFull) elAuthorNameFull.textContent = post.author;
    if (elAuthorRole) elAuthorRole.textContent = post.authorRole;
    if (elAuthorBio) elAuthorBio.textContent = post.authorBio;

    // ---- Sidebar: Categories ----
    var sidebarCatList = document.getElementById('sidebar-categories');
    if (sidebarCatList) {
      var allCategories = [
        { label: 'Rental & Property', slug: 'rental-property' },
        { label: 'Personal Documents', slug: 'personal-documents' },
        { label: 'Business & Registration', slug: 'business-registration' },
        { label: 'Legal Awareness', slug: 'legal-awareness' },
        { label: 'Documentation Tips', slug: 'documentation-tips' }
      ];
      sidebarCatList.innerHTML = allCategories.map(function (cat) {
        var count = Object.values(posts).filter(function (p) { return p.categorySlug === cat.slug; }).length;
        var isActive = post.categorySlug === cat.slug;
        return `<a href="blog.html" class="sidebar-cat-item${isActive ? ' active' : ''}" data-category="${escHtml(cat.slug)}">${escHtml(cat.label)}<span class="sidebar-cat-count">${count}</span></a>`;
      }).join('');
    }

    // ---- Sidebar: Recent Posts ----
    var sidebarRecent = document.getElementById('sidebar-recent-posts');
    if (sidebarRecent) {
      var allPosts = Object.values(posts);
      sidebarRecent.innerHTML = allPosts
        .filter(function (p) { return p.id !== post.id; })
        .slice(0, 4)
        .map(function (p) { return recentPostItem(p, post.id); })
        .join('');
    }

    // ---- Related Articles ----
    var relatedGrid = document.getElementById('related-posts-grid');
    if (relatedGrid) {
      var relatedIds = (post.relatedIds || []).filter(function (rid) { return rid !== post.id; });
      var relatedPosts = relatedIds
        .map(function (rid) { return posts[rid]; })
        .filter(Boolean)
        .slice(0, 3);

      if (relatedPosts.length) {
        relatedGrid.innerHTML = relatedPosts.map(relatedCard).join('');
      } else {
        var relatedSection = document.getElementById('related-posts-section');
        if (relatedSection) relatedSection.classList.add('d-none');
      }
    }

    // Re-trigger scroll reveals
    initScrollReveal();
  }

  /* ------------------------------------------------------------------
     Scroll Reveal
  ------------------------------------------------------------------ */
  function initScrollReveal() {
    var els = document.querySelectorAll('.reveal-on-scroll:not(.is-visible)');
    if (!els.length) return;
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      els.forEach(function (el) { observer.observe(el); });
    } else {
      els.forEach(function (el) { el.classList.add('is-visible'); });
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
        feedback.innerHTML = '<strong>Thank you!</strong> Your consultation request has been received.';
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
     Navbar active state for blog-detail
  ------------------------------------------------------------------ */
  function patchNavbarBlogActive() {
    // After navbar renders, mark Blog as active
    var check = setInterval(function () {
      var links = document.querySelectorAll('.nav-menu .nav-link');
      if (!links.length) return;
      clearInterval(check);
      links.forEach(function (link) {
        if (link.getAttribute('href') && link.getAttribute('href').includes('blog')) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }, 50);
    setTimeout(function () { clearInterval(check); }, 3000);
  }

  /* ------------------------------------------------------------------
     Init
  ------------------------------------------------------------------ */
  function init() {
    render();
    initScrollReveal();
    initBackToTop();
    initConsultationForm();
    patchNavbarBlogActive();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

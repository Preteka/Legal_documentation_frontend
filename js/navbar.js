/**
 * LegalEase - Reusable Navigation Bar Component
 * Dynamically rendered into #main-navbar-container
 * Features:
 * - 3-Zone Flexbox Layout: Brand (Left), Navigation (Centre), Controls (Right)
 * - Pure text RTL / LTR pill button
 * - Pure icon Dark / Light circular button
 * - Pure icon Profile circular button with dropdown
 * - Proportional Book Consultation CTA button
 * - Responsive Bootstrap 5 collapse navigation for tablet and mobile
 * - Sticky blurred glassmorphism on scroll
 * - Theme and Direction persistence in localStorage
 */

(function () {
  'use strict';

  // State initialization
  const THEME_KEY = 'legalease_theme';
  const DIR_KEY = 'legalease_direction';

  function getStoredTheme() {
    return localStorage.getItem(THEME_KEY) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  function getStoredDir() {
    return localStorage.getItem(DIR_KEY) || 'ltr';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    updateThemeToggleUI(theme);
  }

  function applyDir(dir) {
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', dir === 'rtl' ? 'ar' : 'en');
    localStorage.setItem(DIR_KEY, dir);
    updateDirToggleUI(dir);
  }

  function updateThemeToggleUI(theme) {
    const isDark = theme === 'dark';
    const title = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    const iconHtml = isDark
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-icon"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-icon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

    const desktopBtn = document.getElementById('theme-toggle-btn');
    if (desktopBtn) {
      desktopBtn.setAttribute('aria-label', title);
      desktopBtn.setAttribute('title', title);
      desktopBtn.innerHTML = iconHtml;
    }

    const mobileBtn = document.getElementById('theme-toggle-btn-mobile');
    if (mobileBtn) {
      mobileBtn.setAttribute('aria-label', title);
      mobileBtn.setAttribute('title', title);
      mobileBtn.innerHTML = iconHtml;
    }
  }

  function updateDirToggleUI(dir) {
    const isRtl = dir === 'rtl';
    const text = isRtl ? 'LTR' : 'RTL';
    const title = isRtl ? 'Switch to LTR' : 'Switch to RTL';

    const desktopBtn = document.getElementById('dir-toggle-btn');
    if (desktopBtn) {
      desktopBtn.setAttribute('aria-label', title);
      desktopBtn.setAttribute('title', title);
      desktopBtn.innerHTML = `<span class="dir-text">${text}</span>`;
    }

    const mobileBtn = document.getElementById('dir-toggle-btn-mobile');
    if (mobileBtn) {
      mobileBtn.setAttribute('aria-label', title);
      mobileBtn.setAttribute('title', title);
      mobileBtn.innerHTML = `<span class="dir-text">${text}</span>`;
    }
  }

  function renderNavbar() {
    const placeholder = document.getElementById('main-navbar-container') || document.getElementById('navbar-container');
    if (!placeholder) return;

    // Detect current page to set active state reliably across all environments (file://, http://, query strings, hashes)
    const rawPath = window.location.pathname || '';
    const filename = (rawPath.split(/[/\\]/).pop() || 'index.html').toLowerCase().split('?')[0].split('#')[0];
    const isHome2 = filename === 'home-2.html';
    const isAbout = filename === 'about.html' || filename === 'about';
    const isServices = filename === 'services.html' || filename === 'services' || filename === 'service-detail.html' || filename === 'service-detail';
    const isBlog = filename === 'blog.html' || filename === 'blog' || filename === 'blog-detail.html' || filename === 'blog-detail';
    const isContact = filename === 'contact.html' || filename === 'contact';
    const isLogin = filename === 'login.html' || filename === 'login';
    const isSignup = filename === 'signup.html' || filename === 'signup';
    const isHome1 = !isHome2 && !isAbout && !isServices && !isBlog && !isContact && !isLogin && !isSignup && (filename === 'index.html' || filename === '' || filename === 'index');

    const navbarHtml = `
      <nav class="navbar navbar-expand-xl fixed-top custom-navbar" id="legalNavbar">
        <div class="container container-custom navbar-layout">

          <!-- =============================================================
               ZONE 1 (LEFT): Brand Logo & LegalEase Text
               ============================================================= -->
          <a class="navbar-brand d-flex align-items-center gap-2 gap-md-3" href="index.html" aria-label="LegalEase Home">
            <img src="assets/icons/icon.png" alt="LegalEase Brand Logo" class="brand-logo" width="72" height="48" loading="eager">
            <span class="brand-text">
              <span class="brand-title">Legal<span class="text-accent">Ease</span></span>
              <span class="brand-tagline">Documentation</span>
            </span>
          </a>

          <!-- Mobile Quick Action Buttons (Visible only on < 1200px) -->
          <div class="d-flex align-items-center gap-2 d-xl-none ms-auto me-2">
            <!-- Theme Toggle Mobile -->
            <button class="nav-control-btn" id="theme-toggle-btn-mobile" type="button" aria-label="Toggle Theme">
              <!-- Injected via script -->
            </button>
            <!-- RTL / LTR Toggle Mobile (Pure Text Pill) -->
            <button class="nav-control-btn dir-btn" id="dir-toggle-btn-mobile" type="button" aria-label="Toggle Direction">
              <span class="dir-text">RTL</span>
            </button>
          </div>

          <!-- Hamburger Menu Toggler -->
          <button class="navbar-toggler custom-toggler d-xl-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="toggler-bar"></span>
            <span class="toggler-bar"></span>
            <span class="toggler-bar"></span>
          </button>

          <!-- =============================================================
               ZONE 2 (CENTRE): Navigation Links (Horizontal Row on Desktop)
               ============================================================= -->
          <div class="collapse navbar-collapse navbar-center-collapse" id="navbarContent">
            <ul class="navbar-nav nav-menu align-items-center">
              <li class="nav-item">
                <a class="nav-link ${isHome1 ? 'active' : ''}" href="index.html">
                  <span class="nav-link-title">Home</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${isHome2 ? 'active' : ''}" href="home-2.html" title="Home Page 2 – Niche-Specific Documentation">
                  <span class="nav-link-title">Home 2</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${isAbout ? 'active' : ''}" href="about.html">
                  <span class="nav-link-title">About Us</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${isServices ? 'active' : ''}" href="services.html">
                  <span class="nav-link-title">Services</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${isBlog ? 'active' : ''}" href="blog.html">
                  <span class="nav-link-title">Blog</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${isContact ? 'active' : ''}" href="contact.html">
                  <span class="nav-link-title">Contact</span>
                </a>
              </li>
            </ul>

            <!-- Mobile Sub-Menu Actions (Visible only inside collapsed menu < 1200px) -->
            <div class="mobile-nav-footer d-xl-none pt-3 mt-3">
              <div class="d-flex align-items-center justify-content-between mb-3 px-1">
                <span class="small text-muted fw-semibold">Account Options</span>
                <div class="dropdown profile-dropdown">
                  <button class="nav-control-btn profile-btn" type="button" id="profileDropdownBtnMobile" data-bs-toggle="dropdown" aria-expanded="false" aria-label="User Account">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end shadow-custom custom-dropdown-menu" aria-labelledby="profileDropdownBtnMobile">
                    <li class="dropdown-header">
                      <div class="user-info-brief">
                        <span class="user-greeting">Welcome to LegalEase</span>
                        <small class="text-muted d-block">Manage your legal documents</small>
                      </div>
                    </li>
                    <li><hr class="dropdown-divider"></li>
                    <li>
                      <a class="dropdown-item d-flex align-items-center gap-2 ${isLogin ? 'active-action' : ''}" href="login.html">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                          <polyline points="10 17 15 12 10 7"></polyline>
                          <line x1="15" y1="12" x2="3" y2="12"></line>
                        </svg>
                        Login
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item d-flex align-items-center gap-2 ${isSignup ? 'active-action' : ''}" href="signup.html">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="8.5" cy="7" r="4"></circle>
                          <line x1="20" y1="8" x2="20" y2="14"></line>
                          <line x1="23" y1="11" x2="17" y2="11"></line>
                        </svg>
                        Sign Up
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <a href="#consultationModal" class="btn btn-primary-custom w-100 justify-content-center" data-bs-toggle="modal" data-bs-target="#consultationModal">
                <span>Book Consultation</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="cta-arrow ms-2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>

          <!-- =============================================================
               ZONE 3 (RIGHT): Controls (Desktop >= 1200px)
               ============================================================= -->
          <div class="nav-right-controls d-none d-xl-flex align-items-center gap-2">
            <!-- 1. RTL / LTR Toggle (Pure Text Pill) -->
            <button class="nav-control-btn dir-btn" id="dir-toggle-btn" type="button" aria-label="Toggle Text Direction" title="Switch Direction">
              <span class="dir-text">RTL</span>
            </button>

            <!-- 2. Dark / Light Mode Switcher (Pure Icon Circle) -->
            <button class="nav-control-btn theme-btn" id="theme-toggle-btn" type="button" aria-label="Toggle Color Theme" title="Toggle Theme">
              <!-- Injected via script -->
            </button>

            <!-- 3. Profile Dropdown (Pure Icon Circle) -->
            <div class="dropdown profile-dropdown">
              <button class="nav-control-btn profile-btn" type="button" id="profileDropdownBtn" data-bs-toggle="dropdown" aria-expanded="false" aria-label="User Account" title="My Account">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </button>
              <ul class="dropdown-menu dropdown-menu-end shadow-custom custom-dropdown-menu" aria-labelledby="profileDropdownBtn">
                <li class="dropdown-header">
                  <div class="user-info-brief">
                    <span class="user-greeting">Welcome to LegalEase</span>
                    <small class="text-muted d-block">Manage your legal documents</small>
                  </div>
                </li>
                <li><hr class="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item d-flex align-items-center gap-2 ${isLogin ? 'active-action' : ''}" href="login.html">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                      <polyline points="10 17 15 12 10 7"></polyline>
                      <line x1="15" y1="12" x2="3" y2="12"></line>
                    </svg>
                    Login
                  </a>
                </li>
                <li>
                  <a class="dropdown-item d-flex align-items-center gap-2 ${isSignup ? 'active-action' : ''}" href="signup.html">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="8.5" cy="7" r="4"></circle>
                      <line x1="20" y1="8" x2="20" y2="14"></line>
                      <line x1="23" y1="11" x2="17" y2="11"></line>
                    </svg>
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>

            <!-- 4. Book Consultation CTA Button -->
            <a href="#consultationModal" class="btn btn-primary-custom nav-cta-btn" data-bs-toggle="modal" data-bs-target="#consultationModal">
              <span>Book Consultation</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="cta-arrow">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

        </div>
      </nav>
    `;

    placeholder.innerHTML = navbarHtml;

    // Attach listeners
    setupNavbarInteractions();
  }

  function setupNavbarInteractions() {
    const currentTheme = getStoredTheme();
    const currentDir = getStoredDir();

    applyTheme(currentTheme);
    applyDir(currentDir);

    // Desktop Theme Toggle
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const activeTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
      });
    }

    // Mobile Theme Toggle
    const themeBtnMobile = document.getElementById('theme-toggle-btn-mobile');
    if (themeBtnMobile) {
      themeBtnMobile.addEventListener('click', () => {
        const activeTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
      });
    }

    // Desktop Dir Toggle
    const dirBtn = document.getElementById('dir-toggle-btn');
    if (dirBtn) {
      dirBtn.addEventListener('click', () => {
        const activeDir = document.documentElement.getAttribute('dir') || 'ltr';
        const nextDir = activeDir === 'rtl' ? 'ltr' : 'rtl';
        applyDir(nextDir);
      });
    }

    // Mobile Dir Toggle
    const dirBtnMobile = document.getElementById('dir-toggle-btn-mobile');
    if (dirBtnMobile) {
      dirBtnMobile.addEventListener('click', () => {
        const activeDir = document.documentElement.getAttribute('dir') || 'ltr';
        const nextDir = activeDir === 'rtl' ? 'ltr' : 'rtl';
        applyDir(nextDir);
      });
    }

    // Sticky shadow on scroll
    const navbar = document.getElementById('legalNavbar');
    if (navbar) {
      const handleScroll = () => {
        if (window.scrollY > 25) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }

    // Auto-close mobile menu on nav link click
    const navLinks = document.querySelectorAll('#navbarContent .nav-link:not(.dropdown-toggle)');
    const navbarCollapse = document.getElementById('navbarContent');
    if (navbarCollapse && window.bootstrap) {
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
          }
        });
      });
    }
  }

  // Pre-apply theme & direction before DOM render to prevent flash of unstyled content
  applyTheme(getStoredTheme());
  applyDir(getStoredDir());

  // Wait for DOM to render navbar
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderNavbar);
  } else {
    renderNavbar();
  }
})();

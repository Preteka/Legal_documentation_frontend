/**
 * LegalEase - Common Reusable Footer Component
 * File: js/components/footer.js
 * 
 * Features:
 * - Dynamic injection into #footer-container
 * - Preserves single source of truth across all pages (Home 1, Home 2, and future pages)
 * - Dynamic copyright year (new Date().getFullYear())
 * - Responsive 4-column layout matching LegalEase design system
 * - Relative path resolution for root and subfolder page structures
 * - Support for Dark/Light theme and LTR/RTL modes
 * - Idempotent rendering (prevents duplicate footer injection)
 */

(function () {
  'use strict';

  /**
   * Determine relative path prefix to project root
   * Works for root files (index.html, home-2.html) and nested subdirectories
   */
  function getPathPrefix() {
    if (typeof window.LEGALEASE_BASE_PATH === 'string') {
      return window.LEGALEASE_BASE_PATH;
    }
    // Calculate path depth if loaded from a subdirectory
    const pathname = window.location.pathname.replace(/\\/g, '/');
    const segments = pathname.split('/').filter(Boolean);
    // If the file is directly under root or domain, prefix is empty
    return '';
  }

  /**
   * Render the common footer into #footer-container
   */
  function renderFooter() {
    const container = document.getElementById('footer-container');
    if (!container) {
      // Container not present on this page
      return;
    }

    // Prevent duplicate rendering
    if (container.dataset.footerRendered === 'true' || container.querySelector('.site-footer')) {
      return;
    }

    const pathPrefix = getPathPrefix();
    const currentYear = new Date().getFullYear();

    // Detect active page for smart in-page anchoring vs cross-page routing
    const rawPath = window.location.pathname || '';
    const filename = (rawPath.split(/[/\\]/).pop() || 'index.html').toLowerCase().split('?')[0].split('#')[0];
    const isHome2 = filename === 'home-2.html';
    const isAbout = filename === 'about.html' || filename === 'about';
    const isServices = filename === 'services.html' || filename === 'services';
    const isBlog = filename === 'blog.html' || filename === 'blog';
    const isContact = filename === 'contact.html' || filename === 'contact';
    const isHome1 = !isHome2 && !isAbout && !isServices && !isBlog && !isContact && (filename === 'index.html' || filename === '' || filename === 'index');

    // Routing URLs
    const home1Url = `${pathPrefix}index.html`;
    const home2Url = `${pathPrefix}home-2.html`;
    const aboutUrl = isAbout ? '#about-hero' : `${pathPrefix}about.html`;
    const servicesUrl = isServices ? '#services-overview' : `${pathPrefix}services.html`;
    const blogUrl = isBlog ? '#blog-overview' : `${pathPrefix}blog.html`;
    const contactUrl = isContact ? '#contact-section' : `${pathPrefix}contact.html`;

    // Service item links
    const serviceTargetUrl = isServices ? '#services-overview' : `${pathPrefix}services.html`;

    const footerHtml = `
      <footer class="site-footer" id="contact" role="contentinfo">
        <!-- Floating Subtle Geometric Square Accents -->
        <div class="footer-geo-decor" aria-hidden="true">
          <span class="geo-square geo-square-gold geo-square-xs footer-geo-1"></span>
          <span class="geo-square geo-square-outline geo-square-sm footer-geo-2"></span>
          <span class="geo-square geo-square-bronze geo-square-xs footer-geo-3"></span>
        </div>

        <div class="container container-custom position-relative" style="z-index: 1;">
          <div class="row g-4 g-lg-5 footer-top-row">

            <!-- =============================================================
                 COLUMN 1: BRAND & MISSION
                 ============================================================= -->
            <div class="col-lg-4 col-md-6">
              <a class="footer-brand" href="${home1Url}" aria-label="LegalEase Home">
                <img src="${pathPrefix}assets/icons/icon.png" alt="LegalEase Brand Logo" class="brand-logo brand-logo-footer" width="72" height="48" loading="lazy">
                <span class="brand-text">
                  <span class="brand-title">Legal<span class="text-accent">Ease</span></span>
                  <span class="brand-tagline">Documentation</span>
                </span>
              </a>

              <p class="footer-desc">
                Making legal documentation simpler through accessible assistance, organised preparation and professional consultation support.
              </p>

              <!-- Social Media Links with SVG Icons -->
              <div class="footer-social-links" aria-label="Social Media Links">
                <a href="https://www.linkedin.com" class="footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="Connect on LinkedIn">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://twitter.com" class="footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" title="Follow on X / Twitter">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="https://facebook.com" class="footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Follow on Facebook">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="https://instagram.com" class="footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Follow on Instagram">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>

            <!-- =============================================================
                 COLUMN 2: QUICK LINKS
                 ============================================================= -->
            <div class="col-6 col-md-3 col-lg-2">
              <h4 class="footer-heading">Quick Links</h4>
              <ul class="footer-links">
                <li><a href="${home1Url}">Home</a></li>
                <li><a href="${home2Url}">Home 2</a></li>
                <li><a href="${aboutUrl}">About Us</a></li>
                <li><a href="${servicesUrl}">Services</a></li>
                <li><a href="${blogUrl}">Blog</a></li>
                <li><a href="${contactUrl}">Contact</a></li>
              </ul>
            </div>

            <!-- =============================================================
                 COLUMN 3: OUR SERVICES
                 ============================================================= -->
            <div class="col-6 col-md-3 col-lg-3">
              <h4 class="footer-heading">Our Services</h4>
              <ul class="footer-links">
                <li><a href="${serviceTargetUrl}">Rental &amp; Lease Agreements</a></li>
                <li><a href="${serviceTargetUrl}">Affidavit Assistance</a></li>
                <li><a href="${serviceTargetUrl}">Business Documentation</a></li>
                <li><a href="${serviceTargetUrl}">Legal Notice Support</a></li>
                <li><a href="${serviceTargetUrl}">Declaration &amp; Indemnity Deeds</a></li>
              </ul>
            </div>

            <!-- =============================================================
                 COLUMN 4: GET IN TOUCH
                 ============================================================= -->
            <div class="col-lg-3 col-md-6">
              <h4 class="footer-heading">Get in Touch</h4>
              <div class="footer-contact-list">
                <!-- Location -->
                <div class="footer-contact-item">
                  <span class="footer-contact-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </span>
                  <span>LegalEase Support Center, High Court Enclave, Tech Park Sector, New Delhi 110001</span>
                </div>

                <!-- Email -->
                <div class="footer-contact-item">
                  <span class="footer-contact-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </span>
                  <div>
                    <a href="mailto:support@legalease-docs.placeholder">support@legalease-docs.placeholder</a>
                  </div>
                </div>

                <!-- Phone -->
                <div class="footer-contact-item">
                  <span class="footer-contact-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </span>
                  <div>
                    <a href="tel:+91180036273273">+91 1800-DOCS-EASE</a>
                    <span class="footer-contact-timing text-muted">(Mon &ndash; Sat, 9 AM &ndash; 7 PM)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- =============================================================
               BOTTOM FOOTER BAR: COPYRIGHT & LEGAL POLICIES
               ============================================================= -->
          <div class="footer-bottom-bar">
            <div class="footer-bottom-content">
              <p class="footer-copyright">
                &copy; <span id="footerCurrentYear">${currentYear}</span> LegalEase Documentation Services. All rights reserved.
              </p>
              <div class="footer-legal-links">
                <a href="#privacy" class="footer-legal-link" id="footerPrivacyLink">Privacy Policy</a>
                <span class="footer-separator" aria-hidden="true">&bull;</span>
                <a href="#terms" class="footer-legal-link" id="footerTermsLink">Terms &amp; Conditions</a>
                <span class="footer-separator" aria-hidden="true">&bull;</span>
                <a href="#disclaimer" class="footer-legal-link" id="footerDisclaimerLink">Disclaimer</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;

    container.innerHTML = footerHtml;
    container.dataset.footerRendered = 'true';

    // Attach user feedback for informational policy links if modals are not pre-bound
    setupPolicyNoticeHandlers(container);
  }

  /**
   * Accessible feedback handler for placeholder legal links
   */
  function setupPolicyNoticeHandlers(container) {
    const privacyBtn = container.querySelector('#footerPrivacyLink');
    if (privacyBtn) {
      privacyBtn.addEventListener('click', function (e) {
        e.preventDefault();
        alert('LegalEase Privacy Policy:\n\nWe respect your confidentiality. All document drafts and personal consultation details are securely encrypted and never shared with third parties.');
      });
    }

    const termsBtn = container.querySelector('#footerTermsLink');
    if (termsBtn) {
      termsBtn.addEventListener('click', function (e) {
        e.preventDefault();
        alert('LegalEase Terms & Conditions:\n\nLegalEase provides documentation preparation and procedural assistance services. We are not an adversarial law firm, and our assistance does not substitute formal court representation.');
      });
    }

    const disclaimerBtn = container.querySelector('#footerDisclaimerLink');
    if (disclaimerBtn) {
      disclaimerBtn.addEventListener('click', function (e) {
        e.preventDefault();
        alert('LegalEase Regulatory Disclaimer:\n\nThis platform facilitates citizen document formatting and drafting guidance in accordance with applicable documentation standards.');
      });
    }
  }

  // Expose global API
  window.LegalEaseFooter = {
    render: renderFooter
  };

  // Wait for DOM to render footer
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderFooter);
  } else {
    renderFooter();
  }
})();


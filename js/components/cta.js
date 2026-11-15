/**
 * LegalEase - Universal Common Call-to-Action (CTA) Component
 * File: js/components/cta.js
 * 
 * Features:
 * - Dynamic injection into #cta-container
 * - Shared across all pages: Home 1, Home 2, About Us, Services, Blog, Contact
 * - Preserves visual continuity matching the LegalEase design system
 * - Supports page-level customization via data-* attributes on #cta-container
 * - Fallbacks to contextual defaults based on active page route
 * - Realistic wooden balance scale visual with floating feature badges
 * - Full Dark/Light theme & LTR/RTL support
 * - Idempotent rendering to prevent duplicate injection
 */

(function () {
  'use strict';

  /**
   * Determine relative path prefix to project root
   */
  function getPathPrefix() {
    if (typeof window.LEGALEASE_BASE_PATH === 'string') {
      return window.LEGALEASE_BASE_PATH;
    }
    return '';
  }

  /**
   * Render the common CTA into #cta-container
   */
  function renderCta() {
    const container = document.getElementById('cta-container');
    if (!container) {
      return;
    }

    // Prevent duplicate injection
    if (container.dataset.ctaRendered === 'true' || container.querySelector('.common-cta-section')) {
      return;
    }

    const pathPrefix = getPathPrefix();

    // Detect active page for smart contextual defaults
    const rawPath = window.location.pathname || '';
    const filename = (rawPath.split(/[/\\]/).pop() || 'index.html').toLowerCase().split('?')[0].split('#')[0];
    const isHome2 = filename === 'home-2.html';
    const isAbout = filename === 'about.html' || filename === 'about';
    const isServices = filename === 'services.html' || filename === 'services' || filename === 'service-detail.html' || filename === 'service-detail';
    const isBlog = filename === 'blog.html' || filename === 'blog' || filename === 'blog-detail.html' || filename === 'blog-detail';
    const isContact = filename === 'contact.html' || filename === 'contact';

    // Page-specific defaults
    let defaultEyebrow = "LET'S GET STARTED";
    let defaultHeadline = "Have a Document to Prepare? Let's Make It Effortless.";
    let defaultDesc = "Take the first step towards a simpler documentation experience. Schedule a consultation or reach out to explore how LegalEase can assist your legal paperwork.";
    let defaultPrimaryText = "Book a Consultation";
    let defaultPrimaryHref = "#contact";
    let defaultSecondaryText = "Explore Our Services";
    let defaultSecondaryHref = isAbout ? `${pathPrefix}index.html#services` : (isHome2 ? '#features-2' : '#services');

    if (isHome2) {
      defaultEyebrow = "GET STARTED TODAY";
      defaultHeadline = "Ready to Simplify Your Legal Documentation?";
      defaultDesc = "Tell us what you need. Our team is ready to guide you through clear, organized, and reliable document preparation with zero hassle.";
      defaultPrimaryText = "Book a Consultation";
      defaultPrimaryHref = "#contact";
      defaultSecondaryText = "Explore Services";
      defaultSecondaryHref = "#features-2";
    } else if (isAbout) {
      defaultEyebrow = "LET'S GET STARTED";
      defaultHeadline = "Your Documentation Journey Starts with Clarity.";
      defaultDesc = "Have questions about our documentation philosophy, consultation approach, or legal assistance processes? Connect with our dedicated advisory team today.";
      defaultPrimaryText = "Book a Consultation";
      defaultPrimaryHref = "#contact";
      defaultSecondaryText = "Explore Our Services";
      defaultSecondaryHref = `${pathPrefix}index.html#services`;
    } else if (isServices) {
      defaultEyebrow = "STREAMLINED ASSISTANCE";
      defaultHeadline = "Need Dedicated Document Preparation Support?";
      defaultDesc = "From property agreements to business affidavits and corporate filings, our structured documentation support ensures complete precision and peace of mind.";
      defaultPrimaryText = "Book a Consultation";
      defaultPrimaryHref = "#contact";
      defaultSecondaryText = "Contact Our Team";
      defaultSecondaryHref = `${pathPrefix}contact.html`;
    } else if (isBlog) {
      defaultEyebrow = "STAY INFORMED";
      defaultHeadline = "Stay Ahead with Clear Legal Documentation Standards.";
      defaultDesc = "Have specific questions after reviewing our legal documentation insights and procedural guides? Schedule a direct discussion with our specialists.";
      defaultPrimaryText = "Book a Consultation";
      defaultPrimaryHref = "#contact";
      defaultSecondaryText = "Explore Services";
      defaultSecondaryHref = `${pathPrefix}services.html`;
    } else if (isContact) {
      defaultEyebrow = "CONNECT WITH US";
      defaultHeadline = "Let's Discuss Your Legal Documentation Requirements.";
      defaultDesc = "Reach out directly to begin your document preparation or consultation booking. Our specialists are on standby to answer your questions and assist promptly.";
      defaultPrimaryText = "Book a Consultation";
      defaultPrimaryHref = "#contact-form";
      defaultSecondaryText = "Explore Our Services";
      defaultSecondaryHref = `${pathPrefix}services.html`;
    }

    // Allow data-* attributes on #cta-container to override defaults
    const eyebrow = container.dataset.eyebrow || defaultEyebrow;
    const headline = container.dataset.headline || defaultHeadline;
    const desc = container.dataset.description || defaultDesc;
    const primaryText = container.dataset.primaryText || defaultPrimaryText;
    const primaryHref = container.dataset.primaryHref || defaultPrimaryHref;
    const secondaryText = container.dataset.secondaryText || defaultSecondaryText;
    const secondaryHref = container.dataset.secondaryHref || defaultSecondaryHref;

    const scaleImgSrc = `${pathPrefix}assets/images/wooden-balance-scale.png`;

    const ctaHtml = `
      <section class="common-cta-section" id="common-cta" aria-labelledby="common-cta-heading">
        <div class="container container-custom">
          <div class="common-cta-card">
            <!-- Glow & Ambient Background Effects -->
            <div class="common-cta-glow" aria-hidden="true"></div>
            <div class="common-cta-geo-group" aria-hidden="true">
              <span class="geo-square geo-square-gold geo-square-sm common-cta-geo-sq-1"></span>
              <span class="geo-square geo-square-bronze geo-square-xs common-cta-geo-sq-2"></span>
              <span class="geo-square geo-square-outline geo-square-sm common-cta-geo-sq-3"></span>
            </div>

            <div class="row align-items-center g-4 g-lg-5 position-relative" style="z-index: 2;">
              <!-- Left Column: Content & CTA Actions -->
              <div class="col-lg-7 common-cta-content">
                <div class="common-cta-eyebrow">
                  <span class="section-badge section-badge-gold">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="me-1">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    ${eyebrow}
                  </span>
                </div>

                <h2 class="common-cta-headline" id="common-cta-heading">
                  ${headline}
                </h2>

                <p class="common-cta-desc">
                  ${desc}
                </p>

                <div class="common-cta-actions">
                  <a href="${primaryHref}" class="common-cta-btn-primary">
                    <span>${primaryText}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="cta-arrow">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>

                  <a href="${secondaryHref}" class="common-cta-btn-secondary">
                    <span>${secondaryText}</span>
                  </a>
                </div>
              </div>

              <!-- Right Column: Balance Scales Visual with Floating Chips -->
              <div class="col-lg-5 common-cta-visual">
                <div class="common-cta-scale-wrap">
                  <span class="common-cta-badge common-cta-badge-top" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    100% Legally Verified
                  </span>

                  <img src="${scaleImgSrc}" alt="Traditional Legal Balance Scale" class="common-cta-scale-img" width="380" height="380" loading="lazy">

                  <span class="common-cta-badge common-cta-badge-bottom" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Structured & Transparent
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    container.innerHTML = ctaHtml;
    container.dataset.ctaRendered = 'true';
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderCta);
  } else {
    renderCta();
  }

  // Expose API for dynamic re-renders if required
  window.LegalEaseCTA = {
    render: renderCta
  };
})();

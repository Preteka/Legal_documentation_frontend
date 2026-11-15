/**
 * LegalEase - Dynamic Service Detail Page Engine
 * File: js/service-detail.js
 * 
 * Reads the ?id= URL parameter, looks up content in window.LEGALEASE_SERVICES (js/service-data.js),
 * and dynamically renders the complete Service Detail page.
 */

(function () {
  'use strict';

  function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  function initServiceDetail() {
    const serviceId = getUrlParam('id');
    const services = window.LEGALEASE_SERVICES || {};
    const service = services[serviceId];

    const detailContainer = document.getElementById('service-detail-container');
    const notFoundContainer = document.getElementById('service-not-found-container');

    if (!service) {
      // Display Service Not Found State
      if (detailContainer) detailContainer.style.display = 'none';
      if (notFoundContainer) {
        notFoundContainer.classList.remove('d-none');
        notFoundContainer.innerHTML = `
          <div class="container container-custom py-5">
            <div class="service-not-found-card reveal-on-scroll">
              <div class="not-found-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <span class="eyebrow-badge mx-auto mb-3">Service Not Located</span>
              <h1 class="h3 font-serif mb-3 text-heading">Documentation Service Not Found</h1>
              <p class="text-muted mb-4">
                The legal documentation service you requested could not be identified or may have been updated. Explore our full catalog of available documentation services below.
              </p>
              <div class="d-flex justify-content-center gap-3">
                <a href="services.html" class="btn btn-primary-custom">
                  <span>&larr; Return to All Services</span>
                </a>
                <a href="contact.html" class="btn btn-secondary-custom">
                  <span>Contact Advisory Support</span>
                </a>
              </div>
            </div>
          </div>
        `;
      }
      document.title = 'Service Not Found | LegalEase Legal Documentation';
      return;
    }

    // Hide Not Found container, show Detail container
    if (notFoundContainer) notFoundContainer.classList.add('d-none');
    if (detailContainer) detailContainer.style.display = 'block';

    // Update document title and metadata
    document.title = `${service.title} | LegalEase Legal Documentation Services`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', `${service.title} - ${service.shortDesc} Prepared by LegalEase.`);
    }

    // Render 1: Breadcrumbs
    const breadcrumbName = document.getElementById('breadcrumb-current-name');
    if (breadcrumbName) breadcrumbName.textContent = service.title;

    // Render 2: Hero
    const heroCategory = document.getElementById('hero-service-category');
    if (heroCategory) heroCategory.textContent = service.category;

    const heroTitle = document.getElementById('hero-service-title');
    if (heroTitle) heroTitle.textContent = service.title;

    const heroDesc = document.getElementById('hero-service-desc');
    if (heroDesc) heroDesc.textContent = service.shortDesc;

    const heroImg = document.getElementById('hero-service-img');
    if (heroImg) {
      heroImg.src = service.heroImage;
      heroImg.alt = `${service.title} Documentation Preparation`;
    }

    const heroTurnaround = document.getElementById('hero-turnaround-badge');
    if (heroTurnaround) heroTurnaround.textContent = service.turnaround || '24–48 Hours';

    // Render 3: Overview
    const overviewImg = document.getElementById('overview-service-img');
    if (overviewImg) {
      overviewImg.src = service.overviewImage;
      overviewImg.alt = `${service.title} Overview & Statutory Verification`;
    }

    const overviewTitle = document.getElementById('overview-service-title');
    if (overviewTitle) {
      overviewTitle.innerHTML = `Structured Preparation for <span class="text-accent">${service.title}</span>`;
    }

    const overviewDesc = document.getElementById('overview-service-desc');
    if (overviewDesc) overviewDesc.textContent = service.detailedDesc;

    const overviewPointsList = document.getElementById('overview-points-list');
    if (overviewPointsList && Array.isArray(service.overviewPoints)) {
      overviewPointsList.innerHTML = service.overviewPoints.map(point => `
        <li class="detail-point-item">
          <span class="point-check-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </span>
          <span>${point}</span>
        </li>
      `).join('');
    }

    const statutoryNotice = document.getElementById('overview-statutory-notice');
    if (statutoryNotice) {
      statutoryNotice.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="flex-shrink-0">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        <span>${service.statutoryNotice}</span>
      `;
    }

    // Render 4: Features & Benefits
    const featuresGrid = document.getElementById('features-grid-container');
    if (featuresGrid && Array.isArray(service.features)) {
      featuresGrid.innerHTML = service.features.map(feat => `
        <div class="col-lg-4 col-md-6 reveal-on-scroll">
          <div class="detail-feature-card">
            <div class="detail-feature-icon">
              ${feat.icon}
            </div>
            <h3 class="detail-feature-title">${feat.title}</h3>
            <p class="detail-feature-desc">${feat.desc}</p>
          </div>
        </div>
      `).join('');
    }

    // Render 5: How It Works Process
    const processGrid = document.getElementById('process-steps-container');
    if (processGrid && Array.isArray(service.processSteps)) {
      processGrid.innerHTML = service.processSteps.map(step => `
        <div class="col-lg-3 col-md-6 reveal-on-scroll">
          <div class="detail-step-card">
            <div class="detail-step-header">
              <span class="detail-step-num">${step.num}</span>
              <span class="geo-square geo-square-gold geo-square-xs"></span>
            </div>
            <h3 class="detail-step-title">${step.title}</h3>
            <p class="detail-step-desc">${step.desc}</p>
          </div>
        </div>
      `).join('');
    }

    // Render 6: Pricing Plans
    const pricingGrid = document.getElementById('pricing-plans-container');
    if (pricingGrid && Array.isArray(service.pricingPlans)) {
      pricingGrid.innerHTML = service.pricingPlans.map(plan => `
        <div class="col-lg-4 col-md-6 reveal-on-scroll">
          <div class="detail-pricing-card ${plan.isRecommended ? 'pricing-featured' : ''}">
            ${plan.isRecommended ? '<span class="pricing-recommended-badge">RECOMMENDED PLAN</span>' : ''}
            <h3 class="pricing-plan-name">${plan.name}</h3>
            <p class="pricing-plan-desc">${plan.desc}</p>
            <div class="pricing-plan-price">${plan.priceLabel}</div>
            <ul class="pricing-features-list">
              ${plan.features.map(f => `
                <li class="pricing-feature-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>${f}</span>
                </li>
              `).join('')}
            </ul>
            <a href="#consultationModal" data-bs-toggle="modal" data-bs-target="#consultationModal" class="btn ${plan.isRecommended ? 'btn-primary-custom' : 'btn-secondary-custom'} pricing-card-btn">
              <span>${plan.ctaText}</span>
            </a>
          </div>
        </div>
      `).join('');
    }

    // Render 7: FAQs
    const faqAccordion = document.getElementById('serviceFaqAccordion');
    if (faqAccordion && Array.isArray(service.faqs)) {
      faqAccordion.innerHTML = service.faqs.map((faq, idx) => {
        const collapseId = `faqCollapse${idx}`;
        const isFirst = idx === 0;
        return `
          <div class="accordion-item detail-faq-item">
            <h3 class="accordion-header" id="heading${idx}">
              <button class="accordion-button detail-faq-button ${isFirst ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${isFirst ? 'true' : 'false'}" aria-controls="${collapseId}">
                ${faq.q}
              </button>
            </h3>
            <div id="${collapseId}" class="accordion-collapse collapse ${isFirst ? 'show' : ''}" aria-labelledby="heading${idx}" data-bs-parent="#serviceFaqAccordion">
              <div class="accordion-body detail-faq-body">
                ${faq.a}
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    // Configure CTA Container for Service Context
    const ctaContainer = document.getElementById('cta-container');
    if (ctaContainer && service.cta) {
      ctaContainer.dataset.eyebrow = service.cta.eyebrow || 'STREAMLINED ASSISTANCE';
      ctaContainer.dataset.headline = service.cta.headline || 'Need Dedicated Document Preparation Support?';
      ctaContainer.dataset.description = service.cta.desc || 'Get started with clear, reliable legal documentation support tailored to your requirements.';
      ctaContainer.dataset.primaryText = service.cta.primaryText || 'Book a Consultation';
      ctaContainer.dataset.secondaryText = service.cta.secondaryText || 'Explore All Services';
      ctaContainer.dataset.secondaryHref = 'services.html';
    }

    // Trigger intersection observer reveal if available
    if (typeof window.initScrollReveal === 'function') {
      window.initScrollReveal();
    }
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initServiceDetail);
  } else {
    initServiceDetail();
  }

})();

/**
 * LegalEase - Login Page Controller
 * File: js/pages/login.js
 * 
 * Features:
 * - Email format and password presence validation
 * - Password visibility toggle with SVG icon switching
 * - "Remember Me" email persistence (NO plain-text password stored)
 * - Functional Forgot Password flow with simulated reset confirmation state
 * - Clearly labelled frontend demo authentication simulation
 * - Accessible error and focus management
 */

(function () {
  'use strict';

  // Constants & Storage Keys
  const REMEMBERED_EMAIL_KEY = 'legalease_remembered_email';
  const DEMO_USER_KEY = 'legalease_demo_session';
  const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

  // DOM Elements
  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('loginEmail');
  const passwordInput = document.getElementById('loginPassword');
  const rememberCheckbox = document.getElementById('rememberMe');
  const passwordToggleBtn = document.getElementById('passwordToggleBtn');
  const submitBtn = document.getElementById('loginSubmitBtn');

  // Views & Panels
  const loginViewPanel = document.getElementById('loginViewPanel');
  const forgotViewPanel = document.getElementById('forgotViewPanel');
  const forgotForm = document.getElementById('forgotForm');
  const forgotEmailInput = document.getElementById('forgotEmail');
  const forgotSubmitBtn = document.getElementById('forgotSubmitBtn');
  const forgotBackBtn = document.getElementById('forgotBackBtn');
  const forgotTriggerBtn = document.getElementById('forgotPasswordTrigger');
  const resetSuccessState = document.getElementById('resetSuccessState');
  const resetSuccessEmail = document.getElementById('resetSuccessEmail');
  const resetBackToLoginBtn = document.getElementById('resetBackToLoginBtn');

  // Success Confirmation State Elements
  const loginSuccessPanel = document.getElementById('loginSuccessPanel');
  const loginSuccessUser = document.getElementById('loginSuccessUser');
  const demoLogoutBtn = document.getElementById('demoLogoutBtn');

  /**
   * Initialize on DOM Load
   */
  function init() {
    // 1. Check for Remembered Email
    const rememberedEmail = localStorage.getItem(REMEMBERED_EMAIL_KEY);
    if (rememberedEmail && emailInput) {
      emailInput.value = rememberedEmail;
      if (rememberCheckbox) {
        rememberCheckbox.checked = true;
      }
    }

    // 2. Setup Password Visibility Toggle
    if (passwordToggleBtn && passwordInput) {
      passwordToggleBtn.addEventListener('click', togglePasswordVisibility);
    }

    // 3. Setup Real-time Validation Listeners
    if (emailInput) {
      emailInput.addEventListener('input', () => validateEmail(emailInput));
      emailInput.addEventListener('blur', () => validateEmail(emailInput));
    }

    if (passwordInput) {
      passwordInput.addEventListener('input', () => validatePassword(passwordInput));
      passwordInput.addEventListener('blur', () => validatePassword(passwordInput));
    }

    // 4. Setup Form Submission
    if (loginForm) {
      loginForm.addEventListener('submit', handleLoginSubmit);
    }

    // 5. Setup Forgot Password Navigation
    if (forgotTriggerBtn) {
      forgotTriggerBtn.addEventListener('click', showForgotPasswordView);
    }

    if (forgotBackBtn) {
      forgotBackBtn.addEventListener('click', showLoginView);
    }

    if (resetBackToLoginBtn) {
      resetBackToLoginBtn.addEventListener('click', showLoginView);
    }

    // 6. Setup Forgot Password Form Submission
    if (forgotForm) {
      if (forgotEmailInput) {
        forgotEmailInput.addEventListener('input', () => validateEmail(forgotEmailInput));
        forgotEmailInput.addEventListener('blur', () => validateEmail(forgotEmailInput));
      }
      forgotForm.addEventListener('submit', handleForgotSubmit);
    }

    // 7. Setup Demo Logout / Reset
    if (demoLogoutBtn) {
      demoLogoutBtn.addEventListener('click', handleDemoLogout);
    }

    // 8. Setup Consultation Modal submission if opened from navbar
    const consultForm = document.getElementById('consultationForm');
    if (consultForm) {
      consultForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const submitBtn = consultForm.querySelector('button[type="submit"]');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span>Request Received!</span>';
          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span>Submit Request</span>';
            consultForm.reset();
            const modalEl = document.getElementById('consultationModal');
            if (modalEl && window.bootstrap) {
              const modal = bootstrap.Modal.getInstance(modalEl);
              if (modal) modal.hide();
            }
          }, 1000);
        }
      });
    }
  }

  /**
   * Password Visibility Toggle
   */
  function togglePasswordVisibility() {
    const isPassword = passwordInput.getAttribute('type') === 'password';
    passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
    passwordToggleBtn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
    passwordToggleBtn.setAttribute('title', isPassword ? 'Hide password' : 'Show password');

    // Swap Eye vs Eye-Off SVG
    if (isPassword) {
      passwordToggleBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
          <line x1="1" y1="1" x2="23" y2="23"></line>
        </svg>`;
    } else {
      passwordToggleBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>`;
    }
  }

  /**
   * Email Validation Helper
   */
  function validateEmail(inputEl) {
    if (!inputEl) return false;
    const value = inputEl.value.trim();
    const errorEl = document.getElementById(inputEl.id + 'Error');

    if (!value) {
      inputEl.classList.add('is-invalid');
      inputEl.classList.remove('is-valid');
      if (errorEl) {
        errorEl.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          Please enter your email address.`;
        errorEl.style.display = 'flex';
      }
      return false;
    }

    if (!EMAIL_REGEX.test(value)) {
      inputEl.classList.add('is-invalid');
      inputEl.classList.remove('is-valid');
      if (errorEl) {
        errorEl.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          Please enter a valid email address (e.g. name@domain.com).`;
        errorEl.style.display = 'flex';
      }
      return false;
    }

    inputEl.classList.remove('is-invalid');
    inputEl.classList.add('is-valid');
    if (errorEl) {
      errorEl.style.display = 'none';
    }
    return true;
  }

  /**
   * Password Validation Helper
   */
  function validatePassword(inputEl) {
    if (!inputEl) return false;
    const value = inputEl.value;
    const errorEl = document.getElementById(inputEl.id + 'Error');

    if (!value) {
      inputEl.classList.add('is-invalid');
      inputEl.classList.remove('is-valid');
      if (errorEl) {
        errorEl.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          Please enter your password.`;
        errorEl.style.display = 'flex';
      }
      return false;
    }

    if (value.length < 6) {
      inputEl.classList.add('is-invalid');
      inputEl.classList.remove('is-valid');
      if (errorEl) {
        errorEl.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          Password must be at least 6 characters long.`;
        errorEl.style.display = 'flex';
      }
      return false;
    }

    inputEl.classList.remove('is-invalid');
    inputEl.classList.add('is-valid');
    if (errorEl) {
      errorEl.style.display = 'none';
    }
    return true;
  }

  /**
   * Handle Login Form Submission (Frontend Demo Flow)
   */
  function handleLoginSubmit(e) {
    e.preventDefault();

    const isEmailValid = validateEmail(emailInput);
    const isPasswordValid = validatePassword(passwordInput);

    if (!isEmailValid || !isPasswordValid) {
      if (!isEmailValid && emailInput) {
        emailInput.focus();
      } else if (passwordInput) {
        passwordInput.focus();
      }
      return;
    }

    const email = emailInput.value.trim();

    // Handle "Remember Me" - Only store email, NEVER store passwords
    if (rememberCheckbox && rememberCheckbox.checked) {
      localStorage.setItem(REMEMBERED_EMAIL_KEY, email);
    } else {
      localStorage.removeItem(REMEMBERED_EMAIL_KEY);
    }

    // Show simulated authenticating state
    submitBtn.disabled = true;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `
      <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
      Authenticating...
    `;

    setTimeout(() => {
      // Demo session token (Frontend simulation only, no plaintext stored)
      const demoSession = {
        email: email,
        clientName: email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        signedInAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      sessionStorage.setItem(DEMO_USER_KEY, JSON.stringify(demoSession));

      // Switch to Successful Login State
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;

      showLoginSuccessState(demoSession);
    }, 700);
  }

  /**
   * Display Login Success State Card
   */
  function showLoginSuccessState(session) {
    if (!loginSuccessPanel || !loginViewPanel) return;

    if (loginSuccessUser) {
      loginSuccessUser.textContent = session.clientName || 'Valued Client';
    }

    const userEmailSpan = document.getElementById('loginSuccessEmail');
    if (userEmailSpan) {
      userEmailSpan.textContent = session.email;
    }

    loginViewPanel.classList.add('d-none');
    loginSuccessPanel.classList.remove('d-none');
  }

  /**
   * Handle Demo Logout / Reset
   */
  function handleDemoLogout(e) {
    if (e) e.preventDefault();
    sessionStorage.removeItem(DEMO_USER_KEY);
    if (passwordInput) {
      passwordInput.value = '';
      passwordInput.classList.remove('is-valid', 'is-invalid');
    }
    if (loginSuccessPanel) {
      loginSuccessPanel.classList.add('d-none');
    }
    if (loginViewPanel) {
      loginViewPanel.classList.remove('d-none');
    }
  }

  /**
   * Show Forgot Password View
   */
  function showForgotPasswordView(e) {
    if (e) e.preventDefault();
    if (loginViewPanel) loginViewPanel.classList.add('d-none');
    if (loginSuccessPanel) loginSuccessPanel.classList.add('d-none');
    if (resetSuccessState) resetSuccessState.classList.add('d-none');
    if (forgotViewPanel) {
      forgotViewPanel.classList.remove('d-none');
      if (forgotForm) forgotForm.classList.remove('d-none');
      if (forgotEmailInput) {
        // Pre-fill with current email if already typed
        if (emailInput && emailInput.value.trim()) {
          forgotEmailInput.value = emailInput.value.trim();
        }
        setTimeout(() => forgotEmailInput.focus(), 100);
      }
    }
  }

  /**
   * Show Login View
   */
  function showLoginView(e) {
    if (e) e.preventDefault();
    if (forgotViewPanel) forgotViewPanel.classList.add('d-none');
    if (loginSuccessPanel) loginSuccessPanel.classList.add('d-none');
    if (loginViewPanel) {
      loginViewPanel.classList.remove('d-none');
      if (emailInput) emailInput.focus();
    }
  }

  /**
   * Handle Forgot Password Submission (Frontend Demo)
   */
  function handleForgotSubmit(e) {
    e.preventDefault();

    if (!validateEmail(forgotEmailInput)) {
      if (forgotEmailInput) forgotEmailInput.focus();
      return;
    }

    const email = forgotEmailInput.value.trim();

    forgotSubmitBtn.disabled = true;
    const originalBtnText = forgotSubmitBtn.innerHTML;
    forgotSubmitBtn.innerHTML = `
      <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
      Processing Request...
    `;

    setTimeout(() => {
      forgotSubmitBtn.disabled = false;
      forgotSubmitBtn.innerHTML = originalBtnText;

      // Transition to reset confirmation state
      if (forgotForm) forgotForm.classList.add('d-none');
      if (resetSuccessState) {
        if (resetSuccessEmail) {
          resetSuccessEmail.textContent = email;
        }
        resetSuccessState.classList.remove('d-none');
      }
    }, 650);
  }

  // Self-execute initialization on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

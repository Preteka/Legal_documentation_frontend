/**
 * LegalEase - Sign Up Page Controller
 * File: js/pages/signup.js
 * 
 * Features:
 * - Real-time validation for Full Name, Email, Mobile Number, and Password
 * - Compact password strength feedback
 * - Password visibility toggle
 * - Frontend demo account creation simulation without plain-text storage
 * - Accessible error handling and focus management
 */

(function () {
  'use strict';

  // Regular Expressions
  const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
  const PHONE_REGEX = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,15}$/;

  // DOM Elements
  const signupForm = document.getElementById('signupForm');
  const nameInput = document.getElementById('signupName');
  const emailInput = document.getElementById('signupEmail');
  const phoneInput = document.getElementById('signupPhone');
  const passwordInput = document.getElementById('signupPassword');
  const submitBtn = document.getElementById('signupSubmitBtn');

  // Password Visibility Toggles
  const togglePasswordBtn = document.getElementById('togglePasswordBtn');

  // Password Strength Elements
  const strengthBarFill = document.getElementById('strengthBarFill');
  const strengthStatusText = document.getElementById('strengthStatusText');

  // View Panels
  const signupFormPanel = document.getElementById('signupFormPanel');
  const signupSuccessPanel = document.getElementById('signupSuccessPanel');
  const successClientEmail = document.getElementById('successClientEmail');
  const successClientPhone = document.getElementById('successClientPhone');

  /**
   * Initialize on DOM Load
   */
  function init() {
    if (togglePasswordBtn && passwordInput) {
      togglePasswordBtn.addEventListener('click', () => togglePasswordVisibility(passwordInput, togglePasswordBtn));
    }

    if (nameInput) {
      nameInput.addEventListener('input', () => validateName(nameInput));
      nameInput.addEventListener('blur', () => validateName(nameInput));
    }

    if (emailInput) {
      emailInput.addEventListener('input', () => validateEmail(emailInput));
      emailInput.addEventListener('blur', () => validateEmail(emailInput));
    }

    if (phoneInput) {
      phoneInput.addEventListener('input', () => validatePhone(phoneInput));
      phoneInput.addEventListener('blur', () => validatePhone(phoneInput));
    }

    if (passwordInput) {
      passwordInput.addEventListener('input', handlePasswordInput);
      passwordInput.addEventListener('blur', () => validatePasswordPresence(passwordInput));
    }

    if (signupForm) {
      signupForm.addEventListener('submit', handleSignupSubmit);
    }
  }

  /**
   * Toggle Password Visibility for any target input
   */
  function togglePasswordVisibility(inputEl, buttonEl) {
    const isPassword = inputEl.getAttribute('type') === 'password';
    inputEl.setAttribute('type', isPassword ? 'text' : 'password');
    buttonEl.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
    buttonEl.setAttribute('title', isPassword ? 'Hide password' : 'Show password');

    if (isPassword) {
      buttonEl.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
          <line x1="1" y1="1" x2="23" y2="23"></line>
        </svg>`;
    } else {
      buttonEl.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>`;
    }
  }

  /**
   * Full Name Validation Helper
   */
  function validateName(inputEl) {
    if (!inputEl) return false;
    const value = inputEl.value.trim();
    const errorEl = document.getElementById(inputEl.id + 'Error');

    if (!value) {
      inputEl.classList.add('is-invalid');
      inputEl.classList.remove('is-valid');
      if (errorEl) {
        errorEl.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          Please enter your full name.`;
        errorEl.style.display = 'flex';
      }
      return false;
    }

    if (value.length < 3) {
      inputEl.classList.add('is-invalid');
      inputEl.classList.remove('is-valid');
      if (errorEl) {
        errorEl.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          Name must be at least 3 characters.`;
        errorEl.style.display = 'flex';
      }
      return false;
    }

    inputEl.classList.remove('is-invalid');
    inputEl.classList.add('is-valid');
    if (errorEl) errorEl.style.display = 'none';
    return true;
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
    if (errorEl) errorEl.style.display = 'none';
    return true;
  }

  /**
   * Phone Number Validation Helper
   */
  function validatePhone(inputEl) {
    if (!inputEl) return false;
    const value = inputEl.value.trim();
    const errorEl = document.getElementById(inputEl.id + 'Error');

    if (!value) {
      inputEl.classList.add('is-invalid');
      inputEl.classList.remove('is-valid');
      if (errorEl) {
        errorEl.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          Please enter your mobile phone number.`;
        errorEl.style.display = 'flex';
      }
      return false;
    }

    const digitsOnly = value.replace(/\D/g, '');
    if (digitsOnly.length < 10 || !PHONE_REGEX.test(value)) {
      inputEl.classList.add('is-invalid');
      inputEl.classList.remove('is-valid');
      if (errorEl) {
        errorEl.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          Please enter a valid phone number (minimum 10 digits).`;
        errorEl.style.display = 'flex';
      }
      return false;
    }

    inputEl.classList.remove('is-invalid');
    inputEl.classList.add('is-valid');
    if (errorEl) errorEl.style.display = 'none';
    return true;
  }

  /**
  * Password Input Handler - Strength Calculation
   */
  function handlePasswordInput() {
    const val = passwordInput.value;
    const errorEl = document.getElementById('signupPasswordError');

    const hasMinLength = val.length >= 8;
    const hasUpper = /[A-Z]/.test(val);
    const hasNumber = /[0-9]/.test(val);
    const hasSpecial = /[^A-Za-z0-9]/.test(val);

    const score = [hasMinLength, hasUpper, hasNumber, hasSpecial].filter(Boolean).length;

    if (val.length === 0) {
      strengthBarFill.className = 'strength-bar-fill';
      strengthStatusText.textContent = 'None';
      strengthStatusText.className = 'strength-status-text';
    } else if (score <= 1) {
      strengthBarFill.className = 'strength-bar-fill weak';
      strengthStatusText.textContent = 'Weak';
      strengthStatusText.className = 'strength-status-text weak';
    } else if (score === 2) {
      strengthBarFill.className = 'strength-bar-fill fair';
      strengthStatusText.textContent = 'Fair';
      strengthStatusText.className = 'strength-status-text fair';
    } else if (score === 3) {
      strengthBarFill.className = 'strength-bar-fill good';
      strengthStatusText.textContent = 'Good';
      strengthStatusText.className = 'strength-status-text good';
    } else {
      strengthBarFill.className = 'strength-bar-fill strong';
      strengthStatusText.textContent = 'Strong';
      strengthStatusText.className = 'strength-status-text strong';
    }

    if (val.length >= 8) {
      passwordInput.classList.remove('is-invalid');
      passwordInput.classList.add('is-valid');
      if (errorEl) errorEl.style.display = 'none';
    }

  }

  /**
   * Validate Password Presence on blur
   */
  function validatePasswordPresence(inputEl) {
    const val = inputEl.value;
    const errorEl = document.getElementById(inputEl.id + 'Error');

    if (!val) {
      inputEl.classList.add('is-invalid');
      inputEl.classList.remove('is-valid');
      if (errorEl) {
        errorEl.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          Please create a secure password.`;
        errorEl.style.display = 'flex';
      }
      return false;
    }

    if (val.length < 8) {
      inputEl.classList.add('is-invalid');
      inputEl.classList.remove('is-valid');
      if (errorEl) {
        errorEl.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          Password must meet the 8+ character minimum.`;
        errorEl.style.display = 'flex';
      }
      return false;
    }

    inputEl.classList.remove('is-invalid');
    inputEl.classList.add('is-valid');
    if (errorEl) errorEl.style.display = 'none';
    return true;
  }

  /**
   * Handle Sign Up Form Submission (Frontend Demo Flow)
   */
  function handleSignupSubmit(e) {
    e.preventDefault();

    const isNameOk = validateName(nameInput);
    const isEmailOk = validateEmail(emailInput);
    const isPhoneOk = validatePhone(phoneInput);
    const isPassOk = validatePasswordPresence(passwordInput);

    const allValid = isNameOk && isEmailOk && isPhoneOk && isPassOk;

    if (!allValid) {
      // Focus first invalid element
      if (!isNameOk && nameInput) nameInput.focus();
      else if (!isEmailOk && emailInput) emailInput.focus();
      else if (!isPhoneOk && phoneInput) phoneInput.focus();
      else if (!isPassOk && passwordInput) passwordInput.focus();
      return;
    }

    const clientName = nameInput.value.trim();
    const clientEmail = emailInput.value.trim();
    const clientPhone = phoneInput.value.trim();

    // Show simulated account creation state
    submitBtn.disabled = true;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `
      <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
      Creating Account...
    `;

    setTimeout(() => {
      // Clear inputs (NO plain-text passwords stored)
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;

      // Display Success State Panel
      if (successClientEmail) successClientEmail.textContent = clientEmail;
      if (successClientPhone) successClientPhone.textContent = clientPhone;

      if (signupFormPanel) signupFormPanel.classList.add('d-none');
      if (signupSuccessPanel) signupSuccessPanel.classList.remove('d-none');
    }, 750);
  }

  // Self-execute initialization on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

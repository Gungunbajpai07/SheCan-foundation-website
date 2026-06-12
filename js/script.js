/*
  FILE: js/script.js
  Site-wide JavaScript for She Can Foundation
  - Mobile menu toggle
  - Back-to-top button visibility and action
  - Smooth anchor scrolling (enhancement)
  - Simple scroll reveal animation (adds .active to .reveal elements)
  - Basic client-side form validation for contact and volunteer forms

  Comments explain every major block for beginner developers.
*/

document.addEventListener('DOMContentLoaded', function () {
  // ----------------------
  // Set current year in footer
  // ----------------------
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ----------------------
  // Mobile navigation toggle
  // ----------------------
  var mobileToggle = document.querySelector('.mobile-toggle');
  var navList = document.querySelector('.nav-list');
  if (mobileToggle && navList) {
    mobileToggle.addEventListener('click', function () {
      var isOpen = navList.classList.toggle('open');
      // Update accessibility attribute
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // ----------------------
  // Back-to-top button
  // ----------------------
  var backToTop = document.getElementById('backToTop');
  function checkScroll() {
    if (!backToTop) return;
    if (window.scrollY > 300) backToTop.classList.add('show'); else backToTop.classList.remove('show');
  }
  window.addEventListener('scroll', checkScroll);
  checkScroll(); // initial check
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ----------------------
  // Smooth scroll for internal anchor links
  // ----------------------
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = anchor.getAttribute('href');
      // Only handle same-page anchors (ignore just '#')
      if (href && href.length > 1) {
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
          // If mobile nav is open, close it after click
          if (navList && navList.classList.contains('open')) {
            navList.classList.remove('open');
            if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
          }
        }
      }
    });
  });

  // ----------------------
  // Simple scroll reveal
  // Elements with class .reveal will be animated into view by adding .active
  // ----------------------
  var revealElements = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  function revealOnScroll() {
    if (!revealElements.length) return;
    var windowHeight = window.innerHeight;
    revealElements.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - 60) {
        el.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // ----------------------
  // Form validation helpers
  // - Attach basic client-side validation to forms if they exist
  // - On successful validation we show a friendly message and reset the form
  // - This is intentionally simple and suitable for beginners to extend
  // ----------------------
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showMessage(el, text, isError) {
    if (!el) return;
    el.textContent = text;
    el.style.color = isError ? '#c0392b' : 'var(--color-primary)';
  }

  function attachFormValidation(formId, messageId) {
    var form = document.getElementById(formId);
    var messageEl = document.getElementById(messageId);
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Gather values by common field names used in the project
      var formData = new FormData(form);
      var name = (formData.get('name') || formData.get('vname') || '').toString().trim();
      var email = (formData.get('email') || formData.get('vemail') || '').toString().trim();
      var message = (formData.get('message') || formData.get('vmessage') || '').toString().trim();

      if (!name) { showMessage(messageEl, 'Please enter your name.', true); return; }
      if (!email || !validateEmail(email)) { showMessage(messageEl, 'Please enter a valid email address.', true); return; }
      if (!message) { showMessage(messageEl, 'Please enter a message.', true); return; }

      // Simulate success (in a real site you'd send data to the server)
      showMessage(messageEl, 'Thank you — your message has been received.', false);
      form.reset();
    });
  }

  // Attach to the forms used in the templates (only if present on the page)
  attachFormValidation('contactForm', 'formMessage'); // index.html contact
  attachFormValidation('siteContactForm', 'contactFormMessage'); // contact.html
  attachFormValidation('volunteerForm', 'volFormMessage'); // volunteer.html
});

/* End of js/script.js */

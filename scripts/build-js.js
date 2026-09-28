const fs = require('fs');

const jsCode = `
/**
 * Parth Packaging — World-Class Industrial UI Interactive Client Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileDrawer();
  initQuoteModal();
  initBeforeAfterSlider();
  initRoiCalculator();
  initFaqAccordion();
  initAjaxForms();
  initConversionTracking();
});

/* 1. Mobile Drawer */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobileToggleBtn');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const closeBtn = document.getElementById('drawerCloseBtn');

  if (!toggleBtn || !drawer || !overlay) return;

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    toggleBtn.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    toggleBtn.setAttribute('aria-expanded', 'false');
  }

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/* 2. Quote Modal Dialog with Light Dismiss */
function initQuoteModal() {
  const modal = document.getElementById('quoteModal');
  if (!modal) return;

  const openTriggers = document.querySelectorAll('[data-open-quote-modal], .btn-open-quote');
  const closeBtn = modal.querySelector('.modal-close-btn');

  openTriggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (typeof modal.showModal === 'function') {
        modal.showModal();
      } else {
        modal.setAttribute('open', '');
      }
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    if (typeof modal.close === 'function') {
      modal.close();
    } else {
      modal.removeAttribute('open');
    }
    document.body.style.overflow = '';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Light dismiss: Close on backdrop click
  modal.addEventListener('click', (e) => {
    const rect = modal.getBoundingClientRect();
    const isInDialog = (
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      closeModal();
    }
  });

  modal.addEventListener('close', () => {
    document.body.style.overflow = '';
  });
}

/* 3. Before & After Interactive Slider */
function initBeforeAfterSlider() {
  const container = document.querySelector('.comparison-slider-wrap');
  if (!container) return;

  const afterWrap = container.querySelector('.comparison-image-after-wrap');
  const handle = container.querySelector('.slider-handle');
  if (!afterWrap || !handle) return;

  let isDragging = false;

  function updateSliderPosition(clientX) {
    const rect = container.getBoundingClientRect();
    let offsetX = clientX - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;

    const percentage = (offsetX / rect.width) * 100;
    afterWrap.style.width = percentage + '%';
    handle.style.left = percentage + '%';
  }

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSliderPosition(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch Support for mobile / tablets
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    if (e.touches.length > 0) {
      updateSliderPosition(e.touches[0].clientX);
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      updateSliderPosition(e.touches[0].clientX);
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });
}

/* 4. ROI Packaging Cost Savings Calculator */
function initRoiCalculator() {
  const volumeSlider = document.getElementById('calcVolumeSlider');
  const volumeDisplay = document.getElementById('calcVolumeDisplay');
  const newCostInput = document.getElementById('calcNewCost');
  const recondCostInput = document.getElementById('calcRecondCost');

  const savingsAmountDisplay = document.getElementById('calcSavingsAmount');
  const annualUnitsDisplay = document.getElementById('calcAnnualUnits');
  const annualNewSpendDisplay = document.getElementById('calcAnnualNewSpend');
  const annualRecondSpendDisplay = document.getElementById('calcAnnualRecondSpend');
  const savingsPercentBadge = document.getElementById('calcSavingsPercent');

  if (!volumeSlider || !savingsAmountDisplay) return;

  function formatINR(val) {
    return '₹ ' + Math.round(val).toLocaleString('en-IN');
  }

  function calculate() {
    const monthlyVol = parseInt(volumeSlider.value, 10) || 1000;
    const newPrice = parseFloat(newCostInput ? newCostInput.value : 850) || 850;
    const recondPrice = parseFloat(recondCostInput ? recondCostInput.value : 420) || 420;

    if (volumeDisplay) volumeDisplay.textContent = monthlyVol.toLocaleString('en-IN') + ' units / month';

    const annualVol = monthlyVol * 12;
    const newSpend = annualVol * newPrice;
    const recondSpend = annualVol * recondPrice;
    const savings = newSpend - recondSpend;
    const pct = Math.round((savings / newSpend) * 100);

    savingsAmountDisplay.textContent = formatINR(savings);
    if (annualUnitsDisplay) annualUnitsDisplay.textContent = annualVol.toLocaleString('en-IN') + ' units';
    if (annualNewSpendDisplay) annualNewSpendDisplay.textContent = formatINR(newSpend);
    if (annualRecondSpendDisplay) annualRecondSpendDisplay.textContent = formatINR(recondSpend);
    if (savingsPercentBadge) savingsPercentBadge.textContent = pct + '% Cost Reduction';
  }

  volumeSlider.addEventListener('input', calculate);
  if (newCostInput) newCostInput.addEventListener('input', calculate);
  if (recondCostInput) recondCostInput.addEventListener('input', calculate);

  // Initial computation
  calculate();
}

/* 5. FAQ Accordions */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach((item) => {
    const btn = item.querySelector('.faq-question-btn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Close sibling items in same accordion
      items.forEach((other) => {
        other.classList.remove('active');
        const otherBtn = other.querySelector('.faq-question-btn');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* 6. Advanced AJAX Form Submissions */
function initAjaxForms() {
  const quoteForms = document.querySelectorAll('form[data-ajax-quote]');
  const contactForms = document.querySelectorAll('form[data-ajax-contact]');

  quoteForms.forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const alertBox = form.querySelector('.form-alert');
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';

      if (alertBox) {
        alertBox.className = 'form-alert';
        alertBox.style.display = 'none';
        alertBox.textContent = '';
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Submitting Request...';
      }

      try {
        const formData = new FormData(form);
        const res = await fetch('/api/quote', {
          method: 'POST',
          body: formData
        });
        const result = await res.json();

        if (res.ok && result.success) {
          if (alertBox) {
            alertBox.className = 'form-alert alert-success';
            alertBox.textContent = result.message || 'Quotation request submitted successfully!';
          }
          form.reset();
          triggerConversion('quote_submission', { form_id: form.id });
        } else {
          if (alertBox) {
            alertBox.className = 'form-alert alert-danger';
            alertBox.textContent = result.error || 'Failed to submit quote request. Please try again.';
          }
        }
      } catch (err) {
        if (alertBox) {
          alertBox.className = 'form-alert alert-danger';
          alertBox.textContent = 'Network error. Please check your connection or contact our sales desk.';
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }
    });
  });

  contactForms.forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const alertBox = form.querySelector('.form-alert');
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Send Message';

      if (alertBox) {
        alertBox.className = 'form-alert';
        alertBox.style.display = 'none';
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending...';
      }

      try {
        const payload = {
          name: form.elements['name'] ? form.elements['name'].value : '',
          email: form.elements['email'] ? form.elements['email'].value : '',
          mobile: form.elements['mobile'] ? form.elements['mobile'].value : '',
          company: form.elements['company'] ? form.elements['company'].value : '',
          subject: form.elements['subject'] ? form.elements['subject'].value : '',
          message: form.elements['message'] ? form.elements['message'].value : '',
          website_url_field: form.elements['website_url_field'] ? form.elements['website_url_field'].value : ''
        };

        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const result = await res.json();

        if (res.ok && result.success) {
          if (alertBox) {
            alertBox.className = 'form-alert alert-success';
            alertBox.textContent = result.message || 'Message sent successfully!';
          }
          form.reset();
          triggerConversion('contact_submission', { form_id: form.id });
        } else {
          if (alertBox) {
            alertBox.className = 'form-alert alert-danger';
            alertBox.textContent = result.error || 'Failed to send message.';
          }
        }
      } catch (err) {
        if (alertBox) {
          alertBox.className = 'form-alert alert-danger';
          alertBox.textContent = 'Network error. Please call our office directly.';
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }
    });
  });
}

/* 7. Conversion Event Tracking */
function initConversionTracking() {
  document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
    link.addEventListener('click', () => {
      triggerConversion('phone_click', { phone: link.getAttribute('href') });
    });
  });

  document.querySelectorAll('a[href*="whatsapp.com"], a[href*="wa.me"]').forEach((link) => {
    link.addEventListener('click', () => {
      triggerConversion('whatsapp_click', { destination: 'sales_desk' });
    });
  });
}

function triggerConversion(eventName, eventParams) {
  console.log('[Analytics Event]', eventName, eventParams);
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }
  if (window.dataLayer && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: eventName, ...eventParams });
  }
}
`;

fs.writeFileSync('public/js/main.js', jsCode.trim() + '\n', 'utf8');
console.log('Created public/js/main.js');

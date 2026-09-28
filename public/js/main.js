/**
 * Parth Packaging — World-Class Industrial UI Interactive Client Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileDrawer();
  initQuoteModal();
  initCertModal();
  initHeroSlider();
  initCompatibilityFinder();
  initHotspotViewer();
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

/* 2B. MPCB Certificate Viewer Modal Dialog */
function initCertModal() {
  const modal = document.getElementById('mpcbCertModal');
  if (!modal) return;

  const openTriggers = document.querySelectorAll('[data-open-cert-modal]');
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
  const afterImg = afterWrap ? afterWrap.querySelector('img') : null;
  const handle = container.querySelector('.slider-handle');
  if (!afterWrap || !handle) return;

  function syncAfterWidth() {
    if (afterImg) {
      afterImg.style.width = container.offsetWidth + 'px';
      afterImg.style.maxWidth = container.offsetWidth + 'px';
    }
  }
  syncAfterWidth();
  window.addEventListener('resize', syncAfterWidth);

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

/* 8. Hero Banner Slider Engine */
function initHeroSlider() {
  const slider = document.getElementById('heroSliderSection');
  if (!slider) return;

  const track = slider.querySelector('.hero-slider-track');
  const slides = slider.querySelectorAll('.hero-slide');
  const dots = slider.querySelectorAll('.hero-dot-btn');
  const prevBtn = document.getElementById('heroPrevBtn');
  const nextBtn = document.getElementById('heroNextBtn');
  const controls = slider.querySelector('.hero-slider-controls');
  if (slides.length <= 1) return;

  let currentIndex = 0;
  let autoplayTimer = null;
  const slideDuration = 4800; // 4.8s brisk, visible rotation

  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;

    if (track) {
      track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
    }

    slides.forEach((slide, i) => {
      if (i === currentIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    dots.forEach((dot, i) => {
      if (i === currentIndex) {
        dot.classList.add('active');
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.classList.remove('active');
        dot.removeAttribute('aria-current');
      }
    });
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, slideDuration);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      startAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      startAutoplay();
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const target = parseInt(dot.getAttribute('data-slide-target'), 10) || 0;
      showSlide(target);
      startAutoplay();
    });
  });

  // Only pause when interacting directly with controls or buttons
  if (controls) {
    controls.addEventListener('mouseenter', stopAutoplay);
    controls.addEventListener('mouseleave', startAutoplay);
  }

  // Keyboard navigation
  slider.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      nextSlide();
      startAutoplay();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
      startAutoplay();
    }
  });

  // Touch Swipe for mobile/tablets
  let startX = 0;
  slider.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) startX = e.touches[0].clientX;
  }, { passive: true });

  slider.addEventListener('touchend', (e) => {
    if (e.changedTouches.length > 0) {
      const diffX = e.changedTouches[0].clientX - startX;
      if (diffX > 40) {
        prevSlide();
        startAutoplay();
      } else if (diffX < -40) {
        nextSlide();
        startAutoplay();
      }
    }
  }, { passive: true });

  showSlide(0);
  startAutoplay();
}

/* 9. Interactive 3-Step Chemical & Container Compatibility Wizard */
function initCompatibilityFinder() {
  const container = document.getElementById('compatibilitySection');
  if (!container) return;

  // State
  let currentStep = 1;
  let selectedMedium = 'acids';
  let selectedFormat = 'tight_head_210';
  let selectedGrade = 'grade_chem';

  const stepPills = container.querySelectorAll('.compat-step-pill');
  const stepPanels = container.querySelectorAll('.compat-step-panel');
  
  const titleEl = document.getElementById('compatContainerTitle');
  const descEl = document.getElementById('compatContainerDesc');
  const unCodeEl = document.getElementById('compatUnCode');
  const gasketEl = document.getElementById('compatGasket');
  const washEl = document.getElementById('compatWash');
  const densityEl = document.getElementById('compatDensity');
  const priceEl = document.getElementById('compatPrice');
  const savingsEl = document.getElementById('compatSavings');
  const quoteBtn = document.getElementById('compatQuoteBtn');

  // Step 1 buttons
  const mediumBtns = container.querySelectorAll('[data-compat-medium]');
  // Step 2 buttons
  const formatBtns = container.querySelectorAll('[data-compat-format]');
  // Step 3 buttons
  const gradeBtns = container.querySelectorAll('[data-compat-grade]');

  // Step navigation buttons
  const toStep2Btn = document.getElementById('compatToStep2');
  const toStep3Btn = document.getElementById('compatToStep3');
  const backToStep1Btn = document.getElementById('compatBackToStep1');
  const backToStep2Btn = document.getElementById('compatBackToStep2');

  const mediumSpecs = {
    acids: { name: 'Acids & Corrosives', wash: 'Triple Alkaline + pH Neutralize', gasket: 'EPDM Hermetic / Viton', unBase: 'UN 1H1 / Y1.9', defaultFormat: 'tight_head_210' },
    solvents: { name: 'Solvents & Volatiles', wash: 'Steam Stripped + Solvent Extraction', gasket: 'PTFE Encapsulated + Breather', unBase: 'UN 1H1 / Y1.6', defaultFormat: 'tight_head_210' },
    agrochemicals: { name: 'Agrochemicals & Pesticides', wash: 'Saponification & Rinse Loop', gasket: 'Induction Foil Cap + EPDM', unBase: 'UN 1H1 / Y1.4', defaultFormat: 'tight_head_210' },
    resins: { name: 'Paints, Inks & Resins', wash: 'Heated Caustic Polymer Stripping', gasket: 'EPDM / Nitrile Sponge Ring', unBase: 'UN 1H2 / Y1.6', defaultFormat: 'open_top_210' },
    water_treatment: { name: 'Water Treatment Chemicals', wash: 'Sanitized Recirculation Loop', gasket: 'Viton Valve Seal & 6" Cap', unBase: 'UN 31HA1 / Y', defaultFormat: 'ibc_1000' },
    surfactants: { name: 'Surfactants & Detergents', wash: 'High-Temp Anti-Foam Loop', gasket: 'Virgin Buttress + EPDM', unBase: 'UN 1H1 / Y1.8', defaultFormat: 'tight_head_210' }
  };

  const formatSpecs = {
    tight_head_210: { title: '210L Tight Head HDPE Carboy Drum', modalType: '200L HDPE Drum', modalCap: '200 Liters', price: '₹ 420 – ₹ 560', savings: '✓ Up to 52% Savings vs New Virgin Drum', desc: 'Seamless high-density polymer drum with dual 2-inch bungs. Engineered for leakproof containment of liquid chemicals, acids, and raw materials.' },
    open_top_210: { title: '210L Open Top Drum with Clamp Ring', modalType: 'Wide Mouth HDPE Carboy', modalCap: '200 Liters', price: '₹ 450 – ₹ 620', savings: '✓ Up to 48% Savings vs New Open Drum', desc: 'Full open-diameter top with removable lid, EPDM sponge gasket, and galvanized lever-action lock ring. Best for viscous coatings and resins.' },
    ibc_1000: { title: '1000L Composite IBC Container Tote', modalType: '200L HDPE Drum', modalCap: '200 Liters', price: '₹ 3,800 – ₹ 5,200', savings: '✓ Up to 58% Savings vs Brand New IBC', desc: 'High-capacity intermediate bulk container with UN-certified decontaminated HDPE bottle encased in tubular steel cage with 2" ball valve.' },
    carboy_50: { title: '50L Heavy-Duty Narrow Mouth Carboy', modalType: 'Heavy-Duty 50L Round Carboy', modalCap: '50 Liters (Standard)', price: '₹ 210 – ₹ 320', savings: '✓ Up to 50% Savings vs New Carboy', desc: 'Ergonomic dual-handle rigid carboy with tamper-evident DIN 61 cap closure. Engineered for specialty chemicals and agro formulations.' }
  };

  function updateDisplay() {
    const med = mediumSpecs[selectedMedium] || mediumSpecs.acids;
    const fmt = formatSpecs[selectedFormat] || formatSpecs.tight_head_210;

    if (titleEl) titleEl.textContent = fmt.title;
    if (descEl) descEl.textContent = fmt.desc;
    if (unCodeEl) unCodeEl.textContent = med.unBase + ' / 250';
    if (gasketEl) gasketEl.textContent = med.gasket;
    if (washEl) washEl.textContent = med.wash;
    if (densityEl) densityEl.textContent = selectedFormat === 'ibc_1000' ? '1.9 SG Max' : '1.8 - 1.9 SG';
    if (priceEl) priceEl.textContent = fmt.price;
    if (savingsEl) savingsEl.textContent = fmt.savings;

    // Update quote button attributes
    if (quoteBtn) {
      quoteBtn.setAttribute('data-prefill-container', fmt.modalType);
      quoteBtn.setAttribute('data-prefill-capacity', fmt.modalCap);
      quoteBtn.setAttribute('data-prefill-chemical', med.name);
    }
  }

  function goToStep(step) {
    currentStep = step;
    stepPanels.forEach((panel) => {
      const panelStep = parseInt(panel.getAttribute('data-step-panel'), 10);
      if (panelStep === currentStep) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });

    stepPills.forEach((pill) => {
      const pillStep = parseInt(pill.getAttribute('data-step-target'), 10);
      pill.classList.remove('active', 'completed');
      if (pillStep === currentStep) {
        pill.classList.add('active');
      } else if (pillStep < currentStep) {
        pill.classList.add('completed');
      }
    });

    updateDisplay();
  }

  // Medium buttons
  mediumBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      mediumBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedMedium = btn.getAttribute('data-compat-medium');
      // Auto suggest appropriate format
      if (mediumSpecs[selectedMedium] && mediumSpecs[selectedMedium].defaultFormat) {
        selectedFormat = mediumSpecs[selectedMedium].defaultFormat;
        formatBtns.forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-compat-format') === selectedFormat);
        });
      }
      updateDisplay();
    });
  });

  // Format buttons
  formatBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      formatBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedFormat = btn.getAttribute('data-compat-format');
      updateDisplay();
    });
  });

  // Grade buttons
  gradeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      gradeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedGrade = btn.getAttribute('data-compat-grade');
      updateDisplay();
    });
  });

  // Pill click jumps
  stepPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const step = parseInt(pill.getAttribute('data-step-target'), 10);
      if (step) goToStep(step);
    });
  });

  // Navigation button handlers
  if (toStep2Btn) toStep2Btn.addEventListener('click', () => goToStep(2));
  if (toStep3Btn) toStep3Btn.addEventListener('click', () => goToStep(3));
  if (backToStep1Btn) backToStep1Btn.addEventListener('click', () => goToStep(1));
  if (backToStep2Btn) backToStep2Btn.addEventListener('click', () => goToStep(2));

  // Pre-fill quote modal when CTA clicked
  if (quoteBtn) {
    quoteBtn.addEventListener('click', () => {
      const containerVal = quoteBtn.getAttribute('data-prefill-container');
      const capVal = quoteBtn.getAttribute('data-prefill-capacity');
      const chemVal = quoteBtn.getAttribute('data-prefill-chemical');

      const modalContainer = document.getElementById('modal_containerType');
      const modalCap = document.getElementById('modal_capacity');
      const modalChem = document.getElementById('modal_chemicalResidue');

      if (modalContainer && containerVal) modalContainer.value = containerVal;
      if (modalCap && capVal) modalCap.value = capVal;
      if (modalChem && chemVal) modalChem.value = chemVal;
    });
  }

  // Initial render
  updateDisplay();
}

/* 10. Interactive 4-Point Drum Quality Hotspot Inspection Rig */
function initHotspotViewer() {
  const container = document.getElementById('hotspotSection');
  if (!container) return;

  const stage = container.querySelector('.hotspot-stage');
  const pins = container.querySelectorAll('.hotspot-pin');
  const tabs = container.querySelectorAll('.hotspot-tab');
  const reticle = document.getElementById('hotspotReticle');
  
  const badgeEl = document.getElementById('hotspotBadge');
  const titleEl = document.getElementById('hotspotTitle');
  const descEl = document.getElementById('hotspotDesc');
  const toolEl = document.getElementById('hotspotTool');
  const toleranceEl = document.getElementById('hotspotTolerance');
  const meterLabelEl = document.getElementById('hotspotMeterLabel');
  const meterValEl = document.getElementById('hotspotMeterVal');
  const meterBarEl = document.getElementById('hotspotMeterBar');

  const spotData = {
    1: {
      pos: { top: '18%', left: '78%' },
      badge: 'QC Station #1 • Chime Drop & Rim Integrity',
      title: 'Top L-Ring & Handling Chime Structural Audit',
      desc: 'The top L-Ring bears the entire dynamic load during forklift parrot-beak manipulation, overhead hoist grabs, and double-pallet stacking. Every unit is visually inspected for radial stress whitening, rim flattening, or polymer fatigue fractures.',
      tool: 'Optical Surface Profiler & Ultrasonic Gauge',
      tolerance: '0.00% Structural Cracking (Zero Rejection)',
      meterLabel: 'CHIME RADIAL STRESS GAUGE',
      meterVal: '0.00% Defect (PASSED)',
      meterWidth: '100%'
    },
    2: {
      pos: { top: '14%', left: '35%' },
      badge: 'QC Station #2 • Closure Hermeticity & Thread Proof',
      title: 'Bung Threads & Virgin EPDM Hermetic Sealing',
      desc: '2-inch buttress and NPS threads are inspected for stripping and distortion. Brand-new food/chemical-grade virgin EPDM or Viton gaskets are refitted and torque-calibrated to 65 Nm to certify 100% fluid retention and vapor containment during transport.',
      tool: 'Digital Torque Meter & Thread Go/No-Go Gauge',
      tolerance: 'Zero Thread Stripping / 100% Hermetic Seal',
      meterLabel: 'THREAD RETENTION & TORQUE AUDIT',
      meterVal: '65.2 Nm Calibrated [100% PASS]',
      meterWidth: '100%'
    },
    3: {
      pos: { top: '50%', left: '52%' },
      badge: 'QC Station #3 • Decontamination & Wall Thickness',
      title: '360° Internal Optical Scan & Ultrasonic Wall Gauge',
      desc: 'A high-intensity flexible optical borescope inspects interior corners for chemical film, scale, or discoloration. Multi-point ultrasonic thickness gauges confirm HDPE polymer wall thickness exceeds UN Packaging Group II requirements.',
      tool: 'High-Resolution 360° Borescope + Ultrasonic NDT',
      tolerance: '100% Residue-Free (pH 6.8 - 7.2 Balanced)',
      meterLabel: 'ULTRASONIC WALL THICKNESS PROBE',
      meterVal: '2.85 mm [EXCEEDS UN MINIMUM]',
      meterWidth: '95%'
    },
    4: {
      pos: { top: '85%', left: '32%' },
      badge: 'QC Station #4 • Pneumatic Pressure Proof Testing',
      title: '30 kPa Pneumatic Pressure Decay Verification',
      desc: 'Every container is pressurized to 30.0 kPa (0.3 bar) and held under digital pressure decay transducers for 30 seconds. Immersed bubble tests and computerized air decay rate curves certify zero micro-punctures before batch QR tagging.',
      tool: 'Calibrated Pneumatic Decay Bench Transducer',
      tolerance: 'Zero Pressure Drop (0.00 kPa Loss over 30s)',
      meterLabel: '30 kPa PNEUMATIC DECAY BENCH',
      meterVal: '30.0 kPa STEADY [0.00 LEAK PASS]',
      meterWidth: '100%'
    }
  };

  function activateSpot(spotNum) {
    const data = spotData[spotNum];
    if (!data) return;

    // Trigger laser scanner sweep animation on the drum stage
    if (stage) {
      stage.classList.remove('scanning');
      void stage.offsetWidth; // Trigger reflow
      stage.classList.add('scanning');
    }

    // Move target reticle to coordinates
    if (reticle) {
      reticle.style.top = data.pos.top;
      reticle.style.left = data.pos.left;
    }

    pins.forEach((p) => {
      if (p.getAttribute('data-spot') == spotNum) {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });

    tabs.forEach((t) => {
      if (t.getAttribute('data-spot-trigger') == spotNum) {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });

    if (badgeEl) badgeEl.textContent = data.badge;
    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.desc;
    if (toolEl) toolEl.textContent = data.tool;
    if (toleranceEl) toleranceEl.textContent = data.tolerance;
    if (meterLabelEl) meterLabelEl.textContent = data.meterLabel;
    if (meterValEl) meterValEl.textContent = data.meterVal;
    if (meterBarEl) meterBarEl.style.width = data.meterWidth;
  }

  pins.forEach((pin) => {
    pin.addEventListener('click', () => {
      const spotNum = pin.getAttribute('data-spot');
      activateSpot(spotNum);
    });
  });

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const spotNum = tab.getAttribute('data-spot-trigger');
      activateSpot(spotNum);
    });
  });

  // Initialize Station 1
  activateSpot(1);
}


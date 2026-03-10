// ============================================================
// HEART DISEASE ANALYTICS — MAIN JS
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ========== LOADER ==========
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('fade-out');
      setTimeout(() => { loader.style.display = 'none'; }, 900);
    }, 3000);
  }

  // ========== NAVBAR SCROLL BEHAVIOR ==========
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // ========== AOS INIT ==========
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 80,
  });

  // ========== PARTICLES.JS ==========
  if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      particles: {
        number: { value: 60, density: { enable: true, value_area: 900 } },
        color: { value: ['#00F5D4', '#E63946', '#ffffff'] },
        shape: { type: 'circle' },
        opacity: { value: 0.15, random: true, anim: { enable: true, speed: 0.5, opacity_min: 0.05 } },
        size: { value: 2.5, random: true },
        line_linked: {
          enable: true,
          distance: 130,
          color: '#00F5D4',
          opacity: 0.06,
          width: 1
        },
        move: {
          enable: true, speed: 0.8, direction: 'none',
          random: true, straight: false, out_mode: 'out'
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
        },
        modes: {
          grab: { distance: 150, line_linked: { opacity: 0.3 } },
          push: { particles_nb: 3 }
        }
      },
      retina_detect: true
    });
  }

  // ========== GSAP HERO ANIMATIONS ==========
  gsap.registerPlugin(ScrollTrigger);

  // Hero text reveal
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const heroBtns = document.querySelector('.hero-buttons');

  if (heroTitle) {
    gsap.fromTo(heroTitle,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 3.2 }
    );
  }
  if (heroSubtitle) {
    gsap.fromTo(heroSubtitle,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 3.6 }
    );
  }
  if (heroBtns) {
    gsap.fromTo(heroBtns,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 4.0 }
    );
  }

  // ========== ANIMATED COUNTERS ==========
  const counters = document.querySelectorAll('[data-count]');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    const suffix = counter.getAttribute('data-suffix') || '';
    let current = 0;
    const increment = target / 80;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target + suffix;
              clearInterval(interval);
            } else {
              counter.textContent = Math.floor(current) + suffix;
            }
          }, 20);
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });
    observer.observe(counter);
  });

  // ========== MODAL SYSTEM ==========
  window.openModal = function(title, iframeSrc, description) {
    const modal = document.getElementById('viz-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalIframe = document.getElementById('modal-iframe');

    if (!modal) return;
    if (modalTitle) modalTitle.textContent = title;
    if (modalDesc) modalDesc.textContent = description || '';
    if (modalIframe) {
      modalIframe.src = iframeSrc;
    }
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeModal = function() {
    const modal = document.getElementById('viz-modal');
    const modalIframe = document.getElementById('modal-iframe');
    if (modal) modal.classList.remove('active');
    if (modalIframe) modalIframe.src = '';
    document.body.style.overflow = '';
  };

  // Close modal on overlay click
  const modalOverlay = document.getElementById('viz-modal');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) window.closeModal();
    });
  }

  // ========== ECG HEARTBEAT ON HERO ==========
  const ecgCanvas = document.getElementById('ecg-canvas');
  if (ecgCanvas) {
    const ctx = ecgCanvas.getContext('2d');
    let offset = 0;
    const w = ecgCanvas.width;
    const h = ecgCanvas.height;

    function drawECG() {
      ctx.clearRect(0, 0, w, h);
      ctx.beginPath();
      ctx.strokeStyle = '#00F5D4';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#00F5D4';

      const pattern = [0,0,0,0,-15,30,-15,0,0,0,0,0,0,0,0,-8,12,-8,0,0,0,0,0,0,0,0,0,0,0,0];
      const ph = h / 2;
      const pw = 10;

      for (let x = 0; x < w; x++) {
        const px = x + offset;
        const idx = Math.floor(px / pw) % pattern.length;
        const y = ph + pattern[idx];
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      offset = (offset + 2) % (pw * pattern.length);
      requestAnimationFrame(drawECG);
    }
    drawECG();
  }

  // ========== STORY SCENE SWITCHING ==========
  const sceneItems = document.querySelectorAll('.story-scene');
  sceneItems.forEach((item, i) => {
    item.addEventListener('click', () => {
      sceneItems.forEach(s => s.classList.remove('active'));
      item.classList.add('active');
      const src = item.getAttribute('data-iframe');
      const storyFrame = document.getElementById('story-iframe');
      if (storyFrame && src) storyFrame.src = src;
    });
  });

  // ========== 3D TILT ON TEAM CARDS ==========
  const teamCards = document.querySelectorAll('.team-card');
  teamCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -8;
      const rotY = ((x - cx) / cx) * 8;
      card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // ========== CONTACT FORM ==========
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      btn.textContent = 'Message Sent! ✓';
      btn.style.background = 'linear-gradient(135deg, #00F5D4, #00c4aa)';
      btn.style.color = '#0D1B2A';
      setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.style.background = '';
        btn.style.color = '';
        contactForm.reset();
      }, 3000);
    });
  }

  // ========== SCROLL PROGRESS BAR ==========
  const progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollPct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      progressBar.style.width = scrollPct + '%';
    });
  }

});

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });

    links.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('open');
        links.classList.remove('open');
      });
    });
  }

  const form = document.getElementById('subForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      const required = form.querySelectorAll('[required]');
      required.forEach(field => {
        const error = field.parentElement.querySelector('.form-error');
        if (!field.value.trim()) {
          field.classList.add('error');
          if (error) error.classList.add('visible');
          valid = false;
        } else {
          field.classList.remove('error');
          if (error) error.classList.remove('visible');
        }
      });

      const email = form.querySelector('input[type="email"]');
      if (email) {
        const err = email.parentElement.querySelector('.form-error');
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(email.value.trim())) {
          email.classList.add('error');
          if (err) { err.textContent = 'Please enter a valid email'; err.classList.add('visible'); }
          valid = false;
        }
      }

      if (valid) {
        const data = new FormData(form);
        const obj = {};
        data.forEach((v, k) => obj[k] = v);
        console.log('Form submitted:', obj);
        alert('Application submitted successfully! We will be in touch within 24 hours.');
        form.reset();
      }
    });
  }
});

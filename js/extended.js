document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.contains('nav-open');
      mainNav.classList.toggle('nav-open', !isOpen);
    });
  }

  document.addEventListener('click', (event) => {
    const dropdown = event.target.closest('.nav-dropdown');
    if (!dropdown) {
      document.querySelectorAll('.nav-dropdown').forEach((item) => item.classList.remove('open'));
      return;
    }

    if (event.target.closest('button') && dropdown.querySelector('button')) {
      event.preventDefault();
      const isOpen = dropdown.classList.contains('open');
      document.querySelectorAll('.nav-dropdown').forEach((item) => item.classList.remove('open'));
      if (!isOpen) dropdown.classList.add('open');
    }
  });

  const yearTarget = document.getElementById('year');
  if (yearTarget) yearTarget.textContent = new Date().getFullYear();
});

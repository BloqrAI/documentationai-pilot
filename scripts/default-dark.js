// Filter is dark-first: default to dark unless the reader already chose a theme with the toggle.
try {
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
  }
} catch (e) {}

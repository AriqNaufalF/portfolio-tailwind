// burger
const burger = document.querySelector('#burger');
const navMenu = document.querySelector('#nav-menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger-active');
  navMenu.classList.toggle('hidden');
});

// click outside burger
window.addEventListener('click', (e) => {
  if (e.target != navMenu && e.target != burger) {
    burger.classList.remove('burger-active');
    navMenu.classList.add('hidden');
  }
});

// navbar fixed
window.onscroll = () => {
  const header = document.querySelector('header');
  const toTop = document.getElementById('to-top');
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// dark mode toggle
const darkToggle = document.getElementById('dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', () => {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// pindah posisi toggle sesuai mode
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

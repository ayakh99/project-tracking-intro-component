import anime from 'animejs';

const toggler = document.querySelector('.nav_toggler');

toggler.addEventListener('click', () => {
  toggler.toggleAttribute('data-toggled');
});

const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

if (!mediaQuery.matches) {
  anime({
    targets: '.content_desc',
    translateX: ['-100%', 0],
    opacity: [0, 1],
    duration: 1800,
    easing: 'easeInOutCubic',
  });

  anime({
    targets: '.content_img',
    translateX: ['100%', 0],
    opacity: [0, 1],
    duration: 1800,
    easing: 'easeInOutCubic',
  });
}

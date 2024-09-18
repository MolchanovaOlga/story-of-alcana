export function initAboutTheGame() {
  const aboutSection = document.querySelector('.about-the-game');
  const offset = 100;

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight - offset && rect.top >= 0;
  }

  function onScroll() {
    if (isInViewport(aboutSection)) {
      aboutSection.classList.add('in-view');
      window.removeEventListener('scroll', onScroll);
    }
  }

  window.addEventListener('scroll', onScroll);
}

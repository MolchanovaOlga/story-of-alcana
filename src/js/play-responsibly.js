export function initPlayResponsibly() {
  const playResponsiblySection = document.querySelector(
    '.responsibly-container'
  );
  const offset = 100;

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight - offset && rect.top >= 0;
  }

  function onScroll() {
    if (isInViewport(playResponsiblySection)) {
      playResponsiblySection.classList.add('in-view');
      window.removeEventListener('scroll', onScroll);
    }
  }

  window.addEventListener('scroll', onScroll);
}

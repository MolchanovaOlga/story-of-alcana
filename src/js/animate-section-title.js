export function initSectionTitleAnimation() {
  const titles = document.querySelectorAll('.section-title');

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  function onScroll() {
    titles.forEach(title => {
      if (isInViewport(title)) {
        title.classList.add('in-view');
      }
    });
  }

  window.addEventListener('scroll', onScroll);
  onScroll();
}

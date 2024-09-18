export function initCounterAnimation() {
  const statisticSection = document.querySelector('.statistic-list');
  const ratingCounter = document.querySelector(
    '.statistic-text[data-type="rating"]'
  );
  const downloadsCounter = document.querySelector(
    '.statistic-text[data-type="downloads"]'
  );

  let animated = false;

  function animateCounter(element, start, end, duration) {
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = (end - start) * progress + start;
      element.textContent = value.toFixed(1);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  function onScroll() {
    if (isInViewport(statisticSection) && !animated) {
      animated = true;
      animateCounter(ratingCounter, 0, 4.8, 1000);
      animateCounter(downloadsCounter, 0, 50000, 1500);
    }
  }

  window.addEventListener('scroll', onScroll);
  onScroll();
}

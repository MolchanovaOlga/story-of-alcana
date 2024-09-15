document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('.play-video');

  function loadVideo(video) {
    const source = video.querySelector('source');
    const src = video.getAttribute('data-src');
    source.setAttribute('src', src);
    video.load();
  }

  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          loadVideo(entry.target);
          entry.target.play();
        }, 1000);
        observer.unobserve(entry.target);
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  videos.forEach(video => {
    observer.observe(video);
  });
});

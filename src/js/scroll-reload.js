window.addEventListener('load', function () {
  // Перевіряємо, чи є якор у URL
  if (window.location.hash) {
    // Видаляємо його для повернення сторінки до початку
    window.history.scrollRestoration = 'manual'; // Вимикаємо автоматичну прокрутку до якоря
    window.scrollTo(0, 0); // Прокручуємо сторінку на початок
  }
});

import SimpleLightbox from "simplelightbox"; // Імпорт SimpleLightbox
import "simplelightbox/dist/simple-lightbox.min.css"; // Імпорт стилів бібліотеки

/ Ініціалізація SimpleLightbox для галереї
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',       // Використання атрибуту alt як підпису
  captionDelay: 250,         // Затримка перед показом підпису
  captionPosition: 'bottom', // Розташування підпису внизу
  animationSlide: true,      // Анімація слайду при перемиканні
  animationSpeed: 300,       // Швидкість анімації
  close: true,               // Включення кнопки закриття модального вікна
  navText: ['←', '→'],       // Текст для стрілок перегортання
  loop: true,                // Повторення слайдів
  keyboard: true,            // Включення навігації клавішами
  wheel: true,               // Включення прокрутки колесом мишки
  close: true,               // Включення кнопки закриття модального вікна
  closeBackground: 'rgba(0, 0, 0, 0.5)', // Фон кнопки закриття
  closeColor: '#fff',        // Колір кнопки закриття
  closeSize: '50px',         // Розмір кнопки закриття
  closeOpacity: 0.5,         // Прозорість кнопки закриття
  closePosition: 'top-right', // Розташування кнопки закриття
  closeText: 'X',            // Текст кнопки закриття
  closeTextSize: '50px',     // Розмір тексту кнопки закриття
  closeTextBackground: 'rgba(0, 0, 0, 0.5)', // Фон тексту кнопки закриття
  closeTextColor: '#fff',    // Колір тексту кнопки закриття
  closeTextOpacity: 0.5,     // Прозорість тексту кнопки закриття
  closeTextPosition: 'center', // Розташування тексту кнопки закриття
  
});

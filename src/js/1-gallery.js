// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Створюємо масив картинок
const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

// Генерація галереї
const galleryMarkup = images.map(({ preview, original, description }) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${original}">
      <img
        class="gallery-image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>
`).join('');

// Додаємо галерею до DOM
document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = galleryMarkup;


  gallery.style.cssText = `
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Три стовпці */
    gap: 16px; /* Проміжки між картинками */
    padding: 0;
    margin: 20px auto;
    list-style: none;
    max-width: 1128px;
  `;

  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.style.cssText = `
      border-radius: 8px;
      overflow: hidden;
    `;
  });

  const galleryImages = document.querySelectorAll('.gallery-image');
  galleryImages.forEach(image => {
    image.style.cssText = `
      width: 100%;
      height: auto;
      transition: transform 0.3s ease-in-out;
      border-radius: 8px;
      // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;

    // Ефект при наведенні
    image.addEventListener('mouseover', () => {
      image.style.transform = 'scale(1.05)';
    });
    image.addEventListener('mouseout', () => {
      image.style.transform = 'scale(1)';
    });
  });

  // Ініціалізація SimpleLightbox
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captions: false, 
  });


  // Зміна стилю фону оверлею
  const overlayStyle = document.createElement('style');
  overlayStyle.innerHTML = `
    .sl-overlay {
      background: #2E2F42CC !important;
    }
  `;
  document.head.appendChild(overlayStyle);

  // Додаємо стилізацію кнопок через JavaScript
  const buttonStyles = document.createElement('style');
  buttonStyles.innerHTML = `
    .sl-prev, .sl-next, .sl-close {
      color: #ffffff !important;
    }
    .sl-prev::after, .sl-next::after, .sl-close::after {
      border-color: #ffffff !important;
    }
  `;
  document.head.appendChild(buttonStyles);

  // Зміна стилю `sl-counter`
  const counterStyle = document.createElement('style');
  counterStyle.innerHTML = `
    .sl-counter {
      color: #ffffff !important;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
      font-family: Montserrat, sans-serif;
    }
  `;
  document.head.appendChild(counterStyle);
});

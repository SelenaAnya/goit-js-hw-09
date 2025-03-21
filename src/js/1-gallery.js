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
  
  const gallery = document.querySelector('.gallery');
  

  // Стилізація тіла сторінки (body)
document.body.style.cssText = `
font-family: Arial, sans-serif;
margin: 0;
padding: 0;
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
background-color: #f4f4f4;
`;

// Створення галереї
const galleryContainer = document.createElement("ul");
galleryContainer.classList.add("gallery");
galleryContainer.style.cssText = `
display: flex;
flex-wrap: wrap;
gap: 16px;
list-style: none;
padding: 0;
margin: 0;
`;

// Додавання елементів галереї
images.forEach(({ preview, original, description }) => {
const galleryItem = document.createElement("li");
galleryItem.style.cssText = `
  flex-basis: calc(33.333% - 16px);
  overflow: hidden;
`;

const galleryLink = document.createElement("a");
galleryLink.href = original;
galleryLink.style.textDecoration = "none";

const galleryImage = document.createElement("img");
galleryImage.src = preview;
galleryImage.alt = description;
galleryImage.style.cssText = `
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;
`;

// Додавання ефекту наведення
galleryImage.addEventListener("mouseover", () => {
  galleryImage.style.transform = "scale(1.05)";
});

galleryImage.addEventListener("mouseout", () => {
  galleryImage.style.transform = "scale(1)";
});

galleryLink.appendChild(galleryImage);
galleryItem.appendChild(galleryLink);
galleryContainer.appendChild(galleryItem);
});

// Додавання галереї до body
document.body.appendChild(galleryContainer);

// Додати обробник кліку для галереї
galleryContainer.addEventListener("click", (event) => {
event.preventDefault();
const isImageEl = event.target.tagName === "IMG";
if (!isImageEl) return;

const largeImageURL = event.target.closest("a").href;
const instance = basicLightbox.create(`
  <img src="${largeImageURL}" alt="${event.target.alt}">
`);

instance.show();
});

// Оголошення об'єкта formData
let formData = { email: "", message: "" };

// Отримання посилань на елементи форми
const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageInput = form.elements.message;

// Ключ для локального сховища
const STORAGE_KEY = "feedback-form-state";

// Завантаження збережених даних з локального сховища
loadFormData();

// Відстеження змін у формі
form.addEventListener("input", onFormInput);
form.addEventListener("submit", onFormSubmit);

// Функція для збереження змін у локальному сховищі
function onFormInput(event) {
  formData[event.target.name] = event.target.value.trim(); // trim видаляє пробіли
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// Функція для завантаження даних з локального сховища
function loadFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData); // Відновлення даних
    emailInput.value = formData.email || ""; // Заповнюємо email
    messageInput.value = formData.message || ""; // Заповнюємо message
  }
}

// Функція для обробки сабміту
function onFormSubmit(event) {
  event.preventDefault(); // Забороняємо перезавантаження сторінки

  // Перевірка заповненості всіх полів
  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log("Submitted data:", formData); // Виведення об'єкта в консоль

  // Очищення
  formData = { email: "", message: "" };
  localStorage.removeItem(STORAGE_KEY);
  form.reset(); // Очищуємо поля форми
}

// ... Ваш працюючий код до стилізацій

// Стилізація форми
form.style.cssText = `
  max-width: 408px;
  padding: 24px;
  border: 2px solid #ccc;
  border-radius: 8px;
  margin: 0 auto;
//   margin-bottom: 16px;
`;

// Вибір усіх елементів форми (input, textarea, button)
const inputs = form.querySelectorAll("input, textarea, button");

// Стилізація всіх полів (input і textarea)
inputs.forEach((input) => {
  if (input.type !== "submit") {
    input.style.cssText = `
      width: 360px;
      margin-bottom: 8px;
      padding: 8px 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
      color: #808080;
      font-family: Montserrat, sans-serif;
      transition: border-color 0.3s;

    `;
  } else {
    // Стилізація кнопки
    input.style.cssText = `
      width: 95px;
      padding: 8px;
      border: none;
      border-radius: 8px;
      background-color: #4E75FF;
      color: #fff;
      font-size: 16px;
      line-height: 1.5;
      font-weight: 500;
      padding: 8px 16px;
      text-align: center;
      font-family: Montserrat, sans-serif;
      cursor: pointer;
      transition: background-color 0.3s;
      hover: #4E75FF;
      margin-top: 16px;
    `;

    input.addEventListener("mouseover", () => {
      input.style.backgroundColor = "#FFFFFF";
    });
    input.addEventListener("mouseout", () => {
      input.style.backgroundColor = "#FFFFFF";
    });
  }
});

// Стилізація тексту в label
const labels = form.querySelectorAll("label");
labels.forEach((label) => {
  label.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    width: 360px;
    // margin-bottom: 8px;
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #2E2F42;
  `;
});

const images = [
    "https://via.placeholder.com/600x400?text=Image+1",
    "https://via.placeholder.com/600x400?text=Image+2",
    "https://via.placeholder.com/600x400?text=Image+3",
  ];
  
  let currentIndex = 0;
  
  const imageElement = document.querySelector(".image");
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");
  
  function updateImage(index) {
    imageElement.src = images[index];
  }
  
  leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage(currentIndex);
  });
  
  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
  });
  
  // Початкове зображення
  updateImage(currentIndex);
  
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

document.body.style.cssText = `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f4f4f4;
`;

// Стилізація форми
form.style.cssText = `
  max-width: 90%;
  width: 408px;
  padding: 24px;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
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
      text-align: center;
      font-family: Montserrat, sans-serif;
      cursor: pointer;
      transition: background-color 0.3s;
      margin-top: 16px;
    `;

    input.addEventListener("mouseover", () => {
      input.style.backgroundColor = "#0056b3";
    });
    input.addEventListener("mouseout", () => {
      input.style.backgroundColor = "#4E75FF";
    });
  }
});

// Стилізація тексту в label
const labels = form.querySelectorAll("label");
labels.forEach((label) => {
  label.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    // width: 360px;
    margin-bottom: 8px;
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #2E2F42;
  `;
});


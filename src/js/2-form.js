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
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Вибір усіх елементів форми (input, textarea, button)
const inputs = form.querySelectorAll("input, textarea, button");

// Стилізація всіх полів (input і textarea)
inputs.forEach((input) => {
  if (input.type !== "submit") {
    input.style.cssText = `
      width: 306px;
      margin-bottom: 15px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
    `;
  } else {
    // Стилізація кнопки
    input.style.cssText = `
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 4px;
      background-color: #007BFF;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s;
    `;

    input.addEventListener("mouseover", () => {
      input.style.backgroundColor = "#0056b3";
    });
    input.addEventListener("mouseout", () => {
      input.style.backgroundColor = "#007BFF";
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
    margin-bottom: 8px;
    font-weight: bold;
    color: #333;
  `;
});
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

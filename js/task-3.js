// Отримуємо посилання на елементи input і span
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

// Додаємо обробник події input на елемент input
nameInput.addEventListener("input", () => {
  // Отримуємо значення інпуту і очищаємо його від пробілів по краях
  const trimmedValue = nameInput.value.trim();

  // Перевіряємо, чи значення порожнє або містить лише пробіли
  if (trimmedValue === "") {
    // Якщо так, то підставляємо рядок "Anonymous"
    nameOutput.textContent = "Anonymous";
  } else {
    // В іншому випадку підставляємо очищене значення
    nameOutput.textContent = trimmedValue;
  }
});

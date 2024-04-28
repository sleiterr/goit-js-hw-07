//* Task 1 Завдання 1

//numberOfCategories
const categoriesList = document.getElementById("categories"); // елементи ul за його #ID

const categoriesItems = categoriesList.querySelectorAll("li.item"); //Знаходимо всі елементи li з класом item в середині ul#categories

// Визначаємо кількість знайдених елементів
const numberOfCategories = categoriesItems.length;

console.log("Number of categories", numberOfCategories);

categoriesItems.forEach(function (item) {
  // Заголовок категорії (тег h2)
  const categoryName = item.querySelector("h2").textContent;

  const categoryElements = item.querySelectorAll("ul > li"); // знаходимо всі елементи li всередині поточної категорії

  const numberOfElements = categoryElements.length; //Визначаємо кількість знайденних елементів
  console.log("Category:", categoryName);
  console.log("Elements", numberOfElements);
});

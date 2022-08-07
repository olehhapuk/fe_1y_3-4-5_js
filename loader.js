const recipeList = document.querySelector('#recipeList');
const loader = document.querySelector('.loader');

loader.style.display = 'none'; // Ховаємо лоадер при завантаженні сторінки

function onClick() {
  loader.style.display = 'block'; // Показуємо лоадер перед запитом до апі

  fetch(
    'https://api.edamam.com/api/recipes/v2?q=chicken&app_id=79ac891a&app_key=55a6cb8b916d9185310040c273d885c8%09&type=any'
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      for (const hit of data.hits) {
        const recipe = hit.recipe;

        const recipeHtml = createRecipeItemHtml(
          recipe.image,
          recipe.label,
          recipe.calories
        );

        recipeList.innerHTML += recipeHtml;
      }
    })
    .finally(() => {
      loader.style.display = 'none'; // Ховаємо лоадер після завершення обробки запиту до апі
    });
}

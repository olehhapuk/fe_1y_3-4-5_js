let total = 0;
let input;

do {
  input = prompt('Введіть число');
  if (isNaN(input)) {
    alert('Було написано не число, спробуйте ще раз');
    continue;
  }

  total += Number(input);
} while (input !== null);

alert(total);

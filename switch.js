const money = +prompt('Введіть суму донату');
// const money = Number(prompt('Введіть суму донату'));

switch (money) {
  case 30:
    alert('Стандарт');
    break;

  case 50:
    alert('Преміум');
    break;

  case 150:
    alert('ВІП');
    break;

  default:
    break;
}

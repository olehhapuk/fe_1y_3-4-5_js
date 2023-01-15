import './styles/index.scss';

const apiUrl = 'https://jsonplaceholder.typicode.com';

fetch(apiUrl + '/posts')
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      console.error('Fetch error');
    }
  })
  .then((data) => {
    console.table(data);
  })
  .catch((err) => {
    console.log(err);
  });

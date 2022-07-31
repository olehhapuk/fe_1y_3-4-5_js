axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

axios
  .get('/posts', {
    params: {
      param: 'value',
    },
  })
  .then((res) => console.log(res.data));

axios
  .post(
    '/posts',
    {
      title: 'Test post 1',
      userId: 1,
      body: 'Lorem ipsum',
    },
    {
      params: {
        param: 'value',
      },
    }
  )
  .then((res) => console.log(res.data));

export function makePromise(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, 500);
  });
}

const languages = [
  {
    id: 'id-1',
    name: 'JavaScript',
  },
  {
    id: 'id-2',
    name: 'C#',
  },
  {
    id: 'id-3',
    name: 'Java',
  },
  {
    id: 'id-4',
    name: 'C++',
  },
  {
    id: 'id-5',
    name: 'Python',
  },
  {
    id: 'id-6',
    name: 'PHP',
  },
  {
    id: 'id-7',
    name: 'C',
  },
  {
    id: 'id-8',
    name: 'Swift',
  },
];

/**
 * Search programming language by query
 * @param {String} query Search query
 * @returns {Object|undefined} Resulted language or undefined if not found
 */
export function fetchLanguage(query) {
  const result = languages.find(
    (language) => language.name.toLowerCase() === query.toLowerCase()
  );

  return result;
}

export function fetchLanguageCallback(query, callback) {
  setTimeout(() => {
    const result = languages.find(
      (language) => language.name.toLowerCase() === query.toLowerCase()
    );

    callback(result || new Error(`${query} not found`));
  }, 700);
}

export function fetchLanguagePromise(query) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = languages.find(
        (language) => language.name.toLowerCase() === query.toLowerCase()
      );

      if (result) {
        resolve(result);
      } else {
        reject(`${query} not found`);
      }
    }, 1200);
  });
}

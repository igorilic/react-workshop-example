const delay = 500; // delay for settimeout

const books = [
  {id: 1, name: 'React book'},
  {id: 2, name: 'Redux book'},
  {id: 3, name: 'ES6 book'},
];

class MockApi {
  static getBooks() {
    return new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
      setTimeout(() => {
        resolve(books);
      }, delay);
    });
  }
}

export default MockApi;

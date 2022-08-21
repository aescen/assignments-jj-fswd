const users = [
  {
    username: 'terra',
    password: 'password123admin',
    role: 'admin',
  },
  {
    username: 'dave',
    password: 'password123member',
    role: 'member',
  },
];

const books = [
  {
    author: 'Robert Martin',
    country: 'USA',
    language: 'English',
    pages: 209,
    title: 'Clean Code',
    year: 2008,
  },
  {
    author: 'Dave Thomas & Andy Hunt',
    country: 'USA',
    language: 'English',
    pages: 784,
    title: 'The Pragmatic Programmer',
    year: 1999,
  },
  {
    author: 'Kathy Sierra, Bert Bates',
    country: 'USA',
    language: 'English',
    pages: 928,
    title: 'Head First Java',
    year: 2003,
  },
];

module.exports = { users, books };

// const backendApiUrl = 'https://librarymanagement-6lk3.onrender.com'; // production
const backendApiUrl = "https://lms-proj.onrender.com/api"; // development

const routes = {
  AUTHOR: 'author',
  AUTH: 'auth',
  BOOK: 'book',
  BORROWAL: 'borrowal',
  GENRE: 'genre',
  USER: 'user',
};

const methods = {
  GET: 'get',
  GET_ALL: 'getAll',
  POST: 'add',
  PUT: 'update',
  DELETE: 'delete',
};

const apiUrl = (route, method, id = '') => `${backendApiUrl}/${route}/${method}${id && `/${id}`}`;

module.exports = { routes, methods, apiUrl };

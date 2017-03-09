export default {
  getAll(callback) {
    callback({
      id: 1,
      firstName: 'John',
      lastName: 'Smith',
      email: 'test@gmail.com',
      description: 'about me'
    });
  }
};

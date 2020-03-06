const login = async function(uid, password) {
  setTimeout(() => {
    return {
      name: 'Thiago Lovatine',
      email: 'thiagolovatine@gmail.com',
      username: 'thiagolovatine',
    };
  }, 2500);
};

const MockAuth = {
  login,
};

export default MockAuth;

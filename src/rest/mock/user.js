import StorageHelper from '../../helpers/storage';

const info = async function() {
  const promise = new Promise((resolve, reject) => {
    StorageHelper.getItem('user_token').then(token => {
      if (token) {
        setTimeout(() => {
          resolve({
            name: 'Joseph Tester',
            email: 'josephtester@gmail.com',
            username: 'josephtester',
          });
        }, 1500);
      } else {
        setTimeout(() => {
          reject({
            message: 'user_not_loggued_in',
            status: 'error',
          });
        }, 1500);
      }
    });
  });

  return promise;
};

const MockUser = {
  info,
};

export default MockUser;

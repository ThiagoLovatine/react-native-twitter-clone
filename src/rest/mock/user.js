const info = async function(
  forceReject = true,
  rejectMessage = 'user_not_loggued_in',
) {
  const promise = new Promise((resolve, reject) => {
    if (forceReject) {
      setTimeout(() => {
        reject({
          message: rejectMessage,
          status: 'error',
        });
      }, 2000);
    } else {
      setTimeout(() => {
        resolve({
          name: 'Thiago Lovatine',
          email: 'thiagolovatine@gmail.com',
          username: 'thiagolovatine',
        });
      }, 2000);
    }
  });

  return promise;
};

const MockUser = {
  info,
};

export default MockUser;

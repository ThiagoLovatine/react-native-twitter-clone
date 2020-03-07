const login = async function(
  params,
  forceReject = false,
  rejectMessage = 'wrong_password_or_email',
) {
  const promise = new Promise((resolve, reject) => {
    if (forceReject) {
      setTimeout(() => {
        reject({
          message: rejectMessage,
          status: 'error',
        });
      }, 1500);
    } else {
      setTimeout(() => {
        resolve({
          token: Math.random(),
        });
      }, 1500);
    }
  });

  return promise;
};

const MockUser = {
  login,
};

export default MockUser;

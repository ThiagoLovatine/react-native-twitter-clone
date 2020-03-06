import config from '../constants/config';
import MockAuth from './mock/auth';
import MockUser from './mock/user';

const router = {};
const routerMock = {
  Auth: MockAuth,
  User: MockUser,
};

let RestRouter;

if (config.api_use_mock) {
  RestRouter = routerMock;
} else {
  RestRouter = router;
}
export default RestRouter;

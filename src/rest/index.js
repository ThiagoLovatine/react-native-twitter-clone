import config from '../constants/config';
import MockAuth from './mock/auth';

const router = {};
const routerMock = {
  Auth: MockAuth,
};

let RestRouter;

if (config.api_use_mock) {
  RestRouter = routerMock;
} else {
  RestRouter = router;
}
export default RestRouter;

import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);

  router.get('/user/query', controller.user.query);
  router.post('/user/login', controller.user.login);
  router.post('/user/registry', controller.user.registry);
  router.post('/user/changePassword', controller.user.changePassword);
  router.delete('/user/delete', controller.user.deleteUser);
};

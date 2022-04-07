import { Application, Context } from 'egg';

export default (options: object, app: Application) => {
  console.log('----error_handler_options----', options);
  return async function error_handler(ctx: Context, next: () => Promise<any>) {
    try {
      await next();
    } catch (error) {
      console.log('----error----', error);
      ctx.body = `${app.name} error`;
    }
  };
};

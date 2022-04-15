import { Application, Context } from 'egg';

export default (options: object, app: Application) => {
  return async function error_handler(ctx: Context, next: () => Promise<any>) {
    try {
      await next();
    } catch (Err) {
      const err:any = Err;

      if (app.config.env === 'prod') {
        // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
        app.emit('error', err, ctx);
      } else {
        console.log('----error----', err);
      }

      // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
      const status = err.status || 500;
      const error =
        status === 500 && app.config.env === 'prod'
          ? `${app.name} error`
          : err.message;

      // 从 error 对象上读出各个属性，设置到响应中
      ctx.body = { error };
      if (status === 422) {
        ctx.body.detail = err.errors;
      }
      ctx.status = status;
    }
  };
};

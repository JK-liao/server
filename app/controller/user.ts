import { Controller } from 'egg';

export default class UserController extends Controller {
  public async login() {
    const { ctx } = this;
    const user = await ctx.service.user.handle('get', { phone: '13386126957', password: 'zm13qp79' });
    if (user) {
      ctx.body = {
        code: 200,
        msg: '登陆成功',
      };
    } else {
      ctx.body = {
        code: 200,
        msg: '账号或密码错误',
      };
    }
  }
  public async registry() {
    const { ctx } = this;
    console.log('----registry----', ctx.request.body.phone);
    const isExit = await ctx.service.user.handle('get', { phone: ctx.request.body.phone });
    if (isExit) {
      ctx.body = {
        code: 200,
        msg: '注册失败，账号已存在',
      };
      return;
    }
    await ctx.service.user.handle('insert', ctx.request.body);
    ctx.body = {
      code: 200,
      msg: '注册成功',
    };
  }
  public async changePassword() {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      msg: '修改成功',
    };
  }
}

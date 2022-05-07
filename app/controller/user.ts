import { Controller } from 'egg';

export default class UserController extends Controller {
  public async query() {
    const { ctx } = this;
    const user = await ctx.service.user.handle('get', {
      phone: ctx.query.phone,
    });
    if (user) {
      ctx.body = {
        code: 200,
        msg: '查询成功',
        data: user.password,
      };
    } else {
      ctx.body = {
        code: 200,
        msg: '账号不存在',
      };
    }
  }
  public async login() {
    const { ctx } = this;
    const user = await ctx.service.user.handle('get', {
      phone: ctx.request.body.phone,
      password: ctx.request.body.password,
    });
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
    const isExit = await ctx.service.user.handle('get', {
      phone: ctx.request.body.phone,
    });
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
  public async deleteUser() {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      msg: '注销成功',
    };
  }
}

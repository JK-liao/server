import { Service } from 'egg';

export default class UserService extends Service {
  public async handle(method: string, params: any) {
    return await this.app.mysql[method]('user', params);
  }
}

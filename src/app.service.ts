import { Injectable } from '@nestjs/common'

@Injectable()
// eslint-disable-next-line no-use-before-define
export class AppService implements IAppService {
  getHello(): string {
    return 'Hello World!'
  }
}

export abstract class IAppService {
  abstract getHello(): string
}

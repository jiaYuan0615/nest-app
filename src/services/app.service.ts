import { Injectable } from '@nestjs/common';
import _ from 'lodash';

@Injectable()
export class AppService {
  getHello(): string {

    return 'Hello World!';
  }

  getHey(): string {
    return 'Hey';
  }


}

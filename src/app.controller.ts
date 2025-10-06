import { Body, Controller, Post } from '@nestjs/common';
import { PusherService } from './pusher/pusher.service';

@Controller()
export class AppController {
  constructor(
    private readonly pusherService: PusherService
  ) {}

  @Post('messages')
  async messages(
    @Body('username') username: string,
    @Body('message') message: string, 
  ) {
    await this.pusherService.trigger('chat', 'message', {
      username,
      message,
    });

    return [];
  }
}

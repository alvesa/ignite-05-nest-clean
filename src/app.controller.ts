import { Controller, Get } from '@nestjs/common'
import { IAppService } from './app.service'
import { PrismaService } from './prisma/prisma.service'
import { User } from '@prisma/client'

@Controller()
export class AppController {
  constructor(
    private readonly appService: IAppService,
    private prisma: PrismaService,
  ) {}

  @Get()
  async getHello(): Promise<User[]> {
    return await this.prisma.user.findMany()
  }
}

import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService, IAppService } from './app.service'
import { PrismaService } from './prisma/prisma.service'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: IAppService,
      useClass: AppService,
    },
    PrismaService,
  ],
})
export class AppModule {}

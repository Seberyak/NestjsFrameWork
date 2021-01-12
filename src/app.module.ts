import { Module } from '@nestjs/common';
import { AppController } from './api/app/app.controller';
import { AppService } from './core/services/app';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

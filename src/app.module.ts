import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservationModule } from './reservation/reservation.module';

@Module({
  imports: [
    ReservationModule,
    MongooseModule.forRoot('mongodb+srv://Admin:admin@cluster0.qcjb7.mongodb.net/Wanderer-api')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

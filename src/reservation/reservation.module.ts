import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';
import { ExperienceSchema } from './schemas/Experience.schema';
import { PartnerSchema } from './schemas/Partner.schema';
import { UserSchema } from './schemas/User.shema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: 'Experience',
    schema: ExperienceSchema
  }]),
  MongooseModule.forFeature([{
    name: 'User',
    schema: UserSchema
  }]),
  MongooseModule.forFeature([{
    name: 'Partner',
    schema: PartnerSchema
  }])],
  controllers: [ReservationController],
  providers: [ReservationService],
})
export class ReservationModule {}
import { Controller, Get } from '@nestjs/common';
import { Experience } from './Experience.model';
import { Partner } from './Partner.model';
import { ReservationService } from './reservation.service';

@Controller('reservation')
export class ReservationController {

  constructor(private readonly reservationService: ReservationService) {}

  @Get('experiences')
  async findAllExperiences(): Promise<Experience[]>{
      return this.reservationService.findAllExperiences();
  }

  @Get('partners')
  async findAllPartners(): Promise<Partner[]>{
      return this.reservationService.findAllPartners();
  }
}

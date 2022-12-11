import { Body, Controller, Get, Post } from '@nestjs/common';
import { Put } from '@nestjs/common/decorators';
import { CreateUserDto } from './create-user-dto.dto';
import { Experience } from './Experience.model';
import { Partner } from './Partner.model';
import { ReservationService } from './reservation.service';
import { UpdateDto } from './update-dto.dto';
import { User } from './User.model';

@Controller('reservation')
export class ReservationController {

  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  async createUser(@Body()createUserDto: CreateUserDto): Promise<User>{
    return this.reservationService.create(createUserDto);
  }

  @Get('users')
  async findAllUsers(): Promise<User[]>{
      return this.reservationService.findAllUsers();
  }

  @Get('experiences')
  async findAllExperiences(): Promise<Experience[]>{
      return this.reservationService.findAllExperiences();
  }

  @Get('partners')
  async findAllPartners(): Promise<Partner[]>{
      return this.reservationService.findAllPartners();
  }

  @Put('update-state')
  async update(@Body() updateDto: UpdateDto): Promise<void>{
      return this.reservationService.update(updateDto);
  }
}

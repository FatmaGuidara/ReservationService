import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Experience } from './Experience.model';
import { Partner } from './Partner.model';

@Injectable()
export class ReservationService {
    constructor(
        @InjectModel('Experience') private readonly experienceModel: Model<Experience>,
        @InjectModel('Partner') private readonly partnerModel: Model<Partner> 
    ){} 

    async findAllExperiences(): Promise<Experience[]>{
        return await this.experienceModel.find();
    }
    
    async findAllPartners(): Promise<Partner[]>{
        return await this.partnerModel.find();
    }
}

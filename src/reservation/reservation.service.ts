import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Experience } from './Experience.model';
import { Partner } from './Partner.model';
import { User } from './User.model';
import { CreateUserDto } from './create-user-dto.dto';
import { UpdateDto } from './update-dto.dto';

@Injectable()
export class ReservationService {
    constructor(
        @InjectModel('Experience') private readonly experienceModel: Model<Experience>,
        @InjectModel('User') private readonly userModel: Model<User>,
        @InjectModel('Partner') private readonly partnerModel: Model<Partner> 
    ){} 

    async create(item: CreateUserDto): Promise<User>{
        const newItem = new this.userModel(item);
        return await newItem.save();
    }

    async findAllUsers(): Promise<User[]>{
        return await this.userModel.find();
    }

    async findAllExperiences(): Promise<Experience[]>{
        return await this.experienceModel.find();
    }
    
    async findAllPartners(): Promise<Partner[]>{
        return await this.partnerModel.find();
    }

    async update(updateDto: UpdateDto): Promise<void>{
        const partners = await this.partnerModel.find();
        updateDto["devis"]["programme"].map(async x=>{
            const currentPartner = x["partnerId"]
            const currentTime = x["time"]
            partners.map(async p=>{
                if(p["_id"].equals(currentPartner)){
                    var i = 0
                    var tmp: Partner = p
                    p["disponibilites"].map(async d=>{
                        console.log(new Date(currentTime).getTime(),' $ ', d["date"].getTime())
                        if(new Date(currentTime).getTime() === d["date"].getTime()){
                            tmp["disponibilites"][i]["state"] = "no"
                            console.log(typeof(tmp))
                            await this.partnerModel.findByIdAndUpdate(p["_id"], tmp, {new: true})
                        }
                        i += 1;
                    })
                }
            })
        })
    }
}

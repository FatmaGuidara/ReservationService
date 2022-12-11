import * as mongoose from 'mongoose'

export interface Partner{
    id?: string;
    name: string;
    logo: string;
    insta: string;
    facebook: string;
    contact: {
        name: string,
        phone: number,
    };
    disponibilites : [{
        state: string,
        date: Date
    }]; 
    notice_reservation: number;
    notice_cancel: number;
    ExperiencesId: mongoose.Schema.Types.ObjectId[];
}
import * as mongoose from 'mongoose'

export interface Experience{
    id?: string;
    name: string;
    short_description: string;
    long_description: string;
    images: string[];
    PartnersId: mongoose.Schema.Types.ObjectId[];
    activities: string[];
}

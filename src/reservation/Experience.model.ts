import * as mongoose from 'mongoose'

export interface Experience{
    name: String,
    short_description: String,
    long_description: String,
    images: String[],
    PartnersId: mongoose.Schema.Types.ObjectId[],
    activities: String[]
}
import * as mongoose from 'mongoose'


export const ExperienceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    short_description: {
        type: String,
        required: true,
    },
    long_description: {
        type: String,
        
    },
    images: [{
        type: String,
            }],
    PartnersId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'partner'
    }],
    activities:[{
        type: String,
    }],
})
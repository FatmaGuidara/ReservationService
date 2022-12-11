import * as mongoose from 'mongoose'


export const PartnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    logo: {
        type: String,
        required: true,
    },
    insta: {
        type: String,
        required: true,
    },
    facebook: {
        type: String,
        required: true,
    }, 
    
    contact: {
        name: { type: String, trim: true,required: true,},
        phone:{type: Number, trim: true,required: true,}
    },
    disponibilites : [{
        state: { type: String,enum : ['yes','no','maybe'],default:'no', trim: true,required: true,},
        date:{type: Date, trim: true,required: true,}
    }], 
    notice_reservation: {
        type: Number,
        required: true,
    },
    notice_cancel: {
        type: Number,
        required: true,
    },
    ExperiencesId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'partner'
    }]
})
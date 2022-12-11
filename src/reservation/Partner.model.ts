import * as mongoose from 'mongoose'

export interface Partner{
    name: String,
    logo: String,
    insta: String,
    facebook: String, 
    contact: {
        name: String,
        phone: Number,
    },
    disponibilites : [{
        state: String,
        date: Date
    }], 
    notice_reservation: Number,
    notice_cancel: Number,
    ExperiencesId:[{
        type: mongoose.Schema.Types.ObjectId,
    }]
}
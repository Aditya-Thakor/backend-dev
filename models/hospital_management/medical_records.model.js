import mongoose from "mongoose";

const medicationSchema = new mongoose.Schema({
    medicines:[
        {
            type:String
        }
    ],
    doses:{
        type: String
    },
    scheduals:{
        type: String
    }
})

const medicalRecordSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required:true
    },
    medicalProblems:[
        {
            type: String,
            required:true
        }
    ],
    madications:{
        type:[medicationSchema]
    },
    progress:{
        type:String,
        required:true
    }

},{timestamps:true});

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);
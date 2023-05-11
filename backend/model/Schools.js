import mongoose, {Schema} from "mongoose";
// import bcrypt from "bcrypt"
const SchoolSchema = new mongoose.Schema({
    schoolName:{type:String },
    description:{type:String},
    alsoSchool:{type:String},
    thresholdPoints:{type:Number},
    payment:{type:String},
    discount:{type:String},
    schoolImage:{type:String},
    schooolLogo:{type:String}
})

const School = mongoose.model("School", SchoolSchema);

export default School;








    


































// SchoolSchema.pre("save",async function(nest){
//     try {
//         const salt = await bcrypt.genSalt(10) 
//         const hashPassword = await bcrypt.hash(this.password,salt)
//         this.password = hashPassword
//         nest()
//     } catch (error) {
//         nest(error)
//     }
// })
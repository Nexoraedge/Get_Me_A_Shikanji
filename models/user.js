
import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserSchema = new Schema({
    email: { type: String, required: true },
    name: { type: String },
    UserName: { type: String, required: true },
    Profile_PIC: { type: String },
    Cover_PIC: { type: String },
    Created_AT: { type: Date, default: Date.now },
    Updated_At: { type: Date, default: Date.now },
})

export default mongoose.models.User || model("User", UserSchema);
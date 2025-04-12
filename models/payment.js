import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PaymentSchema = new Schema({
    name: { type: String,  },
    to_User: { type: String,},
    oid: { type: String,  },
    message: { type: String },
    amount: { type: Number, required: true },
    Credited_AT: { type: Date, default: Date.now },
    Updated_AT: { type: Date, default: Date.now },
    done: { type: Boolean, default: false }
});


export default  mongoose.models.Payment || model("Payment", PaymentSchema);
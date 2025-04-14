"use server"
import Razorpay from "razorpay"
import Payment from "@/models/payment"
import connectDB from "@/db/connectDB"
import User from "@/models/user"

export const initiate = async (to_User, payment_form) => {
  try {
    await connectDB();

    let u = await User.findOne({ UserName: to_User });
    const secret = u.Razorpay_SECRET;

    const amount = Number(payment_form.amount);
    if (!amount || isNaN(amount) || amount <= 0) {
      throw new Error("Invalid amount");
    }

    const razorpay = new Razorpay({
      key_id: u.Razorpay_ID,
      key_secret: secret,
    });

    const options = {
      amount: Math.round(amount * 100),
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    await Payment.create({
      oid: order.id,
      amount,
      to_User,
      name: payment_form.name || "Anonymous",
      message: payment_form.message || "NO MESSAGE",
    });

    return order;
  } catch (error) {
    console.error("Payment initiation error:", error);
    throw new Error("Something went wrong while initiating payment.");
  }
};

export const fetchUser = async (username) => {
  console.log(username);

  await connectDB();
  const userm = await User.findOne({ UserName: username });
  if (!userm) return null;


  return JSON.parse(JSON.stringify(userm));
}

export const fetchPayments = async (username) => {
  try {
    await connectDB();
    //payment collected by decreasing order of amount
    let p = await Payment.find({ to_User: username, done: true }).sort({ amount: -1 }).lean();
    return p;

  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

export const updateProfile = async (formData, oldusername) => {
  await connectDB();

  // If formData is already an object (from the client component)
  const ndata = formData instanceof FormData
    ? Object.fromEntries(formData)
    : formData;

  // If the username is updated then check the username is available
  if (oldusername !== ndata.UserName) {
    let u = await User.findOne({ UserName: ndata.UserName });
    if (u) {
      return { success: false, message: "Username already exists" };
    }
  }

  try {
    // Use updateOne with the email as the identifier
    const result = await User.updateOne(
      { email: ndata.email },
      { $set: ndata }
    );

    if (result.matchedCount === 0) {
      return { success: false, message: "User not found" };
    }

    return { success: true, message: "Profile updated successfully" };
  } catch (error) {
    console.error("Error updating profile:", error);
    return { success: false, message: "Error updating profile" };
  }
}
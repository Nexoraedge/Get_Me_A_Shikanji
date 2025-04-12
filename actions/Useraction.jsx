"use server"
import Razorpay from "razorpay"
import Payment from "@/models/payment"
import connectDB from "@/db/connectDB"

export const initiate = async (to_User, payment_form) => {
  try {
    await connectDB();

    const amount = Number(payment_form.amount);
    if (!amount || isNaN(amount) || amount <= 0) {
      throw new Error("Invalid amount");
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
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
      message: payment_form.message || "",
    });

    return order;
  } catch (error) {
    console.error("Payment initiation error:", error);
    throw new Error("Something went wrong while initiating payment.");
  }
};

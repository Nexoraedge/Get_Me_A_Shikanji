import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/payment";
import connectDB from "@/db/connectDB";

export const POST = async (req) => {
  try {
    await connectDB();
    
    // Try both JSON and form data approaches
    let body;
    try {
      // First try to get JSON data
      body = await req.json();
    } catch (error) {
      // If not JSON, try form data
      const formData = await req.formData();
      body = Object.fromEntries(formData);
    }
    
    console.log("Received payment callback data:", body);
    
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;
    
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      console.error("Missing required fields:", { body });
      return NextResponse.json({ success: false, message: "Missing payment fields" }, { status: 400 });
    }
    
    const p = await Payment.findOne({ oid: razorpay_order_id });
    console.log("Payment record found:", p);
    
    if (!p) {
      return NextResponse.json({ success: false, message: "Order ID not found" }, { status: 400 });
    }
    
    // Make sure your key secret is available
    if (!process.env.RAZORPAY_KEY_SECRET) {
      console.error("RAZORPAY_KEY_SECRET is not defined");
      return NextResponse.json({ success: false, message: "Server configuration error" }, { status: 500 });
    }
    
    try {
      const isValid = validatePaymentVerification(
        {
          order_id: razorpay_order_id,
          payment_id: razorpay_payment_id, // Try this format if the other doesn't work
        },
        razorpay_signature,
        process.env.RAZORPAY_KEY_SECRET
      );
      
      console.log("Validation result:", isValid);
      
      if (isValid) {
        const updatedPayment = await Payment.findOneAndUpdate(
          { oid: razorpay_order_id },
          { done: true },
          { new: true }
        );
        
        if (!updatedPayment) {
          console.error("Payment update failed");
          return NextResponse.json({ success: false, message: "Payment update failed" }, { status: 500 });
        }
        
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_User}?Payment=true`);
      } else {
        return NextResponse.json({ success: false, message: "Payment verification failed" }, { status: 400 });
      }
    } catch (error) {
      console.error("Validation error:", error);
      return NextResponse.json({ success: false, message: "Validation error: " + error.message }, { status: 400 });
    }
  } catch (error) {
    console.error("Error in payment verification:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
};
"use client"
import React, { useState } from 'react'
import { initiate } from '@/actions/Useraction'
import { NextResponse } from 'next/server'
import Script from 'next/script'

const Paymentpage = ({ username }) => {
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [amountval, setamountval] = useState("");
    const [payment_form, setPayment_form] = useState({
        name: "",
        message: "",
        amount: ""
    });

    const set = (itna) => {
        setamountval(itna);
        setPayment_form({ ...payment_form, amount: itna });
        setErrorMsg(""); // Clear any error when amount is selected
    }

    const handleChange = (e) => {
        setPayment_form({ ...payment_form, [e.target.name]: e.target.value });
        setErrorMsg(""); // Clear any error when form is edited
    }

    // Testing mode function - simulates payment flow without real Razorpay
    const testModePay = async () => {
        try {
            setLoading(true);
            setErrorMsg("");

            // Validate fields
            if (!payment_form.amount || isNaN(payment_form.amount) || Number(payment_form.amount) <= 0) {
                setErrorMsg("Please enter a valid amount");
                setLoading(false);
                return;
            }

            // Log the test payment
            console.log("TEST MODE PAYMENT");
            console.log("Username:", username);
            console.log("Name:", payment_form.name);
            console.log("Message:", payment_form.message);
            console.log("Amount:", payment_form.amount);

            // Simulate success after 1 second
            setTimeout(() => {
                setLoading(false);
                alert("Test payment successful! In a real environment, this would process through Razorpay.");
                // Clear form after successful test payment
                setPayment_form({
                    name: "",
                    message: "",
                    amount: ""
                });
            }, 1000);

        } catch (error) {
            console.error("Test payment error:", error);
            setErrorMsg(error.message || "Test payment failed");
            setLoading(false);
        }
    }

    const pay = async () => {
        try {
            setLoading(true);
            setErrorMsg("");

            // Use test mode instead of real Razorpay for testing
            if (process.env.NEXT_PUBLIC_PAYMENT_MODE === "test") {
                await testModePay();
                return;
            }

            console.log("Running production payment flow");
            console.log("amount:", payment_form.amount);
            console.log("username:", username);

            // Check if amount is valid
            if (!payment_form.amount || isNaN(payment_form.amount) || Number(payment_form.amount) <= 0) {
                setErrorMsg("Please enter a valid amount");
                setLoading(false);
                return;
            }

            // Get order details from server
            const orderData = await initiate(username, payment_form);
            console.log("Order created:", orderData);

            if (!orderData || !orderData.id) {
                throw new Error("Invalid order data received");
            }

            if (!window.Razorpay) {
                throw new Error("Razorpay SDK not loaded. Please refresh the page.");
            }

            var options = {
                "key": process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_Y0DU1UFmSbvBY1",
                "amount": Number(payment_form.amount) * 100,
                "currency": "INR",
                "name": "Get Me A Shikanji",
                "description": "Support Payment",
                "order_id": orderData.id,
                "handler": async function (response) {
                    console.log("Payment successful:", response);

                    try {
                        // Convert Razorpay response to JSON
                        const payload = {
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_signature: response.razorpay_signature,
                        };

                        // Send as JSON instead of form data
                        const res = await fetch("/api/razorpay", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(payload),
                        });

                        console.log("Verification response status:", res.status);

                        if (res.redirected) {
                            window.location.href = res.url;
                        } else {
                            const data = await res.json();
                            console.log("Verification response:", data);
                            if (!data.success) {
                                alert("Payment verification failed: " + (data.message || "Please contact support."));
                            }
                        }
                    } catch (error) {
                        console.error("Error during verification:", error);
                        alert("Error during payment verification. Please contact support.");
                    }

                    // Clear form after payment attempt
                    setPayment_form({
                        name: "",
                        message: "",
                        amount: ""
                    });
                },
                "prefill": {
                    "name": payment_form.name || "User",
                    "email": "user@example.com",
                    "contact": "9000090000"
                },
                "theme": {
                    "color": "#3399cc"
                }
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.on('payment.failed', function (response) {
                console.error("Payment failed:", response.error);
                setErrorMsg(`Payment failed: ${response.error.description}`);
            });

            rzp1.open();
        } catch (error) {
            console.error("Payment error:", error);
            setErrorMsg(error.message || "Payment failed. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Script
                src="https://checkout.razorpay.com/v1/checkout.js"
                strategy="beforeInteractive"
                onError={() => console.error("Failed to load Razorpay script")}
            />

            <div className='w-full h-[44vh] relative '>
                <img className='w-full object-cover h-[44vh]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4977505/2f449051e8704befa3b13e91cf5aeed9/eyJ3Ijo2MjAsIndlIjoxfQ%3D%3D/7.png?token-time=1746316800&token-hash=-hD5HNqHv4rQXNkrv9bBazVka_HtSSYY3CAtSpt2tZA%3D" alt="bACKGROUND pOSTER" />
                <div className='absolute object-cover -bottom-12 right-[50%] translate-x-[50%]'>
                    <img className='w-28 h-28 rounded-full border border-[2px] border-sky-100' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/7590945/26655306517446abb46b610ce075ed4a/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/2.jpeg?token-time=1745366400&token-hash=ssRQQOHgAKmA6EJrRKrKIFU9vrRksVNinfMDcdNFUG4%3D" alt="PROFILE_pic" />
                </div>
            </div>
            <div className="info flex flex-col gap-2.5 justify-center items-center my-16 w-full">
                <div className='font-bold text-xl '>
                    @{username}
                </div>
                <div className='text-slate-400'>
                    creating Art and Animations
                </div>
                <div className='text-center text-sm tracking-tight text-slate-400'>
                    187 paid members • 118 Posts • ₹959,4/month
                </div>
                <div className="payment flex flex-col sm:flex-row mt-10 gap-3 w-[95%] md:w-[85%] xl:[80%]">
                    <div className="supporters w-full sm:w-1/2 rounded rounded-br-2xl rounded-tl-2xl py-11 px-9 blurkr">
                        <h2 className='font-semibold text-xl my-5'>Supporters</h2>
                        <ul className='px-2.5'>
                            <li className='flex items-center py-2.5 gap-x-2'> <img className='w-7 p-1 blurkr rounded-full h-fit' src="./profile.gif" alt="profile_pic" />
                                <span>Shubham Donated <span className='font-bold'>₹30</span> with a message "I am a fan, Love You"</span>
                            </li>
                            <li className='flex items-center py-2.5 gap-x-2'> <img className='w-7 p-1 blurkr rounded-full h-fit' src="./profile.gif" alt="profile_pic" />
                                <span>Shubham Donated <span className='font-bold'>₹30</span> with a message "I am a fan, Love You"</span>
                            </li>
                            <li className='flex items-center py-2.5 gap-x-2'> <img className='w-7 p-1 blurkr rounded-full h-fit' src="./profile.gif" alt="profile_pic" />
                                <span>Shubham Donated <span className='font-bold'>₹30</span> with a message "I am a fan, Love You"</span>
                            </li>
                            <li className='flex items-center py-2.5 gap-x-2'> <img className='w-7 p-1 blurkr rounded-full h-fit' src="./profile.gif" alt="profile_pic" />
                                <span>Shubham Donated <span className='font-bold'>₹30</span> with a message "I am a fan, Love You"</span>
                            </li>
                        </ul>
                    </div>
                    <div className="makepayment w-full sm:w-1/2 rounded rounded-br-2xl rounded-tl-2xl py-11 px-9 blurkr">
                        <h2 className='font-semibold text-xl my-5'>Support Us</h2>

                        {/* Show error message if any */}
                        {errorMsg && (
                            <div className="bg-red-500/20 border border-red-500 text-red-100 p-3 rounded-lg mb-4">
                                {errorMsg}
                            </div>
                        )}

                        <div className="flex flex-col gap-2">
                            <input
                                onChange={handleChange}
                                name='name'
                                value={payment_form.name}
                                type="text"
                                placeholder='Enter Name'
                                className='w-full p-3 bg-slate-800 rounded-lg'
                                disabled={loading}
                            />
                            <input
                                onChange={handleChange}
                                name='message'
                                value={payment_form.message}
                                type="text"
                                placeholder='Enter Message'
                                className='w-full p-3 bg-slate-800 rounded-lg'
                                disabled={loading}
                            />
                            <input
                                onChange={handleChange}
                                name='amount'
                                value={payment_form.amount}
                                type="text"
                                placeholder='Enter Amount'
                                className='w-full p-3 bg-slate-800 rounded-lg'
                                disabled={loading}
                            />

                            <button
                                onClick={pay}
                                disabled={loading}
                                className="relative text-lg inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hcden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#010225] to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 disabled:opacity-50">
                                <span className="relative px-5 py-2.5 transition-colors ease-in duration-150 bg-white dark:bg-gray-800 rounded-md w-full group-hover:bg-transparent group-hover:dark:bg-transparent hover:from-0% hover:to-100%">
                                    {loading ? 'Processing...' : 'Pay 💸'}
                                </span>
                            </button>

                            {/* Testing mode indicator */}
                            {process.env.NEXT_PUBLIC_PAYMENT_MODE === "test" && (
                                <div className="text-xs text-amber-400 text-center">
                                    Running in test mode
                                </div>
                            )}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                            <button onClick={() => set(10)} disabled={loading} className='bg-slate-800 p-3 rounded-lg text-slate-200 disabled:opacity-50'>Pay ₹10</button>
                            <button onClick={() => set(20)} disabled={loading} className='bg-slate-800 p-3 rounded-lg text-slate-200 disabled:opacity-50'>Pay ₹20</button>
                            <button onClick={() => set(50)} disabled={loading} className='bg-slate-800 p-3 rounded-lg text-slate-200 disabled:opacity-50'>Pay ₹50</button>
                            <button onClick={() => set(100)} disabled={loading} className='bg-slate-800 p-3 rounded-lg text-slate-200 disabled:opacity-50'>Pay ₹100</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Paymentpage
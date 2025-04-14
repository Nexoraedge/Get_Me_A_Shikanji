"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn } from "next-auth/react"
import { fetchUser, updateProfile } from '@/actions/Useraction'
import { ToastContainer, toast } from 'react-toastify';
 

const Dashboard = () => {
  const { data: session, update, status } = useSession();
  const router = useRouter();
  const notify = () => toast.success("Profile Updated Successfully🚀🚀");
  const notify2 = () => toast.error("Failed to update profile");
  const [form, setForm] = useState({
    email: "",
    UserName: "",
    Profile_PIC: "",
    Cover_PIC: "",
    Razorpay_ID: "",
    Razorpay_SECRET: ""
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the session is loading
    if (status === "loading") return;
    
    // Redirect if not authenticated
    if (status === "unauthenticated") {
      router.push('/login');
      return;
    }
    
    // Only fetch data if we have a session
    if (session?.user?.name) {
      getData();
    }

    document.title = "Dashboard 🍋 | Get Me A Shikanji";

  }, [status, router, session]);
 

  const handleSub = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      if (!session?.user?.name) return;
      
      await updateProfile(form, session.user.name);
      await update(); // Update the session
     notify();
    } catch (error) {
      console.error("Error updating profile:", error);
      notify2();
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const getData = async () => {
    try {
      setLoading(true);
      const userData = await fetchUser(session.user.name);
      if (userData) {
        setForm(userData);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  }

  if (status === "loading" || loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className='flex justify-center w-full h-full'>
       <ToastContainer
        closeOnClick
        position="top-right"
        draggable
        theme='dark'
        autoClose={2000}
        limit={3}
        />
      <div className="blurkr w-[90%] md:w-[50%] rounded-xl my-10 px-4 space-y-5 py-7 sm:px-7">
        <h1 className='text-xl sm:text-2xl md:text-3xl  w-full flex justify-center font-bold items-center'>Welcome to your Profile</h1>
        <div className="container">
          <form onSubmit={handleSub}>
            <div className='my-2'>
              <label htmlFor="email" className='block text-sm font-medium leading-6'>Email</label>
              <input 
                type="text" 
                value={form.email || ""} 
                onChange={handleChange}
                name='email' 
                id='email' 
                className='block w-full p-2 text-sky-200 bg-gray-700/60 rounded-lg' 
              />
            </div>

            <div className='my-2'>
              <label htmlFor="UserName" className='block text-sm font-medium leading-6'>Username</label>
              <input 
                type="text" 
                value={form.UserName || ""} 
                onChange={handleChange}
                name='UserName' 
                id='UserName' 
                className='block w-full p-2 text-sky-200 bg-gray-700/60 rounded-lg' 
              />
            </div>

            <div className='my-2'>
              <label htmlFor="Profile_PIC" className='block text-sm font-medium leading-6'>Profile Picture</label>
              <input 
                type="text" 
                value={form.Profile_PIC || ""} 
                onChange={handleChange}
                name='Profile_PIC' 
                id='Profile_PIC' 
                className='block w-full p-2 text-sky-200 bg-gray-700/60 rounded-lg' 
              />
            </div>

            <div className='my-2'>
              <label htmlFor="Cover_PIC" className='block text-sm font-medium leading-6'>Cover Picture</label>
              <input 
                type="text" 
                value={form.Cover_PIC || ""} 
                onChange={handleChange}
                name='Cover_PIC' 
                id='Cover_PIC' 
                className='block w-full p-2 text-sky-200 bg-gray-700/60 rounded-lg' 
              />
            </div>

            <div className='my-2'>
              <label htmlFor="Razorpay_ID" className='block text-sm font-medium leading-6'>Razorpay ID</label>
              <input 
                type="text" 
                value={form.Razorpay_ID || ""} 
                onChange={handleChange}
                name='Razorpay_ID' 
                id='Razorpay_ID' 
                className='block w-full p-2 text-sky-200 bg-gray-700/60 rounded-lg' 
              />
            </div>

            <div className='my-2'>
              <label htmlFor="Razorpay_SECRET" className='block text-sm font-medium leading-6'>Razorpay SECRET</label>
              <input 
                type="text" 
                value={form.Razorpay_SECRET || ""} 
                onChange={handleChange}
                name='Razorpay_SECRET' 
                id='Razorpay_SECRET' 
                className='block w-full p-2 text-sky-200 bg-gray-700/60 rounded-lg' 
              />
            </div>

            <button 
              type="submit"
              className="relative my-2 w-full inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#02063b] to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="relative px-5 w-full py-2.5 transition-all ease-in duration-75 hover:font-bold hover:scale-125">
                Save
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;

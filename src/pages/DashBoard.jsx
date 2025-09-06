import React from 'react'
import { useUser } from '../context/userContext'
import { supabase } from '../supabaseClient';
import { useNavigate } from "react-router-dom";


"use client";

import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { LiaBookSolid } from 'react-icons/lia';
import { FaHeadphones } from 'react-icons/fa';

function DashBoard() {
    const {user,setUser} = useUser()
    console.log(user);

const navigate = useNavigate();

const handleSignOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (!error) {
    setUser(null);
    navigate("/Login"); // ✅ handled client-side, no server fetch
  }
};



  return (
    <div className='flex flex-col h-screen'>
         <nav className='p-4 flex justify-between items-center text-center shadow-md'>
            <h1 className='text-4xl font-bold'>BookCloud</h1>

            <div className='flex justify-between gap-4 items-center'>
               <div className='w-10 h-10 border rounded-full object-contain object-center' style={{ backgroundImage: `url(${user.user_metadata?.avatar_url})` }}>

               </div>
               <button onClick={handleSignOut}>SignOut</button>
            </div>
         </nav>

         <div className='flex flex-1 px-4'>
            <Sidebar className='w-20' aria-label="Default sidebar example">
              <SidebarItems>
                <SidebarItemGroup className='flex flex-col items-center justify-between gap-6'>
                  <SidebarItem className='text-6xl font-bold shadow p-4 hover:bg-gray-100'>
                    <LiaBookSolid />
                  </SidebarItem>
                  <SidebarItem className='text-6xl font-bold shadow p-4 hover:bg-gray-100'>
                    <FaHeadphones />
                  </SidebarItem>
                </SidebarItemGroup>
              </SidebarItems>
            </Sidebar>

            <main className='flex flex-1 justify-center mt-12'>
               <h1>Upload Books here</h1>
            </main>
         </div>

          
    </div>
  )
}

export default DashBoard
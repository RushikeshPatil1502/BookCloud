import React from 'react'
import { useUser } from '../context/userContext'
import { supabase } from '../supabaseClient';

function DashBoard() {
    const {user} = useUser()
    console.log(user);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
    }

  return (
    <div className='flex flex-col'>
         <nav className='p-8 flex justify-between text-center'>
            <h1>BookCloud</h1>

            <div className='flex justify-between gap-4 items-center'>
               <div className='w-10 h-10 border rounded-full object-contain object-center' style={{ backgroundImage: `url(${user.user_metadata?.avatar_url})` }}>

               </div>
               <button onClick={handleSignOut}>SignOut</button>
            </div>
         </nav>
    </div>
  )
}

export default DashBoard
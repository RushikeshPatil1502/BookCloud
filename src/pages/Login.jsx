import "../index.css"
import { useState, useEffect } from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '../supabaseClient'
import { useUser } from "../context/userContext"
import { useNavigate } from "react-router-dom"


  export default function Login() {
    const {user} = useUser()
    const navigate = useNavigate()

    useEffect(() => {
        if(user){
          navigate("/Dashboard")
        }
    },[user])
    const [session, setSession] = useState(null)

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })

      return () => subscription.unsubscribe()
    }, [])

    const signOut = async () =>{
      const { error } = await supabase.auth.signOut()
    }

    if (!session) {
      return (
    <div className="flex h-screen items-center justify-center bg-gray-800">
      <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
    </div>
      
    )
    }
    else {
      return (
        <div>Logged in!</div>
      )
    }
  }
import "../index.css"
import { useState, useEffect } from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '../supabaseClient'


  export default function Login() {
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

    if (!session) {
      return (
    <div className="flex h-screen items-center justify-center bg-gray-800">
      <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
    </div>
      
    )
    }
    else {
      return (<div>Logged in!</div>)
    }
  }
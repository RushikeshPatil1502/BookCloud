/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import LoaderComponent from "../components/LoaderComponent";

const UserContext = createContext()

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Get current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // 2. Listen for login/logout events
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  if(loading){
    return <LoaderComponent />
  }

  return (
    <UserContext.Provider value={{user , setUser , loading}}>
           {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)


// Global useContext

// const UserContext = createContext()

// export const UserContextProvider = ({children}) => {
//       //Logic

//       return (
//         <UserContext.Provider>
//             {children}
//         </UserContext.Provider>
//       )
// }


//Custom Hook for this 
// export const useUser = () => useContext(UserContext)

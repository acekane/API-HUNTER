// cpc(Create,Provide,Consume);

import { createContext, useState } from "react";

// Create Context
export const LoginUserContext = createContext();

// Provider
export function UserLoginProvider({ children }) {
    
const [Details,SetDetails]=useState({
    isAuth: false,
      loading: false, 
      error: null,
      token: ""
})
 
  const LogInFun=(value)=>{
    SetDetails({
        isAuth: true,
        loading: false, 
        error: false,
        token: value 
    })
  }

  const LogOuFun=()=>{
    SetDetails({
        isAuth: false,
        loading: false, 
        error: false,
        token: "", 
    })
  }
  


  return (
    <LoginUserContext.Provider value={{Details,LogInFun,LogOuFun}}>
      {children}
    </LoginUserContext.Provider>
  );
}
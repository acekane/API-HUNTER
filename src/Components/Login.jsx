import React, { useContext, useState } from 'react';
import { LoginUserContext } from '../Contextapi.jsx/Userlogin';
import { Dashboard } from './Dashboard';


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [massage,SetMassage]=useState("");

  const { Details, LogInFun, LogOutFun } = useContext(LoginUserContext);

  console.log(Details);

  const handleSubmit = (e) => {
  
    e.preventDefault();
    const myObj = {
      email,
      password
    };
    console.log(myObj);

    fetch(" https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(myObj)
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.token) {
            LogInFun(data.token);
            SetMassage("Login Successful!");
           
          } else {
            SetMassage("Invalid credentials!");
            LogOutFun();
           
          }
        
      })
      .catch((err) => {
        console.log(err);
        
     
      });
  };

  return (
    <div><form data-testid="auth_form" onSubmit={handleSubmit}>
    <input
      type="email"
      data-testid="email"
      placeholder="Enter Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <br />
    <input
      type="password"
      data-testid="password"
      placeholder="Enter password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <br />
    <input type="submit"/>
    <p>{massage}</p>
  </form>
     
    </div>
  );
}

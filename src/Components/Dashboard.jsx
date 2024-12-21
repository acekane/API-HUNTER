import React, { useContext } from 'react';
import { LoginUserContext } from '../Contextapi.jsx/Userlogin';

export const Dashboard = () => {
  const { Details, LogOuFun ,LogInFun} = useContext(LoginUserContext);
  return (
    <div>
      <h3 data-testid="token">Token: {Details.token}</h3>
      <button data-testid="logout" onClick={LogOuFun}>
        LOGOUT
      </button>
    </div>
  );
};
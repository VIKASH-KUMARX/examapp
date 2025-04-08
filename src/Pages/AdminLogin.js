import React from 'react';
import { useNavigate } from 'react-router-dom';

export function AdminLogin() {
  const navigate = useNavigate();

  const goToAdminMain = () => {
    navigate('/AdminMain');
  };

  return (
    <div>
      <h2>Admin Login Page</h2>
      <button onClick={goToAdminMain}>Admin Login Submit Button</button>
    </div>
  );
}

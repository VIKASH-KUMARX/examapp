import React from 'react';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const navigate = useNavigate();

  const goToAdminLogin = () => {
    navigate('/AdminLogin');
  };

  const goToSuperAdminLogin = () => {
    navigate('/SuperAdminLogin');
  };

  const goToStudentLogin = () => {
    navigate('/StudentLogin');
  };

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={goToAdminLogin}>Admin Button</button>
      <button onClick={goToSuperAdminLogin}>SuperAdmin Button</button>
      <button onClick={goToStudentLogin}>Student Button</button>
    </div>
  );
}

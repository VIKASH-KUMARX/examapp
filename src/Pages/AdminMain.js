import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function AdminMain() {
  const [showOptions, setShowOptions] = useState(false);

  const handleStudentClick = () => {
    setShowOptions(prev => !prev);
  };

  const navigate = useNavigate();
  
  const goToYearOneStudents = () => {
    navigate('/YearOneStudents');
  };
  const goToYearTwoStudents = () => {
    navigate('/YearTwoStudents');
  };
  const goToYearThreeStudents = () => {
    navigate('/YearThreeStudents');
  };
  const goToYearFourStudents = () => {
    navigate('/YearFourStudents');
  };

  const goToAdmimCourses = () => {
    navigate('/AdminCourses');
  };

  const goToHallSeatingAllocation = () => {
    navigate('/HallSeatingAllocation');
  };

  const goToAdminStatus = () => {
    navigate('/AdminStatus');
  };

  const goToDatabaseInitialization = () => {
    navigate('/DatabaseInitialization');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Admin Main Page</h2>
      <button onClick={handleStudentClick}>Student</button>

      {showOptions && (
        <div>
          <button onClick={goToYearOneStudents}>Year 1</button>
          <button onClick={goToYearTwoStudents}>Year 2</button>
          <button onClick={goToYearThreeStudents}>Year 3</button>
          <button onClick={goToYearFourStudents}>Year 4</button>
        </div>  
        )}
        <div>
          <button onClick={goToDatabaseInitialization}>DatabaseInitialization</button>
          <button onClick={goToAdmimCourses}>Course Database</button>
          <button onClick={goToHallSeatingAllocation}>Hall Seating Allocation</button>
          <button onClick={goToAdminStatus}>Admin Status</button>
        </div>
    </div>
  );
}

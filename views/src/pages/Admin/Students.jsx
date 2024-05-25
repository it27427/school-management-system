import { useState } from 'react';

import AddStudent from '@/components/AddStudent';
import AdminLayout from '@/layouts/AdminLayout';

const Students = () => {
  const [studentName, setStudentName] = useState('');
  const [studentRegNumber, setStudentRegNumber] = useState('');
  const [studentGrade, setStudentGrade] = useState('');

  const handleAddStudent = (e) => {
    e.preventDefault();
    console.log('Student Added');
  };

  return (
    <AdminLayout>
      <div className='flex flex-col gap-6'>
        <h2 className='font-bold text-xl uppercase'>Add Students</h2>

        <AddStudent
          studentName={studentName}
          setStudentName={setStudentName}
          handleAddStudent={handleAddStudent}
          studentRegNumber={studentRegNumber}
          setStudentRegNumber={setStudentRegNumber}
          studentGrade={studentGrade}
          setStudentGrade={setStudentGrade}
        />
      </div>
    </AdminLayout>
  );
};

export default Students;

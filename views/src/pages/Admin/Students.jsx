import { useState } from 'react';

import AddStudent from '@/components/AddStudent';
import StudentsList from '@/components/StudentsList';
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
      <div className='grid gap-6 lg:grid-cols-2'>
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

        <StudentsList />
      </div>
    </AdminLayout>
  );
};

export default Students;

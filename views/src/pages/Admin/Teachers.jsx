import { useState } from 'react';

import AdminLayout from '@/layouts/AdminLayout';

import AddTeacher from '@/components/AddTeacher';
import TeachersList from '@/components/TeachersList';

const Teachers = () => {
  const [teacherName, setTeacherName] = useState('');
  const [teacherEmail, setTeacherEmail] = useState('');
  const [teacherSubject, setTeacherSubject] = useState('');

  const handleAddTeacher = (e) => {
    e.preventDefault();
    console.log('Teacher Added');
  };

  return (
    <AdminLayout>
      <div className='grid gap-6 lg:grid-cols-2'>
        <div className='flex flex-col gap-6'>
          <h2 className='font-bold text-xl uppercase'>Add Teacher</h2>

          <AddTeacher
            teacherName={teacherName}
            setTeacherName={setTeacherName}
            teacherEmail={teacherEmail}
            setTeacherEmail={setTeacherEmail}
            teacherSubject={teacherSubject}
            setTeacherSubject={setTeacherSubject}
            handleAddTeacher={handleAddTeacher}
          />
        </div>

        <TeachersList />
      </div>
    </AdminLayout>
  );
};

export default Teachers;

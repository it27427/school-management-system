import { useState } from 'react';

import AddExam from '@/components/AddExam';
import ExamsList from '@/components/ExamsList';
import AdminLayout from '@/layouts/AdminLayout';

const AdminExam = () => {
  const [name, setName] = useState('');
  const [regNumber, setRegNumber] = useState('');
  const [examClass, setExamClass] = useState('');
  const [marks, setMarks] = useState('');

  const handleAddExam = (e) => {
    e.preventDefault();
    console.log('Assignment Added');
  };

  return (
    <AdminLayout>
      <div className='grid gap-6 lg:grid-cols-2'>
        <div className='flex flex-col gap-6'>
          <h2 className='font-bold text-xl uppercase'>Exam Details</h2>

          <AddExam
            name={name}
            setName={setName}
            regNumber={regNumber}
            setRegNumber={setRegNumber}
            examClass={examClass}
            setExamClass={setExamClass}
            marks={marks}
            setMarks={setMarks}
            handleAddExam={handleAddExam}
          />
        </div>

        <ExamsList />
      </div>
    </AdminLayout>
  );
};

export default AdminExam;

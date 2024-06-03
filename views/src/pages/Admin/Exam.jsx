import { useState } from 'react';

import AddExam from '@/components/AddExam';
import ExamsList from '@/components/ExamsList';
import AdminLayout from '@/layouts/AdminLayout';

const AdminExam = () => {
  const [marks, setMarks] = useState('');
  const [exams, setExams] = useState([]);

  const handleAddExam = (e) => {
    e.preventDefault();
    console.log('Assignment Added');
  };

  return (
    <AdminLayout>
      <div className='grid gap-6 lg:grid-cols-2'>
        <div className='flex flex-col gap-6'>
          <h2 className='font-bold text-xl uppercase'>Exam Details</h2>

          <AddExam name={name} handleAddExam={handleAddExam} />
        </div>

        <ExamsList exams={exams} />
      </div>
    </AdminLayout>
  );
};

export default AdminExam;

import axios from 'axios';
import { useEffect, useState } from 'react';

import AddExam from '@/components/AddExam';
import ExamsList from '@/components/ExamsList';
import AdminLayout from '@/layouts/AdminLayout';

const AdminExam = () => {
  const [newExam, setNewExam] = useState({
    name: '',
    registrationNumber: '',
    className: '',
    marks: '',
  });
  const [exams, setExams] = useState([]);

  const fetchExams = async () => {
    try {
      const url = 'http://localhost:8080/api/v1/exam/getall';
      const response = await axios.get(url);
      if (response.data && response.data.exams) {
        setExams(response.data.exams);
      } else {
        console.error('Unexpected response structure', response);
      }
    } catch (error) {
      console.error('Exams Fetching Error', error);
    }
  };

  const handleAddNewExam = async (e) => {
    e.preventDefault();

    if (
      newExam.name.trim() !== '' &&
      newExam.registrationNumber.trim() !== '' &&
      newExam.className.trim() !== '' &&
      newExam.marks.trim() !== ''
    ) {
      try {
        const url = 'http://localhost:8080/api/v1/exam';
        const response = await axios.post(url, newExam);
        setExams([...exams, response.data.exam]);
        setNewExam({
          name: '',
          registrationNumber: '',
          className: '',
          marks: '',
        });
      } catch (error) {
        console.error('Exam Adding Error', error);
      }
    }
  };

  useEffect(() => {
    fetchExams();
  }, []);

  return (
    <AdminLayout>
      <div className='grid gap-6 lg:grid-cols-2'>
        <div className='flex flex-col gap-6'>
          <h2 className='font-bold text-xl uppercase'>Exam Details</h2>

          <AddExam
            newExam={newExam}
            setNewExam={setNewExam}
            handleAddExam={handleAddNewExam}
          />
        </div>

        <ExamsList exams={exams} />
      </div>
    </AdminLayout>
  );
};

export default AdminExam;

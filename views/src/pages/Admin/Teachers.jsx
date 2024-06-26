import axios from 'axios';
import { useEffect, useState } from 'react';

import AdminLayout from '@/layouts/AdminLayout';

import AddTeacher from '@/components/AddTeacher';
import TeachersList from '@/components/TeachersList';

const AdminTeachers = () => {
  const [newTeacher, setNewTeacher] = useState({
    name: '',
    email: '',
    subject: '',
  });
  const [teachers, setTeachers] = useState([]);

  const fetchTeachers = async () => {
    try {
      const url = 'http://localhost:8080/api/v1/teachers/getall';
      const response = await axios.get(url);
      if (response.data && response.data.teachers) {
        setTeachers(response.data.teachers);
      } else {
        console.error('Unexpected response structure', response);
      }
    } catch (error) {
      console.error('Teachers Fetching Error', error);
    }
  };

  const handleAddNewTeacher = async (e) => {
    e.preventDefault();

    if (
      newTeacher.name !== '' &&
      newTeacher.email !== '' &&
      newTeacher.subject !== ''
    ) {
      try {
        const url = 'http://localhost:8080/api/v1/teachers';
        const response = await axios.post(url, newTeacher);
        setTeachers([...teachers, response.data.teacher]);
        setNewTeacher({ name: '', email: '', subject: '' });
      } catch (error) {
        console.error('Teacher Adding Error', error);
      }
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  return (
    <AdminLayout>
      <div className='grid gap-6 lg:grid-cols-2'>
        <div className='flex flex-col gap-6'>
          <h2 className='font-bold text-xl uppercase'>Add Teacher</h2>

          <AddTeacher
            newTeacher={newTeacher}
            setNewTeacher={setNewTeacher}
            handleAddTeacher={handleAddNewTeacher}
          />
        </div>

        <TeachersList teachers={teachers} />
      </div>
    </AdminLayout>
  );
};

export default AdminTeachers;

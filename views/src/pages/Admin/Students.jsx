import axios from 'axios';
import { useEffect, useState } from 'react';

import AdminLayout from '@/layouts/AdminLayout';

import Button from '@/components/Button';
import Card from '@/components/Card';
import Form from '@/components/Form';
import InputField from '@/components/InputField';

const Students = () => {
  const [newStudent, setNewStudent] = useState({
    name: '',
    regNumber: '',
    grade: '',
  });
  const [students, setStudents] = useState('');

  const fetchStudents = async () => {
    try {
      const url = 'http://localhost:8080/api/v1/students/getall';
      const response = await axios.get(url);
      setNewStudent(response.data.students);
    } catch (error) {
      console.error('Students Fetching Error', error);
    }
  };

  const fetchAnnouncements = async () => {
    try {
      const url = 'http://localhost:8080/api/v1/announcement/getall';
      const response = await axios.get(url);
      setAnnouncements(response.data.announcements || []);
      console.log(response.data.announcements);
    } catch (error) {
      console.error('Announcement Fetching Error', error);
    }
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    console.log('Student Added');
  };

  useEffect(() => {}, []);

  return (
    <AdminLayout>
      <div className='grid gap-6 lg:grid-cols-2'>
        <div className='flex flex-col gap-6'>
          <h2 className='font-bold text-xl uppercase'>Add Students</h2>

          <Card>
            <Form
              onSubmit={handleAddStudent}
              className='flex flex-col gap-4 max-w-xs md:max-w-md'
            >
              <InputField
                type='text'
                id='studentname'
                name='studentname'
                className='input input-bordered w-full'
                // onChange={(e) => setStudentName(e.target.value)}
                placeholder='Enter Student Name'
                // value={studentName}
              />

              <InputField
                type='text'
                id='studregnumber'
                name='studregnumber'
                className='input input-bordered w-full'
                // onChange={(e) => setStudentRegNumber(e.target.value)}
                placeholder='Enter Registration Number'
                // value={studentRegNumber}
              />

              <InputField
                type='text'
                id='studgrade'
                name='studgrade'
                className='input input-bordered w-full'
                // onChange={(e) => setStudentGrade(e.target.value)}
                placeholder='Enter Student Grade'
                // value={studentGrade}
              />

              <div className='flex justify-end'>
                <Button type='submit' className='btn btn-primary'>
                  Add Student
                </Button>
              </div>
            </Form>
          </Card>
        </div>

        <div className='flex flex-col gap-6'>
          <h2 className='font-bold text-xl uppercase'>Students List</h2>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Students;

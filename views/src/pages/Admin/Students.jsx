import axios from 'axios';
import { useEffect, useState } from 'react';

import AdminLayout from '@/layouts/AdminLayout';

import Button from '@/components/Button';
import Card from '@/components/Card';
import Form from '@/components/Form';
import InputField from '@/components/InputField';

const AdminStudents = () => {
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
      setStudents(response.data.students);
    } catch (error) {
      console.error('Students Fetching Error', error);
    }
  };

  const handleAddNewStudent = async (e) => {
    e.preventDefault();

    if (
      newStudent.name.trim() !== '' &&
      newStudent.regNumber.trim() !== '' &&
      newStudent.grade.trim() !== ''
    ) {
      try {
        const url = 'http://localhost:8080/api/v1/students';
        const response = await axios.post(url, newStudent);
        console.log(response.data);
        setStudents([...students, response.data.student]);
        setNewStudent({ name: '', regNumber: '', grade: '' });
      } catch (error) {
        console.error('Student Fetching Error', error);
      }
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <AdminLayout>
      <div className='grid gap-6 lg:grid-cols-2'>
        <div className='flex flex-col gap-6'>
          <h2 className='font-bold text-xl uppercase'>Add Students</h2>

          <Card>
            <Form
              onSubmit={handleAddNewStudent}
              className='flex flex-col gap-4 max-w-xs md:max-w-md'
            >
              <InputField
                type='text'
                id='studentname'
                name='studentname'
                className='input input-bordered w-full'
                onChange={(e) =>
                  setNewStudent({ ...newStudent, name: e.target.value })
                }
                placeholder='Enter Student Name'
                value={newStudent.name}
              />

              <InputField
                type='text'
                id='studregnumber'
                name='studregnumber'
                className='input input-bordered w-full'
                onChange={(e) =>
                  setNewStudent({ ...newStudent, regNumber: e.target.value })
                }
                placeholder='Enter Registration Number'
                value={newStudent.regNumber}
              />

              <InputField
                type='text'
                id='studgrade'
                name='studgrade'
                className='input input-bordered w-full'
                onChange={(e) =>
                  setNewStudent({ ...newStudent, grade: e.target.value })
                }
                placeholder='Enter Student Grade'
                value={newStudent.grade}
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

          <ul>
            {students.map((student, index) => (
              <li key={index}>
                <span>Name: {student.name}</span>
                <span>Registration Number: {student.regNumber}</span>
                <span>Grade: {student.grade}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminStudents;

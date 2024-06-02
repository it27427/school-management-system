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
    registrationNumber: '',
    grade: '',
  });
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const url = 'http://localhost:8080/api/v1/students/getall';
      const response = await axios.get(url);
      if (response.data && response.data.students) {
        setStudents(response.data.students);
      } else {
        console.error('Unexpected response structure', response);
      }
    } catch (error) {
      console.error('Students Fetching Error', error);
    }
  };

  const handleAddNewStudent = async (e) => {
    e.preventDefault();

    if (
      newStudent.name.trim() !== '' &&
      newStudent.registrationNumber.trim() !== '' &&
      newStudent.grade.trim() !== ''
    ) {
      try {
        const url = 'http://localhost:8080/api/v1/students';
        const response = await axios.post(url, newStudent);
        console.log(response.data);
        setStudents([...students, response.data.student]);
        setNewStudent({ name: '', registrationNumber: '', grade: '' });
      } catch (error) {
        console.error('Student Adding Error', error);
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
              className='flex flex-col gap-4 md:max-w-md'
            >
              <InputField
                type='text'
                id='name'
                name='name'
                className='input input-bordered w-full'
                onChange={(e) =>
                  setNewStudent({ ...newStudent, name: e.target.value })
                }
                placeholder='Enter Student Name'
                value={newStudent.name}
              />

              <InputField
                type='text'
                id='registrationNumber'
                name='registrationNumber'
                className='input input-bordered w-full'
                onChange={(e) =>
                  setNewStudent({
                    ...newStudent,
                    registrationNumber: e.target.value,
                  })
                }
                placeholder='Enter Registration Number'
                value={newStudent.registrationNumber}
              />

              <InputField
                type='text'
                id='grade'
                name='grade'
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

          <Card>
            <div className='lg:max-h-64 overflow-hidden lg:overflow-y-scroll'>
              <table className='table'>
                <thead className='sticky top-0 w-full bg-white'>
                  <tr>
                    <th>Name</th>
                    <th>Registration Number</th>
                    <th>Grade</th>
                  </tr>
                </thead>

                <tbody>
                  {students.map((student, index) => (
                    <tr key={index}>
                      <td>{student.name}</td>
                      <td>{student.registrationNumber}</td>
                      <td>{student.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminStudents;

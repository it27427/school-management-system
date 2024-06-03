import axios from 'axios';
import { useEffect, useState } from 'react';

import AddAssignment from '@/components/AddAssignment';
import AssignmentList from '@/components/AssignmentList';
import AdminLayout from '@/layouts/AdminLayout';

const AdminAssignment = () => {
  const [newAssignment, setNewAssignment] = useState({
    title: '',
    description: '',
    grade: '',
    deadline: '',
  });
  const [assignments, setAssignments] = useState([]);

  const fetchAssignments = async () => {
    try {
      const url = 'http://localhost:8080/api/v1/assignment/getall';
      const response = await axios.get(url);
      if (response.data && response.data.assignments) {
        setAssignments(response.data.assignments);
      } else {
        console.error('Unexpected response structure', response);
      }
    } catch (error) {
      console.error('Assignments Fetching Error', error);
    }
  };

  const handleAddNewAssignment = async (e) => {
    e.preventDefault();

    if (
      newAssignment.title.trim() !== '' &&
      newAssignment.description.trim() !== '' &&
      newAssignment.grade.trim() !== '' &&
      newAssignment.deadline.trim() !== ''
    ) {
      try {
        const url = 'http://localhost:8080/api/v1/assignment';
        const response = await axios.post(url, newAssignment);
        setAssignments([...assignments, response.data.assignment]);
        setNewAssignment({
          title: '',
          description: '',
          grade: '',
          deadline: '',
        });
      } catch (error) {
        console.error('Assignment Adding Error', error);
      }
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <AdminLayout>
      <div className='grid gap-6 lg:grid-cols-2'>
        <div className='flex flex-col gap-6'>
          <h2 className='font-bold text-xl uppercase'>Add Assignment</h2>

          <AddAssignment
            newAssignment={newAssignment}
            setNewAssignment={setNewAssignment}
            handleAddAssignment={handleAddNewAssignment}
          />
        </div>

        <AssignmentList assignments={assignments} />
      </div>
    </AdminLayout>
  );
};

export default AdminAssignment;

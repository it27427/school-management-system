import { useState } from 'react';

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

  const handleAddNewAssignment = (e) => {
    e.preventDefault();
    console.log('Assignment Added');
  };

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

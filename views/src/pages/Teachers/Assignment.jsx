import TeacherLayout from '@/layouts/TeacherLayout';
import { useState } from 'react';

import AddAssignment from '@/components/AddAssignment';
import AssignmentList from '@/components/AssignmentList';

const Assignment = () => {
  const [assignmentTitle, setAssignmentTitle] = useState('');
  const [assignmentDescription, setAssignmentDescription] = useState('');
  const [assignmentGrade, setAssignmentGrade] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleAddAssignment = (e) => {
    e.preventDefault();
    console.log('Assignment Added');
  };
  return (
    <TeacherLayout>
      <div className='grid gap-6 lg:grid-cols-2'>
        <div className='flex flex-col gap-6'>
          <h2 className='font-bold text-xl uppercase'>Add Assignment</h2>

          <AddAssignment
            assignmentTitle={assignmentTitle}
            setAssignmentTitle={setAssignmentTitle}
            assignmentDescription={assignmentDescription}
            setAssignmentDescription={setAssignmentDescription}
            assignmentGrade={assignmentGrade}
            setAssignmentGrade={setAssignmentGrade}
            deadline={deadline}
            setDeadline={setDeadline}
            handleAddAssignment={handleAddAssignment}
          />
        </div>

        <AssignmentList />
      </div>
    </TeacherLayout>
  );
};

export default Assignment;

import { useState } from 'react';

import AdminLayout from '@/layouts/AdminLayout';

import AddClasses from '@/components/AddClasses';
import ClassesList from '@/components/ClassesList';

const AdminClasses = () => {
  const [clsName, setClsName] = useState('');

  const handleAddClasses = (e) => {
    e.preventDefault();
    console.log('Class added');
  };

  return (
    <AdminLayout>
      <div className='grid gap-6 lg:grid-cols-2'>
        <div className='flex flex-col gap-6'>
          <h2 className='font-bold text-xl uppercase'>Add Classes</h2>

          <AddClasses
            clsName={clsName}
            setClsName={setClsName}
            handleAddClasses={handleAddClasses}
          />
        </div>

        <ClassesList />
      </div>
    </AdminLayout>
  );
};

export default AdminClasses;

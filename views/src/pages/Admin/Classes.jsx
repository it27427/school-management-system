import { useState } from 'react';

import AdminLayout from '@/layouts/AdminLayout';

import AddClasses from '@/components/AddClasses';

const AdminClasses = () => {
  const [clsName, setClsName] = useState('');

  const handleAddClasses = (e) => {
    e.preventDefault();
    console.log('Class added');
  };

  return (
    <AdminLayout>
      <div className='flex flex-col gap-6'>
        <h2 className='font-bold text-xl uppercase'>Add Classes</h2>

        <AddClasses
          clsName={clsName}
          setClsName={setClsName}
          handleAddClasses={handleAddClasses}
        />
      </div>
    </AdminLayout>
  );
};

export default AdminClasses;

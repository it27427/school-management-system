import axios from 'axios';
import { useEffect, useState } from 'react';

import AdminLayout from '@/layouts/AdminLayout';

import AddClasses from '@/components/AddClasses';
import ClassesList from '@/components/ClassesList';

const AdminClasses = () => {
  const [newClassName, setNewClassName] = useState('');
  const [classes, setClasses] = useState([]);

  const fetchClasses = async () => {
    try {
      const url = 'http://localhost:8080/api/v1/classes/getall';
      const response = await axios.get(url);
      if (response.data || Array.isArray(response.data.classes)) {
        setClasses(response.data.classes);
      } else {
        console.error('Error While Fetching Classes', response.data);
      }
    } catch (error) {
      console.error('Classes Fetching Error', error);
    }
  };

  const handleAddClasses = async (e) => {
    e.preventDefault();

    if (newClassName.trim() !== '') {
      try {
        const url = 'http://localhost:8080/api/v1/events/getall';
        const response = await axios.get(url);
        setEvents(response.data.events || []);
      } catch (error) {
        console.error('Event Fetching Error', error);
      }
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  return (
    <AdminLayout>
      <div className='grid gap-6 lg:grid-cols-2'>
        <div className='flex flex-col gap-6'>
          <h2 className='font-bold text-xl uppercase'>Add Classes</h2>

          <AddClasses
            newClassName={newClassName}
            setNewClassName={setNewClassName}
            handleAddClasses={handleAddClasses}
          />
        </div>

        <ClassesList />
      </div>
    </AdminLayout>
  );
};

export default AdminClasses;

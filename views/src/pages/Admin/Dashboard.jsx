import { useEffect, useState } from 'react';

import AdminLayout from '@/layouts/AdminLayout';

import CountCard from '@/components/CountCard';
import EventsList from '@/components/EventsList';

const Dashboard = () => {
  const [events, setEvents] = useState('');
  const [announcements, setAnnouncements] = useState('');
  const [performance, setPerformances] = useState('');

  const fetchEvents = async () => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAnnouncements = async () => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPerformances = async () => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEvents();
    fetchAnnouncements();
    fetchPerformances();
  }, []);

  return (
    <AdminLayout>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-6'>
          <h2 className='text-xl font-bold uppercase'>Overview</h2>

          <div className='grid md:grid-cols-3 gap-4'>
            <CountCard>
              <h2 className='card-title'>Total Classes</h2>
              <p>10</p>
            </CountCard>

            <CountCard>
              <h2 className='card-title'>Total Teachers</h2>
              <p>20</p>
            </CountCard>

            <CountCard>
              <h2 className='card-title'>Total Students</h2>
              <p>200</p>
            </CountCard>
          </div>
        </div>

        <EventsList />

        <div className='flex flex-col gap-6'>
          <h2 className='text-xl font-bold uppercase'>Performance</h2>

          <div className='grid md:grid-cols-3 gap-4'></div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;

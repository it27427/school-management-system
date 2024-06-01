import axios from 'axios';
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
      const url = 'http://localhost:8080/api/v1/events/getall';
      const response = await axios.get(url);
      setEvents(response.data.events || []);
    } catch (error) {
      console.error('Event Fetching Error', error);
    }
  };

  const fetchAnnouncements = async () => {
    try {
      const url = 'http://localhost:8080/api/v1/announcements/getall';
      const response = await axios.get(url);
      setAnnouncements(response.data.announcements || []);
    } catch (error) {
      console.error('Announcement Fetching Error', error);
    }
  };

  // const fetchPerformances = async () => {
  //   try {
  //     const url = 'http://localhost:8080/api/v1/performance/getall';
  //     const response = await axios.get(url);
  //     setPerformances(response.data.performance || []);
  //   } catch (error) {
  //     console.error('Performance Fetching Error', error);
  //   }
  // };

  useEffect(() => {
    fetchEvents();
    fetchAnnouncements();
    // fetchPerformances();
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

import { useState } from 'react';

import AdminLayout from '@/layouts/AdminLayout';

import AddEvent from '@/components/AddEvent';
import Calendar from '@/components/Calendar';
import Card from '@/components/Card';
import EventsList from '@/components/EventsList';

const AdminEventCalendar = () => {
  const [event, setEvent] = useState('');

  const handleAddEvent = (e) => {
    e.preventDefault();
    console.log('Event Added', event);
  };

  return (
    <AdminLayout>
      <div className='grid gap-6 lg:grid-cols-2'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl uppercase font-bold'>Events and Calendar</h2>
            <h3 className='text-lg uppercase font-bold'>Current Time</h3>
          </div>

          <div className='flex flex-col gap-4'>
            <h2 className='font-bold text-xl uppercase'>Add New Event</h2>

            <AddEvent
              event={event}
              setEvent={setEvent}
              handleAddEvent={handleAddEvent}
            />
          </div>

          <Card>
            <Calendar />
          </Card>
        </div>

        <EventsList />
      </div>
    </AdminLayout>
  );
};

export default AdminEventCalendar;

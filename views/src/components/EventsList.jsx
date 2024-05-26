import Card from '@/components/Card';

const EventsList = () => {
  return (
    <div className='flex flex-col gap-6'>
      <h2 className='font-bold text-xl uppercase'>Events List</h2>

      <Card>
        <ul>
          <li>Event 1</li>
        </ul>
      </Card>
    </div>
  );
};

export default EventsList;

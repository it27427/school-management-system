import Card from '@/components/Card';

const AnnouncementList = () => {
  return (
    <div className='flex flex-col gap-6'>
      <h2 className='font-bold text-xl uppercase'>Announcement List</h2>

      <Card>
        <ul>
          <li>Announcement 1</li>
        </ul>
      </Card>
    </div>
  );
};

export default AnnouncementList;

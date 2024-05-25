import Card from '@/components/Card';

const TeachersList = () => {
  return (
    <div className='flex flex-col gap-6'>
      <h2 className='font-bold text-xl uppercase'>Teachers List</h2>

      <Card>
        <ul>
          <li>Teacher 1</li>
        </ul>
      </Card>
    </div>
  );
};

export default TeachersList;

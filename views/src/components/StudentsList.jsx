import Card from '@/components/Card';

const StudentsList = () => {
  return (
    <div className='flex flex-col gap-6'>
      <h2 className='font-bold text-xl uppercase'>Students List</h2>

      <Card>
        <ul>
          <li>Student 1</li>
        </ul>
      </Card>
    </div>
  );
};

export default StudentsList;

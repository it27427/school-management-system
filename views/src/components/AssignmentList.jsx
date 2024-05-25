import Card from '@/components/Card';

const AssignmentList = () => {
  return (
    <div className='flex flex-col gap-6'>
      <h2 className='font-bold text-xl uppercase'>Assignment List</h2>

      <Card>
        <ul>
          <li>Assignment 1</li>
        </ul>
      </Card>
    </div>
  );
};

export default AssignmentList;

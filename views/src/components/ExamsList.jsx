import Card from '@/components/Card';

const ExamsList = () => {
  return (
    <Card>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-1'>
          <h2 className='text-slate-800 text-xl'>Total Marks:</h2>
          <h3 className='text-slate-800 text-lg'>Exam Details:</h3>
        </div>

        <ul>
          <li>Exam 1</li>
        </ul>
      </div>
    </Card>
  );
};

export default ExamsList;

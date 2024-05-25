import Card from '@/components/Card';

const ClassesList = () => {
  return (
    <div className='flex flex-col gap-6'>
      <h2 className='font-bold text-xl uppercase'>Classes List</h2>

      <Card>
        <ul>
          <li>Class Item 1</li>
        </ul>
      </Card>
    </div>
  );
};

export default ClassesList;

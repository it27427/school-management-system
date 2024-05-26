import Card from '@/components/Card';

const BookList = () => {
  return (
    <div className='flex flex-col gap-6'>
      <h2 className='font-bold text-xl uppercase'>Book List</h2>

      <Card>
        <ul>
          <li>Book 1</li>
        </ul>
      </Card>
    </div>
  );
};

export default BookList;

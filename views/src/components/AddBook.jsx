import Button from '@/components/Button';
import Card from '@/components/Card';
import Form from '@/components/Form';
import InputField from '@/components/InputField';

const AddBook = ({
  bookTitle,
  setBookTitle,
  bookAuthor,
  setBookAuthor,
  handleAddBook,
}) => {
  return (
    <Card>
      <Form
        onSubmit={handleAddBook}
        className='flex flex-col gap-4 max-w-xs md:max-w-md'
      >
        <InputField
          type='text'
          id='booktitle'
          name='booktitle'
          className='input input-bordered w-full'
          onChange={(e) => setBookTitle(e.target.value)}
          placeholder='Enter Book Name'
          value={bookTitle}
        />

        <InputField
          type='text'
          id='bookauthor'
          name='bookauthor'
          className='input input-bordered w-full'
          onChange={(e) => setBookAuthor(e.target.value)}
          placeholder='Enter Author Name'
          value={bookAuthor}
        />

        <div className='flex justify-end'>
          <Button type='submit' className='btn btn-primary'>
            Add Book
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default AddBook;

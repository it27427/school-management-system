import AddBook from '@/components/AddBook';
import AdminLayout from '@/layouts/AdminLayout';

const AdminLibrary = () => {
  return (
    <AdminLayout>
      <div className='grid gap-6 lg:grid-cols-2'>
        <div className='flex flex-col gap-6'>
          <h2 className='font-bold text-xl uppercase'>Library Management</h2>

          <AddBook
            bookTitle={bookTitle}
            setBookTitle={setBookTitle}
            bookAuthor={bookAuthor}
            setBookAuthor={setBookAuthor}
            handleAddBook={handleAddBook}
          />
        </div>

        {/* <BookList /> */}
      </div>
    </AdminLayout>
  );
};

export default AdminLibrary;

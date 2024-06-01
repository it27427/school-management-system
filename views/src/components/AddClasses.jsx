import Button from '@/components/Button';
import Card from '@/components/Card';
import Form from '@/components/Form';
import InputField from '@/components/InputField';

const AddClasses = ({ newClassName, setNewClassName, handleAddClasses }) => {
  return (
    <Card>
      <Form
        onSubmit={handleAddClasses}
        className='flex flex-col gap-4 max-w-xs md:max-w-md'
      >
        <InputField
          type='text'
          id='newClassName'
          name='newclassname'
          className='input input-bordered w-full'
          onChange={(e) => setNewClassName(e.target.value)}
          placeholder='Enter Class Name'
          value={newClassName}
        />

        <div className='flex justify-end'>
          <Button type='submit' className='btn btn-primary'>
            Add Class
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default AddClasses;

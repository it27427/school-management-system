import Button from '@/components/Button';
import Form from '@/components/Form';
import InputField from '@/components/InputField';

const AddClasses = ({ clsName, setClsName, handleAddClasses }) => {
  return (
    <Form
      onSubmit={handleAddClasses}
      className='flex flex-col gap-4 max-w-xs md:max-w-md'
    >
      <InputField
        type='text'
        id='clsname'
        name='clsname'
        className='input input-bordered w-full'
        onChange={(e) => setClsName(e.target.value)}
        placeholder='Enter Class Name'
        value={clsName}
      />

      <div className='flex justify-end'>
        <Button type='submit' className='btn btn-primary'>
          Add Class
        </Button>
      </div>
    </Form>
  );
};

export default AddClasses;

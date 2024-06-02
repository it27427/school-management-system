import Button from '@/components/Button';
import Card from '@/components/Card';
import Form from '@/components/Form';
import InputField from '@/components/InputField';

const AddTeacher = ({ newTeacher, setNewTeacher, handleAddTeacher }) => {
  return (
    <Card>
      <Form
        onSubmit={handleAddTeacher}
        method='POST'
        className='flex flex-col gap-4 max-w-xs md:max-w-md'
      >
        <InputField
          type='text'
          id='name'
          name='name'
          className='input input-bordered w-full'
          onChange={(e) =>
            setNewTeacher({ ...newTeacher, name: e.target.value })
          }
          placeholder='Enter Teacher Name'
          value={newTeacher.name}
        />

        <InputField
          type='email'
          id='email'
          name='email'
          className='input input-bordered w-full'
          onChange={(e) =>
            setNewTeacher({ ...newTeacher, email: e.target.value })
          }
          placeholder='Enter Teacher Email'
          value={newTeacher.email}
        />

        <InputField
          type='text'
          id='subject'
          name='subject'
          className='input input-bordered w-full'
          onChange={(e) =>
            setNewTeacher({ ...newTeacher, subject: e.target.value })
          }
          placeholder='Enter Teacher Subject'
          value={newTeacher.subject}
        />

        <div className='flex justify-end'>
          <Button type='submit' className='btn btn-primary'>
            Add Teacher
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default AddTeacher;

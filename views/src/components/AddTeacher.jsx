import Button from '@/components/Button';
import Card from '@/components/Card';
import Form from '@/components/Form';
import InputField from '@/components/InputField';

const AddTeacher = ({
  teacherName,
  setTeacherName,
  teacherEmail,
  setTeacherEmail,
  teacherSubject,
  setTeacherSubject,
  handleAddTeacher,
}) => {
  return (
    <Card>
      <Form
        onSubmit={handleAddTeacher}
        className='flex flex-col gap-4 max-w-xs md:max-w-md'
      >
        <InputField
          type='text'
          id='studentname'
          name='studentname'
          className='input input-bordered w-full'
          onChange={(e) => setTeacherName(e.target.value)}
          placeholder='Enter Teacher Name'
          value={teacherName}
        />

        <InputField
          type='email'
          id='teacheremail'
          name='teacheremail'
          className='input input-bordered w-full'
          onChange={(e) => setTeacherEmail(e.target.value)}
          placeholder='Enter Teacher Email'
          value={teacherEmail}
        />

        <InputField
          type='text'
          id='teachersubject'
          name='teachersubject'
          className='input input-bordered w-full'
          onChange={(e) => setTeacherSubject(e.target.value)}
          placeholder='Enter Teacher Subject'
          value={teacherSubject}
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

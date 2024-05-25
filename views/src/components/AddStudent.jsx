import Button from '@/components/Button';
import Form from '@/components/Form';
import InputField from '@/components/InputField';

const AddStudent = ({
  studentName,
  setStudentName,
  studentRegNumber,
  setStudentRegNumber,
  studentGrade,
  setStudentGrade,
  handleAddStudent,
}) => {
  return (
    <Form
      onSubmit={handleAddStudent}
      className='flex flex-col gap-4 max-w-xs md:max-w-md'
    >
      <InputField
        type='text'
        id='studentname'
        name='studentname'
        className='input input-bordered w-full'
        onChange={(e) => setStudentName(e.target.value)}
        placeholder='Enter Student Name'
        value={studentName}
      />

      <InputField
        type='text'
        id='studregnumber'
        name='studregnumber'
        className='input input-bordered w-full'
        onChange={(e) => setStudentRegNumber(e.target.value)}
        placeholder='Enter Registration Number'
        value={studentRegNumber}
      />

      <InputField
        type='text'
        id='studgrade'
        name='studgrade'
        className='input input-bordered w-full'
        onChange={(e) => setStudentGrade(e.target.value)}
        placeholder='Enter Student Grade'
        value={studentGrade}
      />

      <div className='flex justify-end'>
        <Button type='submit' className='btn btn-primary'>
          Add Student
        </Button>
      </div>
    </Form>
  );
};

export default AddStudent;

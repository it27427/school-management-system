import Button from '@/components/Button';
import Card from '@/components/Card';
import Form from '@/components/Form';
import InputField from '@/components/InputField';

const AddExam = ({
  name,
  setName,
  regNumber,
  setRegNumber,
  examClass,
  setExamClass,
  marks,
  setMarks,
  handleAddExam,
}) => {
  return (
    <Card>
      <Form
        onSubmit={handleAddExam}
        className='flex flex-col gap-4 max-w-xs md:max-w-md'
      >
        <div className='flex flex-col gap-2'>
          <label htmlFor='examname'>Name</label>

          <InputField
            type='text'
            id='examname'
            name='examname'
            className='input input-bordered w-full'
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter Name'
            value={name}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='regnumber'>Registration Number</label>

          <InputField
            type='text'
            id='regnumber'
            name='regnumber'
            className='input input-bordered w-full'
            onChange={(e) => setRegNumber(e.target.value)}
            placeholder='Enter Registration Number'
            value={regNumber}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='examclass'>Class</label>

          <InputField
            type='text'
            id='examclass'
            name='examclass'
            className='input input-bordered w-full'
            onChange={(e) => setExamClass(e.target.value)}
            placeholder='Enter Exam Class'
            value={examClass}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='marks'>Marks</label>

          <InputField
            type='text'
            id='marks'
            name='marks'
            className='input input-bordered w-full'
            onChange={(e) => setMarks(e.target.value)}
            placeholder='Enter Exam Marks'
            value={marks}
          />
        </div>

        <div className='flex justify-end'>
          <Button type='submit' className='btn btn-primary'>
            Add Exam
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default AddExam;

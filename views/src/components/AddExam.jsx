import Button from '@/components/Button';
import Card from '@/components/Card';
import Form from '@/components/Form';
import InputField from '@/components/InputField';

const AddExam = ({ newExam, setNewExam, handleAddExam }) => {
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
            id='name'
            name='name'
            className='input input-bordered w-full'
            onChange={(e) => setNewExam({ ...newExam, name: e.target.value })}
            placeholder='Enter Name'
            value={newExam.name}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='regnumber'>Registration Number</label>

          <InputField
            type='text'
            id='registrationNumber'
            name='registrationNumber'
            className='input input-bordered w-full'
            onChange={(e) =>
              setNewExam({ ...newExam, registrationNumber: e.target.value })
            }
            placeholder='Enter Registration Number'
            value={newExam.registrationNumber}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='examclass'>Class</label>

          <InputField
            type='text'
            id='className'
            name='className'
            className='input input-bordered w-full'
            onChange={(e) =>
              setNewExam({ ...newExam, className: e.target.value })
            }
            placeholder='Enter Exam Class'
            value={newExam.className}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='marks'>Marks</label>

          <InputField
            type='text'
            id='marks'
            name='marks'
            className='input input-bordered w-full'
            onChange={(e) => setNewExam({ ...newExam, marks: e.target.value })}
            placeholder='Enter Exam Marks'
            value={newExam.marks}
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

import Button from '@/components/Button';
import Card from '@/components/Card';
import Form from '@/components/Form';
import InputField from '@/components/InputField';
import TextArea from '@/components/TextArea';

const AddAssignment = ({
  assignmentTitle,
  setAssignmentTitle,
  assignmentDescription,
  setAssignmentDescription,
  assignmentGrade,
  setAssignmentGrade,
  deadline,
  setDeadline,
  handleAddAssignment,
}) => {
  return (
    <Card>
      <Form
        onSubmit={handleAddAssignment}
        className='flex flex-col gap-4 max-w-xs md:max-w-md'
      >
        <InputField
          type='text'
          id='assignmentTitle'
          name='title'
          className='input input-bordered w-full'
          onChange={(e) => setAssignmentTitle(e.target.value)}
          placeholder='Enter Assignment Title'
          value={assignmentTitle}
        />

        <TextArea
          id='assignmentDescription'
          name='description'
          className='textarea textarea-bordered resize-none w-full'
          onChange={(e) => setAssignmentDescription(e.target.value)}
          placeholder='Enter Assignment Description'
          value={assignmentDescription}
        />

        <InputField
          type='text'
          id='grade'
          name='grade'
          className='input input-bordered w-full'
          onChange={(e) => setAssignmentGrade(e.target.value)}
          placeholder='Enter Assignment Grade'
          value={assignmentGrade}
        />

        <InputField
          type='text'
          id='deadline'
          name='deadline'
          className='input input-bordered w-full'
          onChange={(e) => setDeadline(e.target.value)}
          placeholder='Enter Assignment Deadline'
          value={deadline}
        />

        <div className='flex justify-end'>
          <Button type='submit' className='btn btn-primary'>
            Add Assignment
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default AddAssignment;

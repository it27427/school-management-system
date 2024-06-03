import Button from '@/components/Button';
import Card from '@/components/Card';
import Form from '@/components/Form';
import InputField from '@/components/InputField';
import TextArea from '@/components/TextArea';

const AddAssignment = ({
  newAssignment,
  setNewAssignment,
  handleAddAssignment,
}) => {
  return (
    <Card>
      <Form
        onSubmit={handleAddAssignment}
        method='POST'
        className='flex flex-col gap-4 max-w-xs md:max-w-md'
      >
        <InputField
          type='text'
          id='assignmentTitle'
          name='title'
          className='input input-bordered w-full'
          onChange={(e) =>
            setNewAssignment({ ...newAssignment, title: e.target.value })
          }
          placeholder='Enter Assignment Title'
          value={newAssignment.title}
        />

        <TextArea
          id='assignmentDescription'
          name='description'
          className='textarea textarea-bordered resize-none w-full'
          onChange={(e) =>
            setNewAssignment({
              ...newAssignment,
              description: e.target.value,
            })
          }
          placeholder='Enter Assignment Description'
          value={newAssignment.description}
        />

        <InputField
          type='text'
          id='grade'
          name='grade'
          className='input input-bordered w-full'
          onChange={(e) =>
            setNewAssignment({ ...newAssignment, grade: e.target.value })
          }
          placeholder='Enter Assignment Grade'
          value={newAssignment.grade}
        />

        <InputField
          type='date'
          id='deadline'
          name='deadline'
          className='input input-bordered w-full'
          onChange={(e) =>
            setNewAssignment({ ...newAssignment, deadline: e.target.value })
          }
          placeholder='Enter Assignment Deadline'
          value={newAssignment.deadline}
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

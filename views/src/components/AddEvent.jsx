import Button from '@/components/Button';
import Card from '@/components/Card';
import Form from '@/components/Form';
import InputField from '@/components/InputField';

const AddEvent = ({ event, setEvent, handleAddEvent }) => {
  return (
    <Card>
      <Form
        onSubmit={handleAddEvent}
        className='flex flex-col gap-4 max-w-xs md:max-w-md'
      >
        <InputField
          type='text'
          id='event'
          name='event'
          className='input input-bordered w-full'
          onChange={(e) => setEvent(e.target.value)}
          placeholder='Enter Event'
          value={event}
        />

        <div className='flex justify-end'>
          <Button type='submit' className='btn btn-primary'>
            Add Event
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default AddEvent;

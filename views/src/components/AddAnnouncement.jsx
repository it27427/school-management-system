import Button from '@/components/Button';
import Card from '@/components/Card';
import Form from '@/components/Form';
import TextArea from '@/components/TextArea';

const AddAnnouncement = ({
  announcement,
  setAnnouncement,
  handleAddAnnouncement,
}) => {
  return (
    <Card>
      <Form
        onSubmit={handleAddAnnouncement}
        className='flex flex-col gap-4 max-w-xs md:max-w-md'
      >
        <TextArea
          id='announcement'
          name='announcement'
          className='textarea textarea-bordered resize-none w-full'
          onChange={(e) => setAnnouncement(e.target.value)}
          placeholder='Enter Announcement Description'
          value={announcement}
        />

        <div className='flex justify-end'>
          <Button type='submit' className='btn btn-primary'>
            Send Announcement
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default AddAnnouncement;

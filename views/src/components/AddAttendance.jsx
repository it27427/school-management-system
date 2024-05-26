import { useState } from 'react';
import Button from './Button';
import Checkbox from './Checkbox';
import Form from './Form';

const AddAttendance = () => {
  const [] = useState('');

  return (
    <Form className='flex flex-col gap-4 max-w-xs md:max-w-md'>
      <div className='flex items-center justify-start gap-3'>
        <Checkbox checkTitle='Present' />
        <Checkbox checkTitle='Absent' />
        <Checkbox checkTitle='Absent With Apology' />
      </div>

      <div className='flex justify-start'>
        <Button type='submit' className='btn btn-primary'>
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default AddAttendance;

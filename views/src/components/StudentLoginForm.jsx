import { useState } from 'react';

import Button from '@/components/Button';
import Form from '@/components/Form';
import InputField from '@/components/InputField';

const StudentLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User login', email, password);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className='flex flex-col gap-6 bg-slate-100 p-4 rounded-lg w-80 md:w-96 mx-auto md:p-6'
    >
      <div className='flex flex-col gap-5'>
        <label className='input input-bordered flex items-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
            fill='currentColor'
            className='w-4 h-4 opacity-70'
          >
            <path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
            <path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
          </svg>

          <InputField
            type='email'
            id='loginmail'
            name='email'
            className='grow'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter Email Address'
          />
        </label>

        <label className='input input-bordered flex items-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
            fill='currentColor'
            className='w-4 h-4 opacity-70'
          >
            <path
              fillRule='evenodd'
              d='M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z'
              clipRule='evenodd'
            />
          </svg>
          <InputField
            type='password'
            id='loginpassword'
            name='password'
            className='grow'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Password'
          />
        </label>
      </div>

      <Button
        type='submit'
        className='btn btn-info text-md uppercase font-bold'
      >
        Login Student
      </Button>
    </Form>
  );
};

export default StudentLoginForm;

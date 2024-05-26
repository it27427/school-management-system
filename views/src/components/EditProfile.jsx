import { useState } from 'react';
import Button from './Button';
import Form from './Form';
import InputField from './InputField';

const EditProfile = () => {
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editPhone, setEditPhone] = useState('');
  const [editAddress, setEditAddress] = useState('');
  const [editQualification, setEditQualification] = useState('');

  const handleEditProfile = (e) => {
    e.preventDefault();
    console.log('Profile Edited Done');
  };

  return (
    <Form
      onSubmit={handleEditProfile}
      className='flex flex-col gap-4 max-w-xs md:max-w-md'
    >
      <InputField
        type='text'
        id='editname'
        name='name'
        className='input input-bordered w-full'
        onChange={(e) => setEditName(e.target.value)}
        placeholder='Enter Name'
        value={editName}
      />

      <InputField
        type='email'
        id='editemail'
        name='email'
        className='input input-bordered w-full'
        onChange={(e) => setEditEmail(e.target.value)}
        placeholder='Enter Email'
        value={editEmail}
      />

      <InputField
        type='tel'
        id='editephone'
        name='phone'
        className='input input-bordered w-full'
        onChange={(e) => setEditPhone(e.target.value)}
        placeholder='Enter Phone Number'
        value={editPhone}
      />

      <TextArea
        id='address'
        name='address'
        className='textarea textarea-bordered resize-none w-full'
        onChange={(e) => setEditAddress(e.target.value)}
        placeholder='Enter Address'
        value={editAddress}
      />

      <InputField
        type='text'
        id='editequalification'
        name='qualification'
        className='input input-bordered w-full'
        onChange={(e) => setEditQualification(e.target.value)}
        placeholder='Enter Qualification'
        value={editQualification}
      />

      <div className='flex justify-end'>
        <Button type='submit' className='btn btn-primary'>
          Edit Profile
        </Button>
      </div>
    </Form>
  );
};

export default EditProfile;

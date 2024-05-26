import Button from '@/components/Button';

const ProfileDetails = ({ profileInfo }) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col'>
        <h2 className='text-lg font-bold'>Name</h2>
        <p className='text-md font-medium'>{profileInfo.name}</p>
      </div>

      <div className='flex flex-col'>
        <h2 className='text-lg font-bold'>Email Address</h2>
        <p className='text-md font-medium'>{profileInfo.email}</p>
      </div>

      <div className='flex flex-col'>
        <h2 className='text-lg font-bold'>Phone Number</h2>
        <p className='text-md font-medium'>{profileInfo.phone}</p>
      </div>

      <div className='flex flex-col'>
        <h2 className='text-lg font-bold'>Address</h2>
        <p className='text-md font-medium'>{profileInfo.address}</p>
      </div>

      <div className='flex flex-col'>
        <h2 className='text-lg font-bold'>Qualifications</h2>
        <p className='text-md font-medium'>{profileInfo.qualification}</p>
      </div>

      <div className='mt-4'>
        <Button className='btn btn-primary'>Edit Profile</Button>
      </div>
    </div>
  );
};

export default ProfileDetails;

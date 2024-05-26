import AdminLayout from '@/layouts/AdminLayout';

const SettingsProfile = () => {
  return (
    <AdminLayout>
      <div className='grid gap-6 lg:grid-cols-2'>
        <div className='flex flex-col gap-6'>
          <h2 className='font-bold text-xl uppercase'>Profile Details</h2>

          <ProfileDetails />
        </div>
      </div>
    </AdminLayout>
  );
};

export default SettingsProfile;

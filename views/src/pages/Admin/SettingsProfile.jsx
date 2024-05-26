import AdminLayout from '@/layouts/AdminLayout';

import Card from '@/components/Card';
import ProfileDetails from '@/components/ProfileDetails';

const SettingsProfile = () => {
  const profileInfo = {
    name: 'Istiak Hossain Tushar',
    email: 'istiak.tushar.it@gmail.com',
    phone: '+8801615922742',
    address: 'Grirdanarayonpur, Sherpur Sadar, Sherpur',
    qualification: 'Bachelor of Education',
  };

  return (
    <AdminLayout>
      <div className='grid gap-6 lg:grid-cols-2'>
        <div className='flex flex-col gap-6'>
          <h2 className='font-bold text-xl uppercase'>Profile Details</h2>

          <Card>
            <ProfileDetails profileInfo={profileInfo} />
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default SettingsProfile;

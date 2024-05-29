import StudentLayout from '@/layouts/StudentLayout';

import Card from '@/components/Card';
import StudentProfile from '@/components/StudentProfile';

const Profile = () => {
  const studentProfileInfo = {
    name: 'John Doe',
    age: 18,
    grade: '12th',
    school: 'Does High School',
    email: 'john.doe@gmail.com',
  };

  return (
    <StudentLayout>
      <div className='grid gap-6 lg:grid-cols-2'>
        <div className='flex flex-col gap-6'>
          <h2 className='font-bold text-xl uppercase'>Profile Details</h2>

          <Card>
            <StudentProfile profileInfo={studentProfileInfo} />
          </Card>
        </div>
      </div>
    </StudentLayout>
  );
};

export default Profile;

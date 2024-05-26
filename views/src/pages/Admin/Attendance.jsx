import AddAttendance from '@/components/AddAttendance';
import Card from '@/components/Card';
import AdminLayout from '@/layouts/AdminLayout';

const AdminAttendance = () => {
  return (
    <AdminLayout>
      <div className='grid gap-6 lg:grid-cols-2'>
        <div className='flex flex-col gap-6'>
          <h2 className='font-bold text-xl uppercase'>Attendance</h2>
          <Card>
            <AddAttendance />
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminAttendance;

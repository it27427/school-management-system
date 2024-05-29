import Card from '@/components/Card';

import StudentLayout from '@/layouts/StudentLayout';

const Attendance = () => {
  const attendances = [
    {
      id: 1,
      date: '25-05-2024',
      present: true,
    },
    {
      id: 2,
      date: '26-05-2024',
      present: true,
    },
    {
      id: 3,
      date: '27-05-2024',
      present: false,
    },
    {
      id: 4,
      date: '28-05-2024',
      present: true,
    },
    {
      id: 5,
      date: '29-05-2024',
      present: true,
    },
  ];

  return (
    <StudentLayout>
      <div className='flex flex-col gap-6'>
        <h2 className='text-xl font-bold uppercase'>Attendance</h2>

        <Card>
          {attendances.map((attendance) => (
            <div key={attendance.id} className='flex items-center gap-3'>
              <span>{attendance.date}</span>
              <span
                className={
                  attendance.present
                    ? 'text-green-600 font-semibold'
                    : 'text-red-600 font-semibold'
                }
              >
                {attendance.present ? 'Present' : 'Absent'}
              </span>
            </div>
          ))}
        </Card>
      </div>
    </StudentLayout>
  );
};

export default Attendance;

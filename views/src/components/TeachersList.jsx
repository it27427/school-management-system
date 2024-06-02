import Card from '@/components/Card';

const TeachersList = ({ teachers }) => {
  return (
    <div className='flex flex-col gap-6'>
      <h2 className='font-bold text-xl uppercase'>Teachers List</h2>

      <Card>
        <div className='lg:max-h-64 overflow-hidden lg:overflow-y-scroll'>
          <table className='table'>
            <thead className='sticky top-0 w-full bg-white'>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
              </tr>
            </thead>

            <tbody>
              {teachers.map((teacher, index) => (
                <tr key={index}>
                  <td>{teacher.name}</td>
                  <td>{teacher.email}</td>
                  <td>{teacher.subject}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default TeachersList;

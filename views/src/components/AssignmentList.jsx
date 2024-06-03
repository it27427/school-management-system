import Card from '@/components/Card';

const AssignmentList = ({ assignments }) => {
  return (
    <div className='flex flex-col gap-6'>
      <h2 className='font-bold text-xl uppercase'>Assignment List</h2>

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
              {assignments.map((assignment, index) => (
                <tr key={index}>
                  <td>{assignment.title}</td>
                  <td>{assignment.description}</td>
                  <td>{assignment.grade}</td>
                  <td>{assignment.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default AssignmentList;

import Card from '@/components/Card';

const AssignmentList = ({ assignments }) => {
  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className='flex flex-col gap-6'>
      <h2 className='font-bold text-xl uppercase'>Assignment List</h2>

      <Card>
        <div className='lg:max-h-[478px] overflow-hidden lg:overflow-y-scroll'>
          <table className='table'>
            <thead className='sticky top-0 w-full bg-white'>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Grade</th>
                <th>Deadline</th>
              </tr>
            </thead>

            <tbody>
              {assignments.map((assignment, index) => (
                <tr key={index}>
                  <td>{assignment.title}</td>
                  <td>{assignment.description}</td>
                  <td>{assignment.grade}</td>
                  <td>{formatDate(assignment.deadline)}</td>
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

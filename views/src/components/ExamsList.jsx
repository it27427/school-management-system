import Card from '@/components/Card';

const ExamsList = ({ exams }) => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-1'>
        <h2 className='text-slate-800 text-xl'>Total Marks:</h2>
        <h3 className='text-slate-800 text-lg'>Exam Details:</h3>
      </div>

      <Card>
        <div className='lg:max-h-[478px] overflow-hidden lg:overflow-y-scroll'>
          <table className='table'>
            <thead className='sticky top-0 w-full bg-white'>
              <tr>
                <th>Name</th>
                <th>Registration Number</th>
                <th>Class Name</th>
                <th>Marks</th>
              </tr>
            </thead>

            <tbody>
              {exams.map((exam, index) => (
                <tr key={index}>
                  <td className='text-xs'>{exam.name}</td>
                  <td className='text-xs'>{exam.registrationNumber}</td>
                  <td className='text-xs'>{exam.className}</td>
                  <td className='text-xs'>{exam.marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default ExamsList;

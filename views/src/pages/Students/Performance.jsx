import { useRef } from 'react';
import { Line } from 'react-chartjs-2';

import Card from '@/components/Card';

import StudentLayout from '@/layouts/StudentLayout';

const Performance = () => {
  const chartRef = useRef();

  const performanceData = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    marks: [80, 75, 90, 85, 70, 95],
    totalMarks: 520,
  };

  const lineChartData = {
    label: performanceData.months,
    datasets: [
      {
        label: 'Performance Trends',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        data: performanceData.marks,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <StudentLayout>
      <div className='flex flex-col gap-6'>
        <h2 className='text-xl font-bold uppercase'>Performances</h2>

        <div className='grid md:grid-cols-3 gap-4'>
          <div className='flex flex-col items-center justify-center text-center gap-4'>
            <Card>
              <Line ref={chartRef} data={lineChartData} options={options} />
            </Card>

            <h2 className='text-lg font-bold'>
              Total Marks: {performanceData.totalMarks}
            </h2>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default Performance;

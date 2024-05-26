import AdminLayout from '@/layouts/AdminLayout';

const AdminPerformance = () => {
  const schoolPerformanceData = {
    averageScore: 85,
    totalStudent: 200,
  };

  const individualPerformanceData = [
    {
      id: 1,
      name: 'Istiak Hossain Tushar',
      score: 90,
    },
    {
      id: 2,
      name: 'Rubaiyat Jahan Nishi',
      score: 85,
    },
    {
      id: 3,
      name: 'Israt Jahan Hira',
      score: 80,
    },
    {
      id: 4,
      name: 'Abdullah Al Mamun',
      score: 75,
    },
    {
      id: 5,
      name: 'Mahadi Hasan',
      score: 70,
    },
  ];

  return (
    <AdminLayout>
      <h1>Admin Performance Page</h1>
    </AdminLayout>
  );
};

export default AdminPerformance;

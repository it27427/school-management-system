import NotFound from '@/components/NotFound';
import EmptyLayout from '@/layouts/EmptyLayout';

const ErrorPage = () => {
  return (
    <EmptyLayout>
      <NotFound />
    </EmptyLayout>
  );
};

export default ErrorPage;

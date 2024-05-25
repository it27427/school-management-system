import BackToTop from '@/components/BackToTop';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='min-h-screen'>
        <div className='container'>{children}</div>
      </main>
      <Footer />

      <BackToTop />
    </>
  );
};

export default RootLayout;

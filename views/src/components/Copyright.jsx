const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <p className='font-medium text-white text-sm text-center'>
        &copy; Copyright {currentYear} eSkooly - all rights reserved.
      </p>
    </>
  );
};

export default Copyright;

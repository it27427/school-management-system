import React from 'react';

const RootLayout = ({ children }) => {
  return (
    <main>
      <div className='container'>{children}</div>
    </main>
  );
};

export default RootLayout;

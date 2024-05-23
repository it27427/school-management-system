const CountCard = ({ children }) => {
  return (
    <div className='card bg-base-100 shadow-xl'>
      <div className='card-body'>{children}</div>
    </div>
  );
};

export default CountCard;

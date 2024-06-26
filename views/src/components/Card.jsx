const Card = ({ children }) => {
  return (
    <div className='card bg-base-100 shadow-xl h-full'>
      <div className='card-body'>{children}</div>
    </div>
  );
};

export default Card;

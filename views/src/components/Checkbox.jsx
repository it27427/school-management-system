const Checkbox = ({ checkTitle }) => {
  return (
    <label className='label cursor-pointer gap-2'>
      <span className='label-text'>{checkTitle}</span>
      <input type='checkbox' className='checkbox checkbox-primary' />
    </label>
  );
};

export default Checkbox;

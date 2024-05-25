const TextArea = ({ id, name, className, onChange, placeholder, value }) => {
  return (
    <textarea
      id={id}
      name={name}
      className={className}
      autoComplete='off'
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      rows='5'
    ></textarea>
  );
};

export default TextArea;

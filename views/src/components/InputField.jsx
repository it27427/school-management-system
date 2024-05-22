const InputField = ({ type, id, name, className, onChange }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className={className}
      autoComplete='off'
      onChange={onChange}
      required
    />
  );
};

export default InputField;

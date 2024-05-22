const InputField = ({
  type,
  id,
  name,
  className,
  onChange,
  placeholder,
  value,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className={className}
      autoComplete='off'
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      required
    />
  );
};

export default InputField;

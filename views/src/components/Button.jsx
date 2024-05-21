const Button = ({ type = 'button', classes, children }) => {
  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;

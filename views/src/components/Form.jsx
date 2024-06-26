const Form = ({ onSubmit, action, method, className, children }) => {
  return (
    <form
      onSubmit={onSubmit}
      action={action}
      method={method}
      className={className}
    >
      {children}
    </form>
  );
};

export default Form;

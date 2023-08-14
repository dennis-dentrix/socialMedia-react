export const Button = ({ children, style = {} }) => {
  return (
    <button className="btn" style={style}>
      {children}
    </button>
  );
};

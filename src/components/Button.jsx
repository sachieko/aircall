const Button = function({ text, onClick, className }) {

  return (
  <div className={`button ${className}`} onClick={() => onClick()}>{text}</div>
  )
};

export default Button;
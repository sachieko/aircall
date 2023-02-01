const ButtonNoBubble = function({ text, onClick, className }) {

  return (
  <div className={`button ${className}`}
    onClick={event => {
      event.stopPropagation();
      onClick();
    }} >{text}</div>
  );
};

export default ButtonNoBubble;
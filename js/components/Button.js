export const Button = ({
  title,
  leftAdornment,
  rightAdornment,
  variant,
  onClick,
}) => (
  <button className={`button ${variant}`} onClick={onClick}>
    {leftAdornment && leftAdornment}
    {title}
    {rightAdornment && rightAdornment}
  </button>
);

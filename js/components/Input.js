export const Input = ({ value, type, onChange, disabled, ...rest }) => (
  <input
    value={value}
    type={type}
    className="input"
    onChange={onChange}
    disabled={disabled}
    {...rest}
  />
);

import { Icon } from "./Icon";

export const Select = ({ options, disabled, onChange }) => (
  <select className="select" disabled={disabled} onChange={onChange}>
    {options.map((option, index) => (
      <option value={option.value} className="option" key={index}>
        {option.value}
      </option>
    ))}
  </select>
);

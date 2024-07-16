import { Text } from "./Text";

export const Chip = ({ leftAdornment, rightAdornment, text }) => (
  <div className="chip">
    {leftAdornment && leftAdornment}
    <Text>{text}</Text>
    {rightAdornment && rightAdornment}
  </div>
);

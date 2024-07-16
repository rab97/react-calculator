import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Icon = ({ size, icon, color }) => (
  <FontAwesomeIcon icon={icon} size={size} color={color} className="icon" />
);

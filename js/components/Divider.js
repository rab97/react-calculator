export const Divider = ({ vertical, horizontal }) => (
  <div
    className="divider"
    style={{
      width: horizontal ? "100%" : "1px",
      height: vertical ? "100%" : "1px",
    }}
  />
);

export const Row = ({ children, gapped }) => (
  <div
    className="row"
    style={{
      display: "flex",
      alignItems: "center",
      gap: gapped ? 4 : undefined,
    }}
  >
    {children}
  </div>
);

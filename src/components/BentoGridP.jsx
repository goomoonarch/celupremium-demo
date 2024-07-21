import { useProductContext } from "../context/ProductContext";

export const BentoGridP = () => {
  const { product } = useProductContext();

  const containerStyle = {
    display: "flex",
    height: "584px",
    width: "656px",
    alignItems: "center",
    justifyContent: "center",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "250px 180px 170px",
    gridTemplateRows: "180px 180px 180px",
    gap: "14px",
  };

  const cellStyle = {
    fontFamily: "'Inter', sans-serif",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F7",
    color: "white",
  };

  return (
    <div>
      {/**Bento tiles */}
      <div style={containerStyle}>
        <div style={gridStyle}>
          <div
            style={{
              ...cellStyle,
              gridColumn: "span 1",
              gridRow: "span 2",
              height: "376px",
              width: "250px",
            }}
          >
            <div>frontview</div>
          </div>

          <div
            style={{
              ...cellStyle,
              gridColumn: "span 1",
              gridRow: "span 1",
              height: "180px",
              width: "180px",
            }}
          >
            <p>backcameraview</p>
          </div>

          <div
            style={{
              ...cellStyle,
              gridColumn: "span 1",
              gridRow: "span 3",
              height: "570px",
              width: "170px",
            }}
          >
            <p>lateralfullview</p>
          </div>

          <div
            style={{
              ...cellStyle,
              gridColumn: "span 1",
              gridRow: "span 1",
              height: "180px",
              width: "180px",
            }}
          >
            <p>lateralview</p>
          </div>

          <div
            style={{
              ...cellStyle,
              gridColumn: "span 2",
              gridRow: "span 2",
              height: "182px",
              width: "444px",
            }}
          >
            <p>fullview</p>
          </div>
        </div>
      </div>
      {Object.keys(product.swatch_colors).map((color) => {
        const variant = product.allstockrefenreces.find(
          (v) => v.choices.color === color
        );
        if (!variant) return null;
      })}
    </div>
  );
};

import { useProductContext } from "../context/ProductContext";

export const BentoGridP = () => {
  const { isLoading, product, selectedColor } = useProductContext();
  const containerStyle = {
    position: "relative",
    height: "584px",
    width: "656px",
    transform: "translateX(12px)"
  };

  const gridStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    display: "grid",
    gridTemplateColumns: "250px 180px 170px",
    gridTemplateRows: "180px 180px 180px",
    gap: "14px",
  };

  const cellStyle = {
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2E2E3A",
    color: "white",
  };

  if (isLoading) {
    return null;
  }

  return (
    <div style={containerStyle}>
      {/* Base grid */}
      <div style={gridStyle}>
        <div
          style={{
            ...cellStyle,
            gridColumn: "span 1",
            gridRow: "span 2",
            height: "376px",
            width: "250px",
          }}
        ></div>

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

      {/* Overlapping grids */}
      {Object.keys(product.swatch_colors).map((color, index) => {
        const variant = product.allstockrefenreces.find(
          (v) => v.choices.color === color
        );
        if (!variant) return null;
        return (
          <div
            key={color}
            className={`transition-opacity duration-500 ${
              selectedColor === color ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              ...gridStyle,
              zIndex: index + 1,
              pointerEvents: "none",
            }}
          >
            <div
              className=" overflow-hidden p-[20px]"
              style={{
                ...cellStyle,
                gridColumn: "span 1",
                gridRow: "span 2",
                height: "376px",
                width: "250px",
              }}
            >
              <img
                src={variant.lgfrontimg}
                alt="frontimg"
                className="translate-y-[44px]"
              />
            </div>
            {/* Add other cells as needed */}
          </div>
        );
      })}
    </div>
  );
};

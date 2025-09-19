// Muestra un ícono de carrito y una burbuja con un número estático.
export default function CartWidget() {
  const staticCount = 3; // valor estático para la burbuja

  return (
    <div style={{ position: "relative", display: "inline-block" }} aria-label="Carrito">
      <span style={{ fontSize: "1.4rem" }} role="img" aria-hidden="true">🛒</span>
      <span
        style={{
          position: "absolute",
          top: -6,
          right: -10,
          background: "#e11d48",
          color: "#fff",
          borderRadius: "9999px",
          fontSize: "0.75rem",
          padding: "2px 6px",
          lineHeight: 1,
        }}
        aria-label={`Productos en el carrito: ${staticCount}`}
      >
        {staticCount}
      </span>
    </div>
  );
}

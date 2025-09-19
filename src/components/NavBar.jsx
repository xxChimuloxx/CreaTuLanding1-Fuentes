import CartWidget from "./CartWidget";

// Barra de navegación simple con brand, enlaces y el widget del carrito.
export default function NavBar() {
  return (
    <header style={{ borderBottom: "1px solid #eee", background: "#fff" }}>
      <nav
        style={{
          maxWidth: 1024,
          margin: "0 auto",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        {/* Brand / Logo (texto simple para esta entrega) */}
        <a
          href="#"
          style={{ fontWeight: 700, fontSize: "1.1rem", textDecoration: "none", color: "#111827" }}
        >
          MiTienda
        </a>

        {/* Enlaces de navegación (estáticos) */}
        <ul style={{ listStyle: "none", display: "flex", gap: 16, margin: 0, padding: 0 }}>
          <li><a href="#" style={linkStyle}>Inicio</a></li>
          <li><a href="#" style={linkStyle}>Productos</a></li>
          <li><a href="#" style={linkStyle}>Contacto</a></li>
        </ul>

        {/* Widget del carrito (ícono + burbuja estática) */}
        <CartWidget />
      </nav>
    </header>
  );
}

const linkStyle = {
  color: "#374151",
  textDecoration: "none",
  fontSize: "0.95rem",
};

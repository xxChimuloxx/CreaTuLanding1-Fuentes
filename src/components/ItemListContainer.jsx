// Contenedor que recibe un mensaje por props y lo muestra.
export default function ItemListContainer({ greeting }) {
  return (
    <main style={{ maxWidth: 1024, margin: "0 auto", padding: "24px 16px" }}>
      <section
        style={{
          background: "#f9fafb",
          border: "1px solid #e5e7eb",
          borderRadius: 8,
          padding: 24,
        }}
      >
        <h1 style={{ marginTop: 0, marginBottom: 8, fontSize: "1.25rem" }}>
          {greeting}
        </h1>
        <p style={{ margin: 0, color: "#4b5563" }}>
          Aquí pronto vas a ver el catálogo de productos.
        </p>
      </section>
    </main>
  );
}

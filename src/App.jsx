import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

export default function App() {
  return (
    <>
      {/* NavBar */}
      <NavBar />

      {/* ItemListContainer */}
      <ItemListContainer greeting="¡Bienvenido a MiTienda!" />
    </>
  );
}

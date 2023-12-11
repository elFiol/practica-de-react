import "bootstrap/dist/css/bootstrap.min.css";
import SegundoTitulo from "./components/SegundoTitulo";

function App() {
  return (
    <section className="container my-4">
      <h1 className=" display-3 text-center">contador con react</h1>
      <SegundoTitulo></SegundoTitulo>
      {/* tambien se puede agregar con <></> */}
      <SegundoTitulo></SegundoTitulo>
    </section>
  );
}

export default App;

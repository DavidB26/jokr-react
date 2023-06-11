import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function Home() {
  return (
    <>
      <Header />

      <div className="bg-light-blue-jokr">
        <div>
          <h1 className="text-5xl text-white text-center">
            Todo lo que necesitas,{" "}
            <span className="text-green-jokr">en minutos</span>
          </h1>
          <p className="text-base text-white">El futuro del supermercado está aquí.
En minutos te llevamos frutas, verduras, tus marcas favoritas y todo lo que necesitas.</p>
        </div>
        <div className="flex justify-around items-center">
          <div>
            <img src="src/assets/logo-green.png" alt="logo green jokr" />
          </div>
          <div>
            <h2 className="text-green-jokr text-2xl">Descarga la <br/> App</h2>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;

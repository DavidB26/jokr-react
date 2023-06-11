import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function Home() {
  return (
    <>
      <Header />

      <div className="bg-light-blue-jokr p-4">
        <div className="flex flex-col justify-center">
          <div>
            <div>
              <h1 className="text-5xl text-white text-center">
                Todo lo que necesitas,{" "}
                <span className="text-green-jokr">en minutos</span>
              </h1>
              <p className="py-4  text-base text-white text-center">
                El futuro del supermercado está aquí. En minutos te llevamos
                frutas, verduras, tus marcas favoritas y todo lo que necesitas.
              </p>
            </div>
            <div className="flex justify-center items-center gap-5">
              <div>
                <img
                  className="w-16"
                  src="src/assets/logo-green.png"
                  alt="logo green jokr"
                />
              </div>
              <div>
                <h2 className="text-green-jokr text-2xl leading-6">
                  Descarga la <br /> App
                </h2>
              </div>
            </div>

            <div className="py-4 flex justify-center items-center gap-5">
              <div>
                <img
                  src="src/assets/logo-google-play.png"
                  alt="logo Play Store"
                />
              </div>

              <div>
                <img src="src/assets/logo-app-store.png" alt="Logo App Store" />
              </div>
            </div>
          </div>
          <div>
            <img src="src/assets/banner-groceries.png" alt="" />
          </div>
        </div>
      </div>

      <div className="bg-dark-blue-jokr">
          <div>
            <img src="src/assets/cohete.png" alt="Cohete" />
            <h2 className="text-grey-jokr text-2xl">Envío al instante</h2>
            <p className="text-green-jokr text-base">El tiempo lo es todo, estaremos en tu puerta más rápido de lo que te imaginas.</p>
          </div>
          <div>
            <img src="src/assets/cohete.png" alt="Cohete" />
            <h2 className="text-grey-jokr">Envío al instante</h2>
            <p className="text-green-jokr">El tiempo lo es todo, estaremos en tu puerta más rápido de lo que te imaginas.</p>
          </div>
        </div>

      <Footer />
    </>
  );
}

export default Home;

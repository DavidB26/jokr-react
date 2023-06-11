function Home() {
  return (
    <>
      <section className="p-4 bg-light-blue-jokr">
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <div>
            <div>
              <h1 className="block text-5xl text-center text-white lg:text-7xl lg:text-left">
                Todo lo que <br /> necesitas, <br />
                <span className="text-green-jokr">en minutos</span>
              </h1>
              <p className="block py-4 text-base text-center text-white lg:w-132 lg:text-2xl lg:text-left">
                El futuro del supermercado está aquí. <br /> En minutos te
                llevamos frutas, verduras, tus marcas favoritas y todo lo que
                necesitas.
              </p>
            </div>
            <div className="flex items-center justify-center gap-5 lg:justify-start">
              <div>
                <img
                  className="w-16"
                  src="src/assets/logo-green.png"
                  alt="logo green jokr"
                />
              </div>
              <div>
                <h2 className="text-2xl leading-6 text-green-jokr">
                  Descarga la <br /> App
                </h2>
              </div>
            </div>

            <div className="flex items-center justify-center gap-5 py-4 lg:flex-col lg:items-start">
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
          <div className="">
            <img
              className="lg:w-162"
              src="src/assets/banner-groceries.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section id="what-we-do" className="flex flex-col justify-center gap-4 px-4 py-16 bg-dark-blue-jokr lg:flex-row">
        <div className="pb-8 text-center lg:pb-0">
          <img
            className="w-32 pb-5 m-auto"
            src="src/assets/cohete.png"
            alt="Cohete"
          />
          <h2 className="pb-5 text-2xl text-grey-jokr">Envío al instante</h2>
          <p className="text-base text-green-jokr lg:w-96">
            El tiempo lo es todo, estaremos en tu puerta más rápido de lo que te
            imaginas.
          </p>
        </div>
        <div className="pb-8 text-center lg:pb-0">
          <img
            className="w-32 pb-5 m-auto"
            src="src/assets/medalla.png"
            alt="Medalla"
          />
          <h2 className="pb-5 text-2xl text-grey-jokr">Productos de calidad</h2>
          <p className="text-base text-green-jokr lg:w-96">
            Tenemos tus productos y marcas favoritas para asegurarnos que
            encuentres todo lo que amas.
          </p>
        </div>
        <div className="pb-8 text-center lg:pb-0">
          <img
            className="w-32 pb-5 m-auto"
            src="src/assets/tarjeta.png"
            alt="Tarjeta"
          />
          <h2 className="pb-5 text-2xl text-grey-jokr">Precios justos</h2>
          <p className="text-base text-green-jokr lg:w-96">
            Disfruta de las mejores promociones sin necesidad de alcanzar un
            monto mínimo.
          </p>
        </div>
        <div className="pb-8 text-center lg:pb-0">
          <img
            className="w-32 pb-5 m-auto"
            src="src/assets/eco.png"
            alt="Eco"
          />
          <h2 className="pb-5 text-2xl text-grey-jokr">Un mundo mejor</h2>
          <p className="text-base text-green-jokr lg:w-96">
            Impulsamos el cero desperdicio de comida, tiempo y dinero. ¡Sólo
            compra lo que necesites, cuando lo necesites!
          </p>
        </div>
      </section>

      <section className="p-4 lg:p-12 bg-light-blue-jokr">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-20">
          <div>
            <h2 className="pb-6 text-3xl font-bold text-white lg:text-3xl">
              Compra todo lo que necesites:
            </h2>
            <p className="text-base text-white lg:w-132 lg:text-2xl">
              Compra todo lo que necesites: estás en una buena racha, pero es
              momento de cambiar la rutina. Una forma más sencilla de comprar;
              menos molesta, menos aburrida y mucho más libre.
            </p>
            <p className="text-base text-white lg:w-132 lg:text-2xl lg:pb-36">
              {" "}
              Una forma más inteligente de hacer las compras en donde no saturas
              tu refrigerador de comida ni desperdicias comida. Y además, que
              sea un poco mágica...{" "}
            </p>

            <div className="py-14 lg:py-0">
              <a
                className="text-3xl text-white lg:text-2xl"
                href="https://apps.apple.com/app/id1561652691?mt=8"
              >
                Descargar la app
              </a>
            </div>
          </div>
          <div>
            <h2 className="pb-6 text-3xl font-bold text-white lg:pb-16 ">
              El futuro del <br className="lg:hidden" /> supermercado está{" "}
              <br className="lg:hidden" /> aquí.
            </h2>
            <div>
              <img
                className="w-142"
                src="src/assets/img2.png"
                alt="Bullets green"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="flex flex-col items-center justify-around px-4 py-16 bg-white lg:flex-row ">
        <div className="flex flex-col items-center justify-center pb-12 lg:pb-12 ">
          <div className="h-36 lg:h-28">
            <img
              className="w-24 "
              src="src/assets/DescargaApp.png"
              alt="Descarga"
            />
          </div>
          <h3 className="text-2xl font-bold text-light-blue-jokr">
            Descarga la app
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center pb-12 lg:pb-12 ">
          <div className="h-36 lg:h-28">
            <img
              className="w-24 "
              src="src/assets/EligeTusProductos.png"
              alt="Elige"
            />
          </div>
          <h3 className="text-2xl font-bold text-light-blue-jokr">
            Elige tus productos
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center pb-12 lg:pb-12 ">
          <div className="h-36 lg:h-28">
            <img className="w-16 " src="src/assets/Recibe.png" alt="Recibe" />
          </div>
          <h3 className="text-2xl font-bold text-light-blue-jokr">
            Recíbelo en minutos
          </h3>
        </div>
      </section>

      <section className="flex flex-col justify-center px-4 pt-10 lg:pt-0 bg-green-jokr lg:flex-row-reverse">
        <div className="flex flex-col items-center justify-center lg:items-start ">
          <h2 className="pb-8 text-5xl font-bold text-light-blue-jokr">
            ¡Crece tu marca con nosotros!
          </h2>
          <p className="text-2xl text-light-blue-jokr lg:w-142">
            Crece tu participación de venta en línea y crea un mayor
            reconocimiento de tu marca por medio de nuestra oferta de espacios
            de publicidad.
          </p>

        <div className="mt-10 text-center">
        <a className="px-24 py-4 text-2xl transition duration-75 ease-in delay-75 border-2 rounded-full cursor-pointer hover:bg-light-blue-jokr hover:text-white border-light-blue-jokr" href="">Aprende más</a>
        </div>
        </div>

        <div className="mt-10 ">
        <img className="m-auto lg:hidden" src="src/assets/app-jork-xs.webp" alt="App JOKR" />
          <img className="hidden m-auto lg:block w-142" src="src/assets/app-jokr.webp" alt="App JOKR" />
        </div>

      </section>
    </>
  );
}

export default Home;
import Wrapper from "../components/Wrapper";

function Sustentability() {
  return (
    <section className="py-12 lg:px-10 bg-dark-blue-jokr">
      <Wrapper>
        <div className="text-5xl text-center text-light-green-jokr lg:text-7xl lg:text-left">
          <h1 className="font-bold light-green-jokr">
            Sustentabilidad en JOKR
          </h1>
        </div>
        <div className="pt-12 lg:pt-20">
          <p className="text-5xl font-bold text-center text-white lg:text-7xl lg:text-left">
            Nuestros pilares
          </p>
        </div>

        <div className="flex flex-col items-center justify-center px-3 pt-16 lg:flex-row lg:gap-28">
          <div className="flex flex-col items-center justify-center pb-12 lg:pb-0">
            <img
              className="w-80"
              src="src/assets/ambiente.webp"
              alt="Ambiente"
            />
            <div className="text-center lg:h-52">
              <h3 className="pt-6 text-xl font-bold text-center text-light-green-jokr">
                Proteger el medio ambiente
              </h3>
              <h4 className="pt-6 text-base font-medium text-grey-jokr">
                El planeta es nuestra casa
              </h4>
              <p className="text-base text-center text-grey-jokr">
                En JOKR creemos que cada acción que impacta al medio ambiente es
                importante, por lo que trabajamos para proteger el lugar donde
                vivimos.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pb-12 lg:pb-0 ">
            <img
              className="w-80"
              src="src/assets/capacitar.webp"
              alt="Ambiente"
            />

            <div className="text-center lg:h-52">
              <h3 className="pt-6 text-xl font-bold text-center text-light-green-jokr">
                Capacitar a las personas
              </h3>
              <h4 className="pt-6 text-base font-medium text-grey-jokr">
                La fuerza de las personas
              </h4>
              <p className="text-base text-center text-grey-jokr">
                Las personas son la fuente del cambio, y creemos que nuestros
                empleados están haciendo el cambio en el mundo al crear el
                futuro del comercio minorista.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pb-12 lg:pb-0 ">
            <img
              className="w-80"
              src="src/assets/invertir.webp"
              alt="Ambiente"
            />

            <div className="text-center lg:h-52">
              <h3 className="pt-6 text-xl font-bold text-center text-light-green-jokr">
                Invertir en las comunidades locales
              </h3>
              <h4 className="pt-6 text-base font-medium text-center text-grey-jokr">
                Ser el mejor vecino
              </h4>
              <p className="text-base text-center text-grey-jokr">
                Como empresa local, damos un gran valor a nuestros socios
                locales. Apoyando a las marcas de la comunidad para ofrecer el
                mejor surtido.
              </p>
            </div>
          </div>
        </div>
        </Wrapper>
    </section>
  );
}

export default Sustentability;

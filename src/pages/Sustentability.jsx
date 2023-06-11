function Sustentability() {
  return (
    <section className="bg-dark-blue-jokr">
      <div className="text-5xl text-center text-light-green-jokr lg:text-7xl lg:text-left">
        <h1 className="font-bold light-green-jokr">Sustentabilidad en JOKR</h1>
      </div>
      <div className="pt-12">
        <p className="text-5xl font-bold text-center text-white lg:text-7xl lg:text-left">
          Nuestros pilares
        </p>
      </div>

      <div className="flex flex-col items-center justify-center pt-16 lg:flex-row">
        <div className="flex flex-col items-center justify-center pb-12 lg:pb-12 ">
          <div className="">
            <img
              className="w-80"
              src="src/assets/ambiente.webp"
              alt="Ambiente"
            />
          </div>
          <h3 className="text-2xl font-bold text-light-green-jokr">
            Proteger el medio ambiente
          </h3>
          <h4 className="pt-6 text-base font-medium text-grey-jokr">El planeta es nuestra casa</h4>
          <p className="text-base text-grey-jokr">
            En JOKR creemos que cada acción que impacta al medio ambiente es
            importante, por lo que trabajamos para proteger el lugar donde
            vivimos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sustentability;

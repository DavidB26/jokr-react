import Wrapper from "../components/Wrapper";
function Manifest() {
  return (
    <section className="pt-12 pb-20 bg-dark-blue-jokr">
      <Wrapper>
    
        <div className="flex flex-col-reverse 2xl:items-start 2xl:justify-between 2xl:flex-row sm:justify-center sm:items-center sm:flex-row">
          <div className="px-4 2xl:px-0 2xl:w-142">
          <h1 className="hidden pb-6 text-5xl font-bold text-center sm:text-left sm:block 2xl:block 2xl:text-left 2xl:text-7xl text-green-jokr">
          Nuestro <br className="hidden sm:block 2xl:block" /> manifiesto
        </h1>
            <p className="pt-12 text-base 2xl:pt-0 2xl:text-2xl text-grey-jokr">
              Es una realidad, nos gusta planear todo en la vida. <br /> Pero las
              mejores cosas no siempre siguen planes.<br /> Sólo se trata de disfrutar
              cada instante.<br /> No hay pasos, sólo momentos: <br />Haz nuevos amigos.<br />
              Rompe la dieta.<br /> Escápate de tu oficina. <br />Sonríele a un extraño.<br />
              Acepta invitaciones de último momento.<br /> Desvíate de la ruta.
            </p>
            <p className="text-base 2xl:text-2xl text-grey-jokr">
              
              <strong>Descarga JOKR.</strong>
            </p>
            <p className="text-base 2xl:text-2xl text-grey-jokr">
              
              Recibe todo lo que quieras en 15 minutos.<br /> Ama tu trabajo y sé el
              mejor.<br /> Sé aún mejor divirtiéndote.<br /> La vida se pasa volando.<br /> El
              tiempo no vuelve atrás. <br />Haz tus compras lo más rápido que puedas.<br />
              Disfruta más la vida.<br /> Ama lo que haces..
            </p>

            <p className="pt-8 text-base 2xl:text-2xl text-grey-jokr">
              <strong>JOKR </strong>
            </p>
            <p className="text-base 2xl:text-2xl text-grey-jokr">
              <strong> No lo esperas </strong>
            </p>
            <p className="text-base 2xl:text-2xl text-grey-jokr">
              <strong>
                
                Frutas, verduras y todo lo que necesitas, al instante.
              </strong>
            </p>
          </div>
          <div>
          <h2 className="pb-6 text-5xl font-bold text-center sm:hidden md:hidden 2xl:hidden 2xl:text-left 2xl:text-7xl text-green-jokr">
          Nuestro <br className="hidden 2xl:block" /> manifiesto
        </h2>
            <div className="relative m-auto mr-0 bg-blue-jokr w-72 h-158 2xl:h-238 2xl:w-158 2xl:pb-0">
              <video className="absolute -translate-y-1/2 min-w-min h-142 top-1/2 right-5 2xl:right-0 2xl:-left-20 2xl:h-217 2xl:w-123" controls>
                <source
                  type="video/webm"
                  src="src/assets/video-manifiesto.mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Manifest;

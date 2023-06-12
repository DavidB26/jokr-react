import Wrapper from "../components/Wrapper";
function Manifest() {
  return (
    <section className="pt-12 pb-20 bg-dark-blue-jokr">
      <Wrapper>
    
        <div className="flex flex-col-reverse lg:items-start lg:justify-between lg:flex-row">
          <div className="px-4 lg:px-0 lg:w-142">
          <h1 className="hidden pb-6 text-5xl font-bold text-center lg:block lg:text-left lg:text-7xl text-green-jokr">
          Nuestro <br className="hidden lg:block" /> manifiesto
        </h1>
            <p className="pt-12 text-base lg:pt-0 lg:text-2xl text-grey-jokr">
              Es una realidad, nos gusta planear todo en la vida. <br /> Pero las
              mejores cosas no siempre siguen planes.<br /> Sólo se trata de disfrutar
              cada instante.<br /> No hay pasos, sólo momentos: <br />Haz nuevos amigos.<br />
              Rompe la dieta.<br /> Escápate de tu oficina. <br />Sonríele a un extraño.<br />
              Acepta invitaciones de último momento.<br /> Desvíate de la ruta.
            </p>
            <p className="text-base lg:text-2xl text-grey-jokr">
              
              <strong>Descarga JOKR.</strong>
            </p>
            <p className="text-base lg:text-2xl text-grey-jokr">
              
              Recibe todo lo que quieras en 15 minutos.<br /> Ama tu trabajo y sé el
              mejor.<br /> Sé aún mejor divirtiéndote.<br /> La vida se pasa volando.<br /> El
              tiempo no vuelve atrás. <br />Haz tus compras lo más rápido que puedas.<br />
              Disfruta más la vida.<br /> Ama lo que haces..
            </p>

            <p className="pt-8 text-base lg:text-2xl text-grey-jokr">
              <strong>JOKR </strong>
            </p>
            <p className="text-base lg:text-2xl text-grey-jokr">
              <strong> No lo esperas </strong>
            </p>
            <p className="text-base lg:text-2xl text-grey-jokr">
              <strong>
                
                Frutas, verduras y todo lo que necesitas, al instante.
              </strong>
            </p>
          </div>
          <div>
          <h2 className="pb-6 text-5xl font-bold text-center lg:hidden lg:text-left lg:text-7xl text-green-jokr">
          Nuestro <br className="hidden lg:block" /> manifiesto
        </h2>
            <div className="relative m-auto mr-0 bg-blue-jokr w-72 h-158 lg:h-238 lg:w-158 lg:pb-0">
              <video className="absolute -translate-y-1/2 min-w-min h-142 top-1/2 right-5 lg:right-0 lg:-left-20 lg:h-217 lg:w-123" controls>
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

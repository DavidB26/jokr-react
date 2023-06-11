import Wrapper from "../components/Wrapper";
function Manifest() {
  return (
    <section className="bg-dark-blue-jokr">
      <Wrapper>
        <h2 className="text-5xl font-bold text-center lg:text-left lg:text-7xl text-green-jokr">
          Nuestro <br className="hidden lg:block" /> manifiesto
        </h2>
    <div className="flex lg:flex-row">
    <div className="px-4 lg:px-0 lg:w-142">
          <p className="text-base lg:text-2xl text-grey-jokr">
            Es una realidad, nos gusta planear todo en la vida. Pero las mejores
            cosas no siempre siguen planes. Sólo se trata de disfrutar cada
            instante. No hay pasos, sólo momentos: Haz nuevos amigos. Rompe la
            dieta. Escápate de tu oficina. Sonríele a un extraño. Acepta
            invitaciones de último momento. Desvíate de la ruta.
          </p>
          <p className="text-base lg:text-2xl text-grey-jokr">
            {" "}
            <strong>Descarga JOKR.</strong>
          </p>
          <p className="text-base lg:text-2xl text-grey-jokr">
            {" "}
            Recibe todo lo que quieras en 15 minutos. Ama tu trabajo y sé el
            mejor. Sé aún mejor divirtiéndote. La vida se pasa volando. El
            tiempo no vuelve atrás. Haz tus compras lo más rápido que puedas.
            Disfruta más la vida. Ama lo que haces..
          </p>

          <p className="pt-8 text-base lg:text-2xl text-grey-jokr">
            <strong>JOKR </strong>{" "}
          </p>
          <p className="text-base lg:text-2xl text-grey-jokr">
            <strong> No lo esperas </strong>
          </p>
          <p className="text-base lg:text-2xl text-grey-jokr">
            <strong>
              {" "}
              Frutas, verduras y todo lo que necesitas, al instante.
            </strong>
          </p>
        </div>
        <div className="">

          <div className="m-auto bg-blue-jokr">
          <div className="pr-4 py-7 pl-14 w-100">
              <video controls>
=======
          <div className="relative m-auto mr-0 bg-blue-jokr w-72 h-158">
              <video className="absolute h-145 top-2 right-4" controls>

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

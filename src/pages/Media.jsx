import MediaImageBanner from "../assets/media-banner.png";
import Wrapper from "../components/Wrapper";
import MediaCellphone from "../assets/media-cellphone.png";
import MediaCell from "../assets/media-cell.png";
import MediaSales from "../assets/media-sales.png";
import MediaAnalysis from "../assets/media-analysis.png";

function Media() {
  return (
    <>
      {/* <div>
        <img src={MediaImageBanner} alt="" />
      </div> */}
      <section className="py-20 bg-dark-blue-jokr">
        <Wrapper>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-4">
              <h3 className="pt-6 text-2xl text-grey3-jokr">JOKR Media</h3>
              <p className="text-3xl font-bold text-green-jokr">
                Promociona tus productos en nuestra app JOKR a través de
                nuestros canales de publicidad, nuestra tienda y red de riders
              </p>
            </div>
            <div>
              <img className="m-auto" src={MediaCellphone} alt="" />
            </div>
          </div>
        </Wrapper>
      </section>
      <section className="pt-8 bg-white">
        <Wrapper>
          <div className="flex flex-col">
            <div className="flex flex-col gap-2 py-8">
              <div className="flex flex-col gap-4">
                <h3 className="text-4.5xl font-bold text-dark-blue-jokr">
                  Se el líder de la categoría
                </h3>
                <p className="text-2xl text-light-blue-jokr">
                  Ofrecemos una gran cantidad de banners, espacios y
                  oportunidades de patrocinio para asegurar que los consumidores
                  vean tu marca como el líder de la categoría.
                </p>
              </div>
              <div>
                <img src={MediaCell} alt="" />
              </div>
            </div>
            <div className="flex flex-col-reverse gap-2 py-5">
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-4.5xl text-dark-blue-jokr">
                  Crece tus ventas
                </h3>
                <p className="text-2xl text-light-blue-jokr">
                  Coloca una oferta dentro de los resultados de búsqueda,
                  recomendaciones de producto, carruseles y hasta en el
                  contenido de nuestra página de inicio. Tu producto estará
                  expuesto a través de nuestro contenido personalizado ya que
                  estará en un espacio de alta relevancia para el consumidor lo
                  cual incrementará las ventas de tu marca
                </p>
              </div>
              <div>
                <img src={MediaSales} alt="" />
              </div>
            </div>
            <div className="flex flex-col gap-2 py-5">
              <div className="flex flex-col gap-4">
                <h3 className="text-4.5xl font-bold text-dark-blue-jokr">
                  Analiza todo sobre tu éxito
                </h3>
                <p className="text-2xl text-light-blue-jokr">
                  Recibirás informes y consejos detallados posteriores a la
                  campaña que te permitirán ajustar tu estrategia a lo largo del
                  tiempo para poder mejorar tu retorno en gasto (ROAS).
                </p>
              </div>
              <div>
                <img src={MediaAnalysis} alt="" />
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
      <section></section>
    </>
  );
}

export default Media;

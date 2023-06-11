import MediaImageBanner from "../../assets/media-banner.png";
import Wrapper from "../../components/Wrapper";
import MediaCellphone from "../../assets/media-cellphone.png";
import MediaCell from "../../assets/media-cell.png";
import MediaSales from "../../assets/media-sales.png";
import MediaAnalysis from "../../assets/media-analysis.png";
import Espacios from "./components/Espacios";
import ImgEspaciosBanner from "../../assets/espacios-banners.png";
import ImgEspaciosAnuncios from "../../assets/espacios-anuncios.png";
import ImgEspaciosConsumidores from "../../assets/espacios-consumidores.png";
import ImgEspaciosOpciones from "../../assets/espacios-opciones.png";
import JokrMediaLogo from "../../assets/jokr-media-logo.png";

function Media() {
  return (
    <>
      <div className="flex flex-col items-center gap-8 pt-6 bg-dark-blue-jokr">
        <div className="flex justify-center px-4 md:px-0">
          <img 
            src={JokrMediaLogo}
            alt="Jokr Media Logo"
            width={750}
            height={160}
          />
        </div>
        <div
          className="px-4 pt-4 bg-center bg-cover h-170 w-full md:h-[828px] md:max-w-[1068px] md:pt-[68px]"
          style={{ backgroundImage: `url(${MediaImageBanner})` }}
        >
          <div className="flex flex-col gap-2 mx-auto max-w-[847px] md:gap-4 ">
            <h2 className="text-center text-dark-blue-jokr text-4.5xl md:text-[56px]">
              ¡Construye tu marca con nosotros!
            </h2>
            <p className="text-center text-dark-blue-jokr md:text-2xl">
              Crece tu participación de mercado en línea y crea un mayor
              reconocimiento de tu marca por medio de nuestra oferta de espacios
              de publicidad.
            </p>
          </div>
        </div>
      </div>
      <section className="py-20 bg-dark-blue-jokr">
        <Wrapper>
          <div className="flex flex-col items-center gap-2 md:flex-row md:items-start">
            <div className="flex flex-col gap-4">
              <h3 className="pt-6 text-2xl text-grey3-jokr">JOKR Media</h3>
              <p className="text-3xl font-bold text-light-green-jokr md:text-5xl">
                Promociona tus productos en nuestra app JOKR a través de
                nuestros canales de publicidad, nuestra tienda y red de riders
              </p>
            </div>
            <div className="flex justify-center max-w-[328px] w-full md:min-w-[328px] md:max-w-[418px]">
              <img className="m-auto" src={MediaCellphone} alt="" />
            </div>
          </div>
        </Wrapper>
      </section>
      <section className="pt-8 bg-white md:py-12">
        <Wrapper>
          <div className="flex flex-col">
            <div className="flex flex-col gap-2 py-8 md:flex-row md:py-[18px] md:items-center">
              <div className="flex flex-col gap-4 max-w-[725px]">
                <h3 className="text-4.5xl font-bold text-dark-blue-jokr md:text-5xl">
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
            <div className="flex flex-col-reverse gap-2 py-5 md:flex-row-reverse md:py-[18px] md:items-center">
              <div className="flex flex-col gap-4 max-w-[725px]">
                <h3 className="font-bold text-4.5xl text-dark-blue-jokr md:text-5xl">
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
            <div className="flex flex-col gap-2 py-5 md:flex-row md:py-[18px] md:items-center">
              <div className="flex flex-col gap-4 max-w-[725px]">
                <h3 className="text-4.5xl font-bold text-dark-blue-jokr md:text-5xl">
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
      <section className="py-16 bg-dark-blue-jokr">
        <Wrapper>
          <div className="flex flex-col gap-20">
            <h3 className="text-3xl font-bold text-center text-light-green-jokr md:text-6xl">
              Una gran cantidad de espacios que se adaptan a todas tus
              necesidades.
            </h3>
            <div className="flex flex-col gap-10 md:gap-20">
              <div className="flex flex-col gap-10 md:flex-row md:gap-4">
                <Espacios
                  image={ImgEspaciosBanner}
                  textAlt={"Icon espacio banner"}
                  title={"Variedad de banners dentro de la página de inicio"}
                  text={
                    "Elige el tipo de contenido que mejor satisfaga tu presupuesto y que te ayude a alcanzar tus objetivos."
                  }
                />
                <Espacios
                  image={ImgEspaciosAnuncios}
                  textAlt={"Icon espacio anuncios"}
                  title={"Plataforma de anuncios JOKR"}
                  text={
                    "Haz una oferta para mejorar la posición de tus productos dentro de la herramienta de búsqueda, la página de inicio y el contenido recomendado de JOKR."
                  }
                />
              </div>
              <div className="flex flex-col gap-10 md:flex-row md:gap-4">
                <Espacios
                  image={ImgEspaciosConsumidores}
                  textAlt={"Icon espacio consumidores"}
                  title={"Alcanza consumidores de JOKR fuera de la app"}
                  text={
                    "Promueve tus productos a nuestros clientes fuera de nuestra app por medio de los canales de publicidad JOKR."
                  }
                />
                <Espacios
                  image={ImgEspaciosOpciones}
                  textAlt={"Icon espacio opciones"}
                  title={"Una gran cantidad de opciones para exponer tu marca"}
                  text={
                    "Muestra tu marca frente a los clientes con actividades de muestreo, bolsas patrocinadas y patrocinio de activos físicos de JOKR."
                  }
                />
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
}

export default Media;

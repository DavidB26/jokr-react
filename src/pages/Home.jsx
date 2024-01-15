import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import { HashLink } from "react-router-hash-link";
import LogoGreen from "../assets/logo-green.png";
import LogoGooglePlay from "../assets/logo-google-play.png";
import LogoAppStore from "../assets/logo-app-store.png";
import BannerGroceries from "../assets/banner-groceries.png";
import BannerGroceriesXs from "../assets/banner-groceries-xs.webp";
import Ellipse1 from "../assets/Ellipse1.png";
import Ellipse2 from "../assets/Ellipse2.png";
import Ellipse3 from "../assets/Ellipse3.png";
import Ellipse4 from "../assets/Ellipse4.png";
import Cohete from "../assets/Cohete.png";
import Medalla from "../assets/Medalla.png";
import Tarjeta from "../assets/Tarjeta.png";
import Eco from "../assets/Eco.png";
import Arrow from "../assets/arrow.png";
import Bullets from "../assets/bullets.png";
import Descarga from "../assets/DescargaApp.png";
import Elige from "../assets/EligeTusProductos.png";
import Recibe from "../assets/Recibe.png";
import AppJokrXs from "../assets/app-jork-xs.webp";
import AppJokr from "../assets/app-jokr.webp";

function Home() {
  return (
    <>
      <section className='py-4 overflow-hidden md:pt-12 md:pb-24 bg-light-blue-jokr'>
        <Wrapper>
          <div className='flex flex-col items-center justify-center md:flex-row md:items-start'>
            <div>
              <div>
                <h1 className='block text-5xl font-bold text-center text-white md:text-7xl md:text-left'>
                  Todo lo que <br /> necesitas, <br />
                  <span className='text-green-jokr'>en minutos</span>
                </h1>
                <p className='block py-4 text-base text-center text-white md:py-8 md:w-132 md:text-2xl md:text-left'>
                  El futuro del supermercado está aquí. <br /> En minutos te
                  llevamos frutas, verduras, tus marcas favoritas y todo lo que
                  necesitas.
                </p>
              </div>
              <div className='flex items-center justify-center gap-4 md:justify-start'>
                <div>
                  <img
                    className='w-16'
                    src={LogoGreen}
                    alt='logo green jokr'
                    width={54}
                    height={54}
                  />
                </div>
                <div>
                  <h2 className='text-2xl font-bold leading-6 text-green-jokr'>
                    Descarga la <br /> App
                  </h2>
                </div>
              </div>

              <div className='flex items-center justify-center gap-4 py-8 md:flex-col md:items-start'>
                <div>
                  <img
                    src={LogoGooglePlay}
                    alt='logo Play Store'
                    width={200}
                    height={60}
                  />
                </div>

                <div>
                  <img
                    src={LogoAppStore}
                    alt='Logo App Store'
                    width={200}
                    height={60}
                  />
                </div>
              </div>
            </div>
            <div className=''>
              <div className='relative hidden md:block'>
                <img
                  className='relative z-20 md:w-164 '
                  src={BannerGroceries}
                  alt=''
                />

                <div className='absolute top-0 bottom-auto right-auto z-0 w-full animation-eclipse-green-1 left-20'>
                  <img className='w-[212px]' src={Ellipse1} alt='' />
                </div>
                <div className='animation-eclipse-red absolute top-12 bottom-auto left-auto z-30 w-full -right-[555px]'>
                  <img className='w-[149px]' src={Ellipse2} alt='' />
                </div>
                <div className='absolute bottom-0 top-auto right-auto z-0 w-full animation-eclipse-white -left-16'>
                  <img className='w-[268px]' src={Ellipse3} alt='' />
                </div>
                <div className='animation-eclipse-green-2 absolute bottom-7 -right-[418px] top-auto left-auto z-0 w-full'>
                  <img className='w-[306px]' src={Ellipse4} alt='' />
                </div>
              </div>

              <div className='block md:hidden'>
                <img
                  className='relative z-20 md:w-164 '
                  src={BannerGroceriesXs}
                  alt=''
                />
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <section id='what-we-do' className='bg-dark-blue-jokr'>
        <Wrapper>
          <div className='flex flex-col justify-center gap-4 py-16 md:flex-row'>
            <div className='pb-8 text-center md:pb-0'>
              <img className='w-32 pb-5 m-auto' src={Cohete} alt='Cohete' />
              <h2 className='pb-5 text-2xl text-grey-jokr'>
                Envío al instante
              </h2>
              <p className='text-base text-green-jokr '>
                El tiempo lo es todo, estaremos en tu puerta más rápido de lo
                que te imaginas.
              </p>
            </div>
            <div className='pb-8 text-center md:pb-0'>
              <img className='w-32 pb-5 m-auto' src={Medalla} alt='Medalla' />
              <h2 className='pb-5 text-2xl text-grey-jokr'>
                Productos de calidad
              </h2>
              <p className='text-base text-green-jokr '>
                Tenemos tus productos y marcas favoritas para asegurarnos que
                encuentres todo lo que amas.
              </p>
            </div>
            <div className='pb-8 text-center md:pb-0'>
              <img className='w-32 pb-5 m-auto' src={Tarjeta} alt='Tarjeta' />
              <h2 className='pb-5 text-2xl text-grey-jokr'>Precios justos</h2>
              <p className='text-base text-green-jokr '>
                Disfruta de las mejores promociones sin necesidad de alcanzar un
                monto mínimo.
              </p>
            </div>
            <div className='pb-8 text-center md:pb-0'>
              <img className='w-32 pb-5 m-auto' src={Eco} alt='Eco' />
              <h2 className='pb-5 text-2xl text-grey-jokr'>Un mundo mejor</h2>
              <p className='text-base text-green-jokr '>
                Impulsamos el cero desperdicio de comida, tiempo y dinero. ¡Sólo
                compra lo que necesites, cuando lo necesites!
              </p>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className='py-10 md:py-16 bg-light-blue-jokr'>
        <Wrapper>
          <div className='flex flex-col items-center justify-around md:flex-row md:gap-20'>
            <div>
              <h2 className='pb-6 text-3xl font-bold text-white md:text-3xl'>
                Compra todo lo que necesites:
              </h2>
              <p className='text-base text-white md:w-132 md:text-2xl'>
                Compra todo lo que necesites: estás en una buena racha, pero es
                momento de cambiar la rutina. Una forma más sencilla de comprar;
                menos molesta, menos aburrida y mucho más libre.
              </p>
              <p className='text-base text-white md:w-132 md:text-2xl md:pb-36'>
                {" "}
                Una forma más inteligente de hacer las compras en donde no
                saturas tu refrigerador de comida ni desperdicias comida. Y
                además, que sea un poco mágica...{" "}
              </p>

              <div className='flex items-center gap-2 py-14 md:py-0'>
                <Link
                  className='text-3xl text-white md:text-2xl'
                  to='https://apps.apple.com/app/id1561652691?mt=8'
                  target='_blank'
                  rel='noopener noreferer'
                >
                  Descargar la app
                </Link>
                <img className='w-3 rebotar' src={Arrow} alt='Arrow' />
              </div>
            </div>
            <div>
              <h2 className='pb-8 text-3xl font-bold text-white md:pb-24 '>
                El futuro del <br className='md:hidden' /> supermercado está{" "}
                <br className='md:hidden' /> aquí.
              </h2>
              <div>
                <img className='w-142' src={Bullets} alt='Bullets green' />
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <section id='how-it-works' className='bg-white'>
        <Wrapper>
          <div className='flex flex-col items-center justify-around py-16 md:flex-row '>
            <div className='flex flex-col items-center justify-center pb-12 md:pb-12 '>
              <div className='h-36 md:h-28'>
                <img className='w-24 ' src={Descarga} alt='Descarga' />
              </div>
              <h3 className='text-2xl font-bold text-light-blue-jokr'>
                Descarga la app
              </h3>
            </div>
            <div className='flex flex-col items-center justify-center pb-12 md:pb-12 '>
              <div className='h-36 md:h-28'>
                <img className='w-24 ' src={Elige} alt='Elige' />
              </div>
              <h3 className='text-2xl font-bold text-light-blue-jokr'>
                Elige tus productos
              </h3>
            </div>
            <div className='flex flex-col items-center justify-center pb-12 md:pb-12 '>
              <div className='h-36 md:h-28'>
                <img className='w-16 ' src={Recibe} alt='Recibe' />
              </div>
              <h3 className='text-2xl font-bold text-light-blue-jokr'>
                Recíbelo en minutos
              </h3>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className=' bg-green-jokr'>
        <Wrapper>
          <div className='flex flex-col justify-center pt-10 md:pt-0 md:flex-row-reverse'>
            <div className='flex flex-col items-center justify-center md:items-start '>
              <h2 className='pb-8 text-5xl font-bold text-light-blue-jokr'>
                ¡Crece tu marca con nosotros!
              </h2>
              <p className='text-2xl text-light-blue-jokr md:w-142'>
                Crece tu participación de venta en línea y crea un mayor
                reconocimiento de tu marca por medio de nuestra oferta de
                espacios de publicidad.
              </p>

              <div className='mt-10 text-center'>
                <HashLink
                  className='px-16 py-3 text-2xl transition duration-75 ease-in delay-75 border-2 rounded-full cursor-pointer md:px-24 md:py-4 text-light-blue-jokr hover:bg-light-blue-jokr hover:text-white border-light-blue-jokr'
                  to='/media'
                >
                  Aprende más
                </HashLink>
              </div>
            </div>
            <div className='mt-10 '>
              <img
                className='m-auto md:hidden'
                src={AppJokrXs}
                alt='App JOKR'
              />
              <img
                className='hidden m-auto md:block w-142'
                src={AppJokr}
                alt='App JOKR'
              />
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
}

export default Home;

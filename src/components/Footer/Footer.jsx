import Wrapper from "../Wrapper";
import Icon from "../Icon";


function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="px-10 py-12 bg-dark-blue-jokr">
      <Wrapper>
        <div className="flex flex-col justify-between lg:flex-row gap-9">
          <div className="flex items-center justify-center gap-2 ">
            <div>
              <img
                className="w-24 img-fluid"
                src="src/assets/logo-footer.png"
                alt="logo footer"
              />
            </div>
            <div>
              <p className="text-base text-grey-jokr">JOKR Perú SAC</p>
              <p className="text-base text-grey-jokr">
                {" "}
                Av. Hipólito Unanue 251
              </p>
              <p className="text-base text-grey-jokr">Miraflores - Lima</p>
            </div>
          </div>
          <div className="text-center ">
            <img className="w-142" src="src/assets/bullets.png" alt="Bullets" />
          </div>
        </div>

        <div className="p-3 text-center lg:mt-20 lg:text-left">
          <a
            className="text-lg underline cursor-pointer text-grey-jokr"
            href=""
          >
            Campañas promocionales
          </a>
        </div>
        <div className="p-3 text-center lg:text-left">
          <a
            className="text-lg underline cursor-pointer text-grey-jokr"
            href=""
          >
            Términos y condiciones
          </a>
        </div>
        <div className="p-3 text-center lg:text-left">
          <a
            className="text-lg underline cursor-pointer text-grey-jokr"
            href=""
          >
            Política de privacidad
          </a>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 p-3 text-center lg:text-left lg:flex-row lg:gap-0">
          <p className="text-lg cursor-pointer text-grey-jokr">@jokrperu</p>
          <p className="text-xs cursor-pointer text-grey-jokr">
            © {currentYear} by JOKR SAC
          </p>
        </div>
       
     
      
      </Wrapper>
    </footer>
  );
}

export default Footer;

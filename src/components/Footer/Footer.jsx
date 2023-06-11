function Footer() {
  return (
    <div className="bg-dark-blue-jokr py-12 px-10">
      <div className=" flex justify-between flex-col lg:flex-row gap-9">
        <div className=" gap-2 flex justify-center  items-center ">
          <div>
            <img
              className="w-24 img-fluid"
              src="src/assets/logo-footer.png"
              alt="logo footer"
            />
          </div>
          <div>
            <p className="text-base text-grey-jokr">JOKR Perú SAC</p>
            <p className="text-base text-grey-jokr"> Av. Hipólito Unanue 251</p>
            <p className="text-base text-grey-jokr">Miraflores - Lima</p>
          </div>
        </div>
        <div className="text-center ">
          <img  src="src/assets/bullets.png" alt="Bullets" />
        </div>
      </div>

      <div className="p-3 lg:mt-20 text-center lg:text-left">
        <a className="text-grey-jokr cursor-pointer underline text-lg" href="">
          Campañas promocionales
        </a>
      </div>
      <div className="p-3 text-center lg:text-left">
        <a className="text-grey-jokr cursor-pointer underline text-lg" href="">
          Términos y condiciones
        </a>
      </div>
      <div className="p-3 text-center lg:text-left">
        <a className="text-grey-jokr cursor-pointer underline text-lg" href="">
          Política de privacidad
        </a>
      </div>

      <div className="p-3 text-center lg:text-left flex items-center justify-between flex-col lg:flex-row gap-5  lg:gap-0">
        <p className="text-grey-jokr cursor-pointer  text-lg">@jokrperu</p>
        <p className="text-grey-jokr cursor-pointer  text-xs">© 2023 by JOKR SAC</p>
      </div>
    
    </div>
  );
}

export default Footer;

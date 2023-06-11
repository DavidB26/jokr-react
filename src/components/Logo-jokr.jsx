import Logo from '../assets/jokr-logo.png'

function LogoJokr({height, width}) {
  return (
    <img src={Logo} alt="Logo Jokr" height={height} width={width} />
  )
}

export default LogoJokr

LogoJokr.defaultProps = {
  height: 82,
  width: 190
}

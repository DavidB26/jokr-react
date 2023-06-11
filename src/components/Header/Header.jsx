import Icon from '../Icon'
import LogoJokr from '../Logo-jokr'

function Header() {
  return (
    <header className="p-4 bg-dark-blue-jokr">
      <LogoJokr/>
      <Icon nameIcon='facebook'/>
      <Icon nameIcon='linked-in'/>
    </header>
  )
}

export default Header

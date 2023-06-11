import Icon from '../Icon'
import LogoJokr from '../Logo-jokr'
import Navbar from './components/Navbar'

function Header() {
  return (
    <header className="p-4 bg-dark-blue-jokr">
      <LogoJokr/>
      <Navbar/>
    </header>
  )
}

export default Header

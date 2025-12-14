import { Link } from 'react-router-dom'
import { __ } from '@/i18n/translate'
import './Header.module.css'

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">{__('app.title')}</Link>
      </h1>
    </header>
  )
}

export default Header

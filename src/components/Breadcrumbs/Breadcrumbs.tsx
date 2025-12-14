import { Link } from 'react-router-dom'
import { __ } from '../../i18n/translate'
import styles from './Breadcrumbs.module.css'

interface BreadcrumbsProps {
  current: string
}

const Breadcrumbs = ({ current }: BreadcrumbsProps) => {
  return (
    <nav className={styles.breadcrumbs}>
      <Link to="/">{__('breadcrumbs.home')}</Link>
      <span> / </span>
      <span>{current}</span>
    </nav>
  )
}

export default Breadcrumbs

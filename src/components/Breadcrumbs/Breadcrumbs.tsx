import { Link } from 'react-router-dom'
import { __ } from '../../i18n/translate'
import styles from './Breadcrumbs.module.css'

interface BreadcrumbsProps {
  current: string
}

const Breadcrumbs = ({ current }: BreadcrumbsProps) => {
  return (
    <nav className={styles.breadcrumbs} aria-label={__('breadcrumbs.ariaLabel')}>
      <ol className={styles.list}>
        <li className={styles.item}>
          <Link to="/">{__('breadcrumbs.home')}</Link>
        </li>
        <li className={styles.item} aria-current="page">
          <span>{current}</span>
        </li>
      </ol>
    </nav>
  )
}

export default Breadcrumbs

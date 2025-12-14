import styles from './SearchBar.module.css'
import { __ } from '../../i18n/translate'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <input
      type="text"
      placeholder={__('search.placeholder')}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.input}
    />
  )
}

export default SearchBar
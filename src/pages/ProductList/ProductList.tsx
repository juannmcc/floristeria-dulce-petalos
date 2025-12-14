import { useState } from 'react'
import { __ } from '../../i18n/translate'
import { useProducts } from '../../hooks/useProducts'
import ProductCard from '../../components/ProductCard/ProductCard'
import SearchBar from '../../components/SearchBar/SearchBar'
import styles from './ProductList.module.css'

const ProductList = () => {
  const { products, loading, error } = useProducts()
  const [search, setSearch] = useState('')

  if (loading) return <p>{__('loading')}</p>
  if (error) return <p>{__(error)}</p>

  const filteredProducts = products.filter(product =>
    (product.name?.toLowerCase().includes(search.toLowerCase()) ?? false) ||
    (product.scientific_name?.toLowerCase().includes(search.toLowerCase()) ?? false)
  )
  
  return (
    <div>
      <h2>{__('products.list.title')}</h2>

      <SearchBar value={search} onChange={setSearch} />

      <div className={styles.grid}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList

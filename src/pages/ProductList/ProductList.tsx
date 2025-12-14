import { useState } from 'react'
import { __ } from '@/i18n/translate'
import { useProducts } from '@/hooks/useProducts'
import ProductCard from '@/components/ProductCard/ProductCard'
import SearchBar from '@/components/SearchBar/SearchBar'
import styles from './ProductList.module.css'

const ProductList = () => {
  const { products, loading, error } = useProducts()
  const [search, setSearch] = useState('')

  if (loading) return <p>{__('loading')}</p>
  if (error) return <p>{__(error)}</p>

  const filteredProducts = products.filter(({ name, binomialName }) => {
    const searchLower = search.toLowerCase()
    return (
      name.toLowerCase().includes(searchLower) ||
      binomialName.toLowerCase().includes(searchLower)
    )
  })
  
return (
  <div className={styles.page}>
    <div className={styles.gridContainer}>
      <SearchBar value={search} onChange={setSearch} />
      <div className={styles.grid}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </div>
)

}

export default ProductList

import { __ } from '../../i18n/translate'
import { useProducts } from '../../hooks/useProducts'
import ProductCard from '../../components/ProductCard/ProductCard'
import styles from './ProductList.module.css'

const ProductList = () => {
  const { products, loading, error } = useProducts()

  if (loading) return <p>{__('loading')}</p>
  if (error) return <p>{__(error)}</p>

  return (
    <div>
      <h2>{__('products.list.title')}</h2>

      <div className={styles.grid}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList

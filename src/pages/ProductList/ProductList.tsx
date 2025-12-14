import { __ } from '../../i18n/translate'
import { useProducts } from '../../hooks/useProducts'

const ProductList = () => {
  const { products, loading, error } = useProducts()

  if (loading) {
    return <p>{__('loading')}</p>
  }

  if (error) {
    return <p>{__(error)}</p>
  }

  return (
    <div>
      <h2>{__('products.list.title')}</h2>
      <p>{__('products.total')}: {products.length}</p>
    </div>
  )
}

export default ProductList
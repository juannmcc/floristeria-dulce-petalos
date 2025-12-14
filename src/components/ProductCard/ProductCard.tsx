import { Link } from 'react-router-dom'
import type { Product } from '../../types/product'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`} className={styles.card}>
      <h3>{product.name}</h3>
      <p>{product.binomialName}</p>
      <img src={product.imgUrl} alt={product.name} />
      <strong>€{product.price.toFixed(2)}</strong>
    </Link>
  )
}

export default ProductCard

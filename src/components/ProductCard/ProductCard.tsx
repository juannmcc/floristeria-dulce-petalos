import { Link } from 'react-router-dom'
import type { Product } from '../../types/product'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`} className={styles.card}>
      <img src={product.imgUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.binomialName}</p>
      <strong>{product.price} €</strong>
    </Link>
  )
}

export default ProductCard
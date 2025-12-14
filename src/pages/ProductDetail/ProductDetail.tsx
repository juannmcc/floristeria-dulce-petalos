import { useParams } from 'react-router-dom'
import { __ } from '../../i18n/translate'
import { useProductDetail } from '../../hooks/useProductDetail'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import {
  getWateringText,
  getFertilizerText,
} from '../../mappings/productTexts'
import styles from './ProductDetail.module.css'

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>()

  if (!id) return null

  const { product, loading, error } = useProductDetail(id)

  if (loading) return <p>{__('loading')}</p>
  if (error || !product) return <p>{__(error ?? 'error.not.found')}</p>

  return (
    <div className={styles.container}>
      <Breadcrumbs current={product.name} />

      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img src={product.imgUrl} alt={product.name} />
        </div>

        <div className={styles.info}>
          <h2>{product.name}</h2>
          <p className={styles.binomial}>{product.binomialName}</p>

          <strong className={styles.price}>
            €{product.price.toFixed(2)}
          </strong>

          <ul className={styles.details}>
            <li>· {getWateringText(product.wateringsPerWeek)}</li>
            <li>· {getFertilizerText(product.fertilizerType)}</li>
          </ul>

          <button
            type="button"
            className={styles.addToCart}
            onClick={() => {}}
          >
            {__('actions.addToCart')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

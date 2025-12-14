import { useParams, useNavigate } from 'react-router-dom'
import { __ } from '../../i18n/translate'
import { useProductDetail } from '../../hooks/useProductDetail'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import styles from './ProductDetail.module.css'

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  if (!id) return null

  const { product, loading, error } = useProductDetail(id)

  if (loading) return <p>{__('loading')}</p>
  if (error || !product) return <p>{__(error ?? 'error.not.found')}</p>

  return (
    <div className={styles.container}>
      <Breadcrumbs current={product.name} />

      <div className={styles.content}>
        <img src={product.imgUrl} alt={product.name} />

        <div>
          <h2>{product.name}</h2>
          <p>{product.binomialName}</p>
          <strong>{product.price} €</strong>

          <ul>
            <li>
              {__('product.wateringsPerWeek')}: {product.wateringsPerWeek}
            </li>
            <li>
              {__('product.fertilizerType')}: {product.fertilizerType}
            </li>
          </ul>

          <button onClick={() => navigate(-1)}>
            {__('actions.back')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

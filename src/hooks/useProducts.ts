import { useEffect, useState } from 'react'
import { getProducts } from '@/api/productService'
import type { Product } from '@/types/product'

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts()
        setProducts(data)
      } catch (err) {
        setError('error.fetching.products')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { products, loading, error }
}
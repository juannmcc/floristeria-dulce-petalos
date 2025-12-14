import axios from 'axios'
import type { Product } from '../types/product'

const API_BASE_URL = 'https://dulces-petalos.jakala.es/api/v1'

export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(`${API_BASE_URL}/product`)
  return response.data
}

export const getProductById = async (id: string): Promise<Product> => {
  const response = await axios.get<Product>(`${API_BASE_URL}/product/${id}`)
  return response.data
}

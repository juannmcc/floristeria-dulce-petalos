import { __ } from '../i18n/translate'

export const getWateringText = (times: number): string => {
  const base = __('product.wateringsPerWeek')
  const unit = times === 1 ? __('time.singular') : __('time.plural')
  return `${base} ${times} ${unit}`
}

export const getFertilizerText = (fertilizerRaw: string): string => {
  const base = __('product.fertilizer.with')
  const normalized = fertilizerRaw.trim().toLowerCase()
  const translated = mapFertilizerType(normalized)
  return `${base} ${translated}`
}

const mapFertilizerType = (fertilizer: string): string => {
  if (fertilizer === 'fósforo' || fertilizer === 'nitrógeno') {
    return fertilizer
  }

  switch (fertilizer) {
    case 'phosphorus':
      return __('fertilizer.phosphorus')
    case 'nitrogen':
      return __('fertilizer.nitrogen')
    default:
      return fertilizer
  }
}
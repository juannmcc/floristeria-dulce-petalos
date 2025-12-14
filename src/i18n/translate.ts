const esES: Record<string, string> = {
  'breadcrumbs.home': 'Inicio',
  'actions.addToCart': 'Añadir al carrito',
  'error.not.found': 'Contenido no encontrado',
  'product.wateringsPerWeek': 'Regar',
  'product.fertilizer.with': 'Fertilizar con',
  'time.singular': 'vez por semana',
  'time.plural': 'veces por semana',
  'fertilizer.phosphorus': 'fósforo',
  'fertilizer.nitrogen': 'nitrógeno',
  'search.placeholder': 'Busca en nuestra tienda',
  loading: 'Cargando…',
}

export const __ = (key: string): string => {
  return esES[key] ?? key
}

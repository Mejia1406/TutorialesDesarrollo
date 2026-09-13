export function formatToCOP(price: number): string { 
  const formatter = new Intl.NumberFormat('es-CO', { 
    style: 'currency', 
    currency: 'COP', 
    minimumFractionDigits: 0, 
    maximumFractionDigits: 0, 
  }); 

  return formatter.format(price).replace(/^\s*\$\s?/, ''); 
}

export function formatDate(iso?: string): string {
  if (!iso) return '';

  return new Date(iso).toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
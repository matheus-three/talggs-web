export function currencyFormatter(value: number): string {
  if (typeof value !== 'number') return 'R$';
  return 'R$ ' + value.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+,)/g, '$1.');
}
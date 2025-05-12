export const numToUSD = (number: number): string => {
  const includeCents = number / 100

  return includeCents.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
}

export const numToUSD = (number: number): string => {
  const includeCents = number

  return includeCents.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
}

const productSortActions = [
  {
    label: 'Name (A-Z)',
  },
  {
    label: 'Name (Z-A)',
  },
  { label: 'Price (Low to High)' },
  { label: 'Price (High to Low)' },
]

export const productsSortOptions = productSortActions.map((action) => {
  return action.label
})

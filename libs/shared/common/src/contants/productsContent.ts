export const productSortActions = [
  {
    label: 'Name (A-Z)',
  },
  {
    label: 'Name (Z-A)',
  },
  { label: 'Price (Low to High)' },
  { label: 'Price (High to Low)' },
]
export const categoryToggles = [
  { label: 'All' },
  { label: 'Kids' },
  { label: 'Sofas' },
  { label: 'Beds' },
  { label: 'Tables' },
  { label: 'Chairs' },
]
export const companyToggles = [
  { label: 'Artifex' },
  { label: 'Luxora' },
  { label: 'Homestead' },
  { label: 'Modenza' },
  { label: 'Comfora' },
]
export const productsSortOptions = productSortActions.map((action) => {
  return action.label
})

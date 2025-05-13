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
export const categories = ['Kids', 'Sofas', 'Beds', 'Tables', 'Chairs']
export const companies = ['Luxora', 'Homestead', 'Modenza', 'Comfora']
export const productsSortOptions = productSortActions.map((action) => {
  return action.label
})

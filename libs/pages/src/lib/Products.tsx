import { ProductsHeader } from '@sas-mrts/ui'
import { ProductsList } from '@sas-mrts/ui'

function Products() {
  return (
    <div className="relative items-center justify-center w-ful overflow-auto">
      <ProductsHeader />
      <ProductsList />
    </div>
  )
}

export { Products }

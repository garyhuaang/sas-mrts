import { ProductsHeader } from '@sas-mrts/ui'
import { ProductsList } from '@sas-mrts/ui'

function Products() {
  return (
    <div className="reduced-viewport items-center justify-center w-full">
      <ProductsHeader />
      <ProductsList />
    </div>
  )
}

export { Products }

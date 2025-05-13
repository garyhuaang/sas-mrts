import { ProductsHeader } from '@sas-mrts/ui'
import { ProductsList } from '@sas-mrts/ui'

function Products() {
  return (
    <div className="flex flex-col items-center justify-center reduced-viewport w-full mt-10 p-10">
      <ProductsHeader />
      <ProductsList />
    </div>
  )
}

export { Products }

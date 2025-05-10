import { ProductsHeader } from '@sas-mrts/ui'
import { ProductIndicators, ProductsList } from '@sas-mrts/ui'

function Products() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <ProductsHeader />
      <ProductIndicators />
      <ProductsList />
    </div>
  )
}

export { Products }

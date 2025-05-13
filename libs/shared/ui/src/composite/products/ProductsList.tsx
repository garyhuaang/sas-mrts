import ProductCards from './ProductCards'
import { ProductIndicators } from './ProductIndicators'
import ProductsMoreFilters from './ProductsMoreFilters'

import { useAppSelector } from '@sas-mrts/rStore'

function ProductsList() {
  const products = useAppSelector((state) => state.products.filteredItems)

  return (
    <div className="flex w-full p-10 pt-3 gap-8">
      <ProductsMoreFilters />
      <div className="flex flex-col w-full">
        <ProductIndicators />
        <div className="flex justify-start max-h-[calc(100vh-300px)] overflow-auto mb-3 no-scrollbar">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
            gap-8 h-full"
          >
            <ProductCards products={products} />
          </div>
        </div>
      </div>
    </div>
  )
}

export { ProductsList }

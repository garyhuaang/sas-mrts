import ProductCards from './ProductCards'
import { ProductIndicators } from './ProductIndicators'
import ProductsMoreFilters from './ProductsMoreFilters'

import { useAppSelector } from '@sas-mrts/rStore'

function ProductsList() {
  const products = useAppSelector((state) => state.products.filteredItems)

  return (
    <div className="flex w-full p-10 pt-3 gap-8 h-[calc(100vh-284px)]">
      <ProductsMoreFilters />
      <div className="flex flex-col w-full ">
        <ProductIndicators />
        <div className="flex justify-start overflow-y-auto  ">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
            gap-8 overflow-auto min-h-full no-scrollbar"
          >
            <ProductCards products={products} />
          </div>
        </div>
      </div>
    </div>
  )
}

export { ProductsList }

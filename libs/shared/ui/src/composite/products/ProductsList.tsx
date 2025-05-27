import { useEffect } from 'react'

import { Skeleton } from '../../base'

import ProductCards from './ProductCards'
import { ProductIndicators } from './ProductIndicators'
import ProductsMoreFilters from './ProductsMoreFilters'

import {
  type Product,
  rStore,
  setProducts,
  useGetProductsQuery,
} from '@sas-mrts/rStore'

function ProductsList() {
  const { data: allProducts, isSuccess, isLoading } = useGetProductsQuery()

  useEffect(() => {
    if (isSuccess) rStore.dispatch(setProducts(allProducts as Product[]))
  }, [isSuccess])

  return isLoading ? (
    <Skeleton className="w-full h-full rounded-full" />
  ) : (
    <div className="grid md:grid-cols-7 sm:grid-cols-1 p-10 pt-3 h-full gap-8">
      <div className="sticky">
        <ProductsMoreFilters />
      </div>

      <div className="md:col-span-6 xs:col-span-1 h-[calc(100vh-248px)]">
        <div className="flex flex-col w-full overflow-auto">
          <ProductIndicators />
          <div className="flex justify-start overflow-y-auto  ">
            <div
              className="grid grid-cols-1 w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
            gap-8 overflow-auto min-h-full no-scrollbar"
            >
              <ProductCards />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ProductsList }

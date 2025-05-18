import { useEffect, useState } from 'react'

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
    <div className="flex w-full p-10 pt-3 gap-8 h-[calc(100vh-284px)]">
      <ProductsMoreFilters />
      <div className="flex flex-col w-full ">
        <ProductIndicators />
        <div className="flex justify-start overflow-y-auto  ">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
            gap-8 overflow-auto min-h-full no-scrollbar"
          >
            <ProductCards />
          </div>
        </div>
      </div>
    </div>
  )
}

export { ProductsList }

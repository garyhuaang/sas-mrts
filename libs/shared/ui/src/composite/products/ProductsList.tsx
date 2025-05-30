import { useEffect } from 'react'

import { Skeleton } from '../../base'

import ProductCards from './ProductCards'
import ProductsMoreFilters from './ProductFilters'
import ProductIndicators from './ProductIndicators'

import {
  type Product,
  reapplyOnMount,
  rStore,
  setProducts,
  useAppDispatch,
  useGetProductsQuery,
} from '@sas-mrts/rStore'

function ProductsList() {
  const { data: allProducts, isSuccess, isLoading } = useGetProductsQuery()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isSuccess) rStore.dispatch(setProducts(allProducts as Product[]))
  }, [isSuccess])

  useEffect(() => {
    dispatch(reapplyOnMount())
  }, [])

  return isLoading ? (
    <Skeleton className="w-full h-full rounded-full" />
  ) : (
    <div className="grid md:grid-cols-7 grid-cols-1 p-10 pt-3 gap-8">
      <div className="">
        <ProductsMoreFilters />
      </div>

      <div className="md:col-span-6 xs:col-span-1">
        <div className="flex flex-col w-full">
          <ProductIndicators />
          <div className="flex justify-start">
            <div
              className="grid grid-cols-1 w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
            gap-8 overflow-auto no-scrollbar"
            >
              <ProductCards />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsList

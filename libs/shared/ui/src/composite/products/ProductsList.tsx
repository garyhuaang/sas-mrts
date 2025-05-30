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
    <Skeleton className="h-full w-full rounded-full" />
  ) : (
    <div className="grid grid-cols-1 gap-8 p-10 pt-3 md:grid-cols-7">
      <div className="">
        <ProductsMoreFilters />
      </div>

      <div className="xs:col-span-1 md:col-span-6">
        <div className="flex w-full flex-col">
          <ProductIndicators />
          <div className="flex justify-start">
            <div className="no-scrollbar grid w-full grid-cols-1 gap-8 overflow-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <ProductCards />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsList

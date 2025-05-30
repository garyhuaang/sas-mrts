import { ProductsHeader, ProductsList } from '@sas-mrts/ui'

function Products() {
  return (
    <>
      <div className="w-full items-center justify-center">
        <ProductsHeader />
      </div>
      <ProductsList />
    </>
  )
}

export { Products }

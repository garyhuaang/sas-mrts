import { ProductsHeader, ProductsList } from '@sas-mrts/ui'

function Products() {
  return (
    <>
      <div className="items-center justify-center w-full">
        <ProductsHeader />
      </div>
      <ProductsList />
    </>
  )
}

export { Products }

import { ProductsHeader, ProductsList } from '@sas-mrts/ui'

function Products() {
  return (
    <>
      <div className="sticky items-center justify-center w-full overflow-auto">
        <ProductsHeader />
      </div>
      <ProductsList />
    </>
  )
}

export { Products }

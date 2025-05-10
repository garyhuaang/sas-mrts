import {
  Button,
  ButtonCounter,
  Label,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@sas-mrts/ui'

import { hero1, hero2, hero3, TruckIcon } from '@sas-mrts/common'

const MOCK_CART_DATA = [
  {
    image: (
      <img
        className="min-h-30 min-w-30 max-h-30 max-w-30 rounded-lg"
        src={hero1}
      />
    ),
    name: 'Oakwood Dining Table',
    freeShipping: true,
    price: 1234,
  },
  {
    image: (
      <img className="h-30 w-30 max-h-30 max-w-30 rounded-lg" src={hero2} />
    ),
    name: 'Linen Sofa',
    freeShipping: true,
    price: 1234,
  },
  {
    image: (
      <img className="h-30 w-30 max-h-30 max-w-30 rounded-lg" src={hero3} />
    ),
    name: 'Leather Armchair',
    freeShipping: true,
    price: 1234,
  },
]

function Cart() {
  return (
    <div className="flex flex-col reduced-viewport p-10 w-screen">
      <div className="flex flex-col w-full h-full justify-center">
        <header className="flex flex-col self-center gap-2 w-2/3 mb-8">
          <Label className="text-3xl font-bold tracking-tight">
            Shopping Cart
          </Label>
          <Label className="text-sm text-muted-foreground">{`${0} items in your cart`}</Label>
        </header>

        <div
          className="flex-center self-center border rounded-md box-border
          p-6 w-2/3 backdrop-blur-3xl"
        >
          <Table className="min-h-[200px] w-full">
            {MOCK_CART_DATA.map((data, index) => (
              <>
                <TableBody
                  className="grid grid-cols-1 border-b-2 mb-2 "
                  key={index}
                >
                  <TableRow className="hover:bg-inherit mb-2 min-w-[430px]">
                    <TableCell className="w-1/5 h-full">{data.image}</TableCell>

                    <TableCell className="w-full h-full">
                      <div className="flex flex-col h-full">
                        {data.freeShipping && (
                          <section className="flex flex-col h-1/5 self-start mb-9">
                            <h4 className="text-2xl">{data.name}</h4>
                            <Label className="flex items-center text-md font-xs gap-2 text-primary">
                              <TruckIcon className="h-4 w-4" /> Free shipping
                            </Label>
                          </section>
                        )}
                        <ButtonCounter />
                      </div>
                    </TableCell>

                    <TableCell className="w-3/5 h-full self-end">3</TableCell>
                  </TableRow>
                </TableBody>
              </>
            ))}
            <TableBody className="bg-red-600">
              <Button asChild></Button>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export { Cart }

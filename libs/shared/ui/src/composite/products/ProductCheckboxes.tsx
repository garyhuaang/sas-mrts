import { Button, Checkbox, Label, Separator } from '../../base'

import {
  resetCatgories,
  resetCompanies,
  setCategory,
  setCompany,
  useAppDispatch,
  useAppSelector,
} from '@sas-mrts/rStore'

type ProductCheckboxesProps = {
  checkboxType: 'companies' | 'categories'
  checkboxContents: string[]
}

function ProductCheckboxes({
  checkboxType,
  checkboxContents,
}: ProductCheckboxesProps) {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.products)

  return (
    <>
      <div className="flex flex-col gap-2">
        <Label className="text-lg font-medium">Category</Label>
        <Button
          className="w-1/6"
          onClick={() =>
            checkboxType === 'companies'
              ? dispatch(resetCompanies())
              : dispatch(resetCatgories())
          }
        >
          Reset
        </Button>
        <Separator className="bg-primary w-20" />
        {checkboxContents.map((content, index) => (
          <div
            className="flex gap-2"
            key={index}
            onClick={() =>
              checkboxType === 'companies'
                ? dispatch(setCompany(content))
                : dispatch(setCategory(content))
            }
          >
            <Checkbox
              checked={
                checkboxType === 'companies'
                  ? state.companies.includes(content)
                  : state.categories.includes(content)
              }
              id={`category-${content}`}
            />
            <Label className="text-sm font-medium">{content}</Label>
          </div>
        ))}
      </div>
      <Separator className="bg-primary" />
    </>
  )
}

export { ProductCheckboxes }

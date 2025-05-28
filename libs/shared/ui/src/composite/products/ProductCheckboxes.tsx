import { Button, Checkbox, Label, Separator } from '../../base'

type ProductCheckboxesProps = {
  checkboxContents: string[]
  checkedItems: string[]
  label?: string
  onClickCheckbox: (content: string) => void
  onClickReset: () => void
}

function ProductCheckboxes({
  checkboxContents,
  checkedItems,
  label,
  onClickCheckbox,
  onClickReset,
}: ProductCheckboxesProps) {
  return (
    <>
      <div className="flex flex-col gap-2">
        {label && <Label className="text-lg font-medium">{label}</Label>}
        <Button
          className="w-1/2"
          onClick={() => onClickReset()}
          variant="outline"
        >
          Reset
        </Button>
        <Separator className="bg-primary w-20" />
        {checkboxContents.map((content, index) => (
          <div
            className="flex gap-2"
            key={index}
            onClick={() => onClickCheckbox(content)}
          >
            <Checkbox
              checked={checkedItems.includes(content)}
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

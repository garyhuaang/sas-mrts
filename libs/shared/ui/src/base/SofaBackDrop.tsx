import { SofaIcon } from '@sas-mrts/common'

function SofaBackDrop() {
  return (
    <div
      className="flex flex-col h-full w-full fixed
text-gray-700 opacity-15 -z-10 overflow-hidden justify-center"
    >
      <SofaIcon className="w-250 h-250 self-center" />
    </div>
  )
}

export { SofaBackDrop }

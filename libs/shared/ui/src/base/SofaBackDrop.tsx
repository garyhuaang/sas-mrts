import { SofaIcon } from '@sas-mrts/common'

function SofaBackDrop() {
  return (
    <div
      className="flex flex-col fixed h-screen w-screen
    text-gray-700 opacity-15 -z-1 justify-center"
    >
      <SofaIcon className="w-250 h-250 self-center" />
    </div>
  )
}

export { SofaBackDrop }

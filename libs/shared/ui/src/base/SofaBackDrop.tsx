import { SofaIcon } from '@sas-mrts/common'

function SofaBackDrop() {
  return (
    <div
      className="flex flex-col absolute h-screen
    text-gray-700 opacity-15 -z-1 justify-center"
    >
      <SofaIcon className="w-screen h-screen self-center" />
    </div>
  )
}

export { SofaBackDrop }

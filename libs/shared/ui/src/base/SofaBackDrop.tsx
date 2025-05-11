import { SofaIcon } from '@sas-mrts/common'

function SofaBackDrop() {
  return (
    <div
      className="flex flex-col fixed h-screen w-screen
    text-secondary opacity-100 -z-1 justify-center"
    >
      <SofaIcon className="w-250 h-250 self-center" />
    </div>
  )
}

export { SofaBackDrop }

import { SofaIcon } from '@sas-mrts/common'

function SofaBackDrop() {
  return (
    <div
      className="flex flex-col fixed h-screen w-screen
    text-secondary opacity-10 -z-1 justify-center blur-3xl"
    >
      <SofaIcon className="w-250 h-250 self-center text-secondary-foreground" />
    </div>
  )
}

export { SofaBackDrop }

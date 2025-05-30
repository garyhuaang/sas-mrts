import { SofaIcon } from '@sas-mrts/common'

function SofaBackDrop() {
  return (
    <div className="-z-1 fixed flex h-screen w-screen flex-col justify-center text-secondary opacity-10 blur-3xl">
      <SofaIcon className="w-250 h-250 self-center text-secondary-foreground" />
    </div>
  )
}

export default SofaBackDrop

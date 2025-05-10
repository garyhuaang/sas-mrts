import { useNavigate } from 'react-router-dom'

import { Button } from '../../base/button'

import { SofaIcon } from '@sas-mrts/common'

function NavLogo() {
  const navigate = useNavigate()

  return (
    <Button asChild className="p-2" onClick={() => navigate('/')}>
      <SofaIcon className="h-12 w-12" />
    </Button>
  )
}

export { NavLogo }

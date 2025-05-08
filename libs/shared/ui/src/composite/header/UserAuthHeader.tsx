import { useNavigate } from 'react-router-dom'

import { Button } from '../../base'

function UserAuthHeader() {
  const navigate = useNavigate()

  return (
    <div className="flex justify-end items-center gap-2 h-[30px] p-2 px-8b bg-current">
      <Button
        className="text-secondary text-xs cursor-pointer"
        onClick={() => navigate('/auth')}
        variant="link"
      >
        Login/Register
      </Button>
    </div>
  )
}

export { UserAuthHeader }

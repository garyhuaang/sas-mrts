import { useNavigate } from 'react-router-dom'

import { Button } from '../../base'

const AuthHeader = function AuthHeader() {
  const navigate = useNavigate()

  return (
    <div className="flex-center gap-2 h-[30px] p-2 px-8 bg-background">
      <Button
        className="text-primary text-xs cursor-pointer"
        onClick={() => navigate('/auth')}
        variant="link"
      >
        Login/Register
      </Button>
    </div>
  )
}

export { AuthHeader }

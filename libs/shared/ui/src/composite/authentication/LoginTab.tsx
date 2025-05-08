import {
  Button,
  Card,
  CardContent,
  CardFooter,
  Input,
  Label,
  TabsContent,
} from '../../base'

function LoginTab() {
  const handleLogin = (e: React.FormEvent<Element>) => {
    e.preventDefault()
  }

  return (
    <TabsContent value="login">
      <form onSubmit={(e: React.FormEvent<Element>) => handleLogin(e)}>
        <Card className="flex-center flex-col gap-3 h-80 w-[408px]">
          <CardContent className="flex flex-col w-full gap-3">
            <Label className="self-start">Email</Label>
            <Input placeholder="name@gmail.com" type="email"></Input>
            <Label className="self-start">Password</Label>
            <Input placeholder="● ● ● ●" type="password"></Input>
          </CardContent>
          <CardFooter className="flex justify-center gap-6 w-full">
            <Button className="w-full cursor-pointer">Sign In</Button>
            <Button className="w-full cursor-pointer" variant="secondary">
              Guest User
            </Button>
          </CardFooter>
        </Card>
      </form>
    </TabsContent>
  )
}

export { LoginTab }

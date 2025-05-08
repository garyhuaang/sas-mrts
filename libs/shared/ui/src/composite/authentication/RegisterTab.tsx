import {
  Button,
  Card,
  CardContent,
  CardFooter,
  Input,
  Label,
  TabsContent,
} from '../../base'

function RegisterTab() {
  const handleRegister = (e: React.FormEvent<Element>) => {
    e.preventDefault()
  }

  return (
    <TabsContent value="register">
      <form onSubmit={(e: React.FormEvent<Element>) => handleRegister(e)}>
        <Card className="flex-center flex-col gap-3 h-80 w-[408px]">
          <CardContent className="flex flex-col w-full gap-3">
            <Label className="self-start pt-4">Username</Label>
            <Input placeholder="StoneAndSable" type="identifier"></Input>
            <Label className="self-start">Email</Label>
            <Input placeholder="name@gmail.com" type="email"></Input>
            <Label className="self-start">Password</Label>
            <Input placeholder="● ● ● ●" type="password"></Input>
          </CardContent>
          <CardFooter className="flex justify-center gap-6 w-full">
            <Button className="w-full cursor-pointer">Register</Button>
          </CardFooter>
        </Card>
      </form>
    </TabsContent>
  )
}

export { RegisterTab }

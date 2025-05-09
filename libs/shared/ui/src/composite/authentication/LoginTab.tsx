import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  Button,
  Card,
  CardContent,
  Form,
  FormInput,
  TabsContent,
} from '../../base'

import { zodResolver } from '@hookform/resolvers/zod'
import { loginFormSchema, postLogin, rStore } from '@sas-mrts/rStore'

const LoginTab = React.memo(function LoginTab() {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      identifier: '',
      password: '',
    },
  })

  const handleLogin = () => {
    rStore.dispatch(postLogin(form.getValues()))
    form.reset()
  }

  return (
    <TabsContent className="mt-0" value="login">
      <Card className="flex-center flex-col gap-3 h-80 w-[408px]">
        <CardContent className="flex flex-col w-full gap-3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleLogin)}>
              <FormInput
                control={form.control}
                label="Email"
                name="identifier"
                placeholder="name@sas.com"
                type="email"
              />
              <FormInput
                control={form.control}
                label="Password"
                name="password"
                placeholder="password"
                type="password"
              />
              <div className="flex gap-4 mt-6">
                <Button className="w-full cursor-pointer" type="submit">
                  Sign In
                </Button>
                <Button className="w-full cursor-pointer" variant="secondary">
                  Guest User
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </TabsContent>
  )
})

export { LoginTab }

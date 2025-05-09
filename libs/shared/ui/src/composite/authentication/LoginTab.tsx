import React from 'react'
import { useCookies } from 'react-cookie'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
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
import {
  type AuthResponse,
  loginFormSchema,
  postLogin,
  rStore,
} from '@sas-mrts/rStore'

const LoginTab = React.memo(function LoginTab() {
  const [_, setCookie] = useCookies<'user', AuthResponse>(['user'])
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      identifier: '',
      password: '',
    },
  })

  const handleLogin = async () => {
    await rStore.dispatch(postLogin(form.getValues()))
    form.reset()
    const userState = rStore.getState().user

    if (userState.confirmed) {
      setCookie(
        'user',
        { jwt: userState.jwt, username: userState.username },
        { expires: new Date(Date.now() + 60 * 60 * 1000) }
      )
      navigate('/')
    }
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

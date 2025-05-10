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
import { useToast } from '../../lib'

import { zodResolver } from '@hookform/resolvers/zod'
import type { PayloadAction } from '@reduxjs/toolkit'
import { guestCredentials } from '@sas-mrts/common'
import {
  type AuthResponse,
  loginFormSchema,
  postLogin,
  rStore,
} from '@sas-mrts/rStore'

const LoginTab = React.memo(function LoginTab() {
  const [_, setCookie] = useCookies<'user', AuthResponse>(['user'])
  const userState = rStore.getState().user
  const navigate = useNavigate()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      identifier: '',
      password: '',
    },
  })

  const handleLogin = async () => {
    const response = (await rStore.dispatch(
      postLogin(form.getValues())
    )) as PayloadAction<AuthResponse>

    if (response.payload.error?.status !== 400) {
      setCookie(
        'user',
        { jwt: userState.jwt, username: userState.username },
        { expires: new Date(Date.now() + 60 * 60 * 1000) }
      )
      toast({
        title: 'Login success!',
        description: 'Your future abode awaits...',
      })

      return navigate('/')
    }

    toast({
      title: 'Login failed',
      description: 'Incorrect email or password',
    })
  }

  return (
    <TabsContent className="mt-0" value="login">
      <Card className="flex-center flex-col gap-3 h-80 w-[408px] ">
        <CardContent className="flex flex-col w-full gap-3 motion-preset-fade-md">
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
              <div className="flex gap-4 mt-10">
                <Button className="w-full cursor-pointer" type="submit">
                  Sign In
                </Button>
                <Button
                  className="w-full cursor-pointer"
                  onClick={() => {
                    form.setValue('identifier', guestCredentials.identifier)
                    form.setValue('password', guestCredentials.password)

                    return form.handleSubmit(handleLogin)
                  }}
                  variant="secondary"
                >
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

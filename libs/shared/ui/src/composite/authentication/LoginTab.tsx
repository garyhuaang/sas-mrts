import React, { useState } from 'react'
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
import { ReloadIcon } from '@radix-ui/react-icons'
import { guestCredentials, tryCatch } from '@sas-mrts/common'
import {
  type AuthResponse,
  type LoginCredentials,
  loginFormSchema,
  usePostLoginMutation,
} from '@sas-mrts/rStore'

function LoginTab() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setCookie] = useCookies<'user', AuthResponse>(['user'])
  const [loginTrigger] = usePostLoginMutation()
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      identifier: '',
      password: '',
    },
    mode: 'onChange',
  })

  const identifierFilled = form.watch('identifier')
  const passwordFilled = form.watch('password')
  const hasEmptyFields = !identifierFilled || !passwordFilled

  const handleLogin = async () => {
    const credentials: LoginCredentials = form.getValues()
    const { data: response } = await tryCatch(loginTrigger(credentials))

    setSubmitting(true)

    if (response?.error) {
      setSubmitting(false)

      return toast({
        title: 'Login failed',
        description: 'Incorrect email or password',
      })
    }

    setCookie(
      'user',
      { jwt: response?.data.jwt, username: response?.data.user.username },
      { expires: new Date(Date.now() + 60 * 60 * 60 * 1000) }
    )
    toast({
      title: 'Login success!',
      description: 'Your future abode awaits...',
    })
    localStorage.setItem('username', response?.data.user.username as string)
    localStorage.removeItem('filteredItems')
    localStorage.removeItem('categories')
    localStorage.removeItem('companies')

    setSubmitting(false)

    return navigate('/')
  }

  return (
    <TabsContent className="mt-0" value="login">
      <Card className="flex-center flex-col gap-3 h-80 w-[408px] backdrop-blur-3xl">
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
                {submitting ? (
                  <Button className="w-full text-foreground button-disabled">
                    <span className="flex-center">
                      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                      Loggin in...
                    </span>
                  </Button>
                ) : (
                  <>
                    <Button
                      className={`w-full text-foreground ${hasEmptyFields && 'button-disabled'}`}
                      type="submit"
                    >
                      Sign In
                    </Button>
                    <Button
                      className="w-full text-foreground"
                      onClick={() => {
                        form.setValue('identifier', guestCredentials.identifier)
                        form.setValue('password', guestCredentials.password)

                        return form.handleSubmit(handleLogin)
                      }}
                      variant="secondary"
                    >
                      Guest User
                    </Button>
                  </>
                )}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </TabsContent>
  )
}

export { LoginTab }

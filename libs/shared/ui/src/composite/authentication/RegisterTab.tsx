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
import { useToast } from '../../lib'

import { zodResolver } from '@hookform/resolvers/zod'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
  type AuthResponse,
  postRegister,
  registerFormSchema,
  rStore,
} from '@sas-mrts/rStore'

const RegisterTab = React.memo(function RegisterTab() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  })

  const handleRegister = async () => {
    const response = (await rStore.dispatch(
      postRegister(form.getValues())
    )) as PayloadAction<AuthResponse>

    if (response.payload.error?.status === 400) {
      return toast({
        title: 'Registration failed',
        description: 'Username/email already taken',
      })
    }

    toast({
      title: 'Registration success!',
      description: 'Please sign back in',
    })

    return form.reset()
  }

  return (
    <TabsContent className="mt-0" value="register">
      <Card className="flex-center flex-col gap-3 h-80 w-[408px] backdrop-blur-3xl">
        <CardContent className="flex flex-col w-full gap-3 pt-4 motion-preset-fade-md">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleRegister)}>
              <FormInput
                control={form.control}
                label="Username"
                name="username"
                placeholder="your_username"
                type="text"
              />
              <FormInput
                control={form.control}
                label="Email"
                name="email"
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
              <div className="flex gap-4 mt-8">
                <Button className="w-full" type="submit">
                  Register
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </TabsContent>
  )
})

export { RegisterTab }

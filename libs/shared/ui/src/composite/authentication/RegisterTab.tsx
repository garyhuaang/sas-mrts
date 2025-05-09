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
import { postRegister, registerFormSchema, rStore } from '@sas-mrts/rStore'

const RegisterTab = React.memo(function RegisterTab() {
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  })

  const handleRegister = () => {
    rStore.dispatch(postRegister(form.getValues()))
    form.reset()
  }

  return (
    <TabsContent className="mt-0" value="register">
      <Card className="flex-center flex-col gap-3 h-80 w-[408px]">
        <CardContent className="flex flex-col w-full gap-3">
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
              <div className="flex gap-4 mt-6">
                <Button className="w-full cursor-pointer" type="submit">
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

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
import { tryCatch } from '@sas-mrts/common'
import {
  type RegisterCredentials,
  registerFormSchema,
  usePostRegisterMutation,
} from '@sas-mrts/rStore'

function RegisterTab() {
  const { toast } = useToast()
  const [registerTrigger] = usePostRegisterMutation()

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  })

  const usernameFilled = form.watch('username')
  const emailFilled = form.watch('email')
  const passwordFilled = form.watch('password')
  const hasEmptyFields = !usernameFilled || !emailFilled || !passwordFilled

  const handleRegister = async () => {
    const credentials: RegisterCredentials = form.getValues()
    const { data: response } = await tryCatch(registerTrigger(credentials))

    if (response?.error) {
      return toast({
        title: 'Registration failed',
        description: 'Username/Email invalid or taken',
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
      <Card className="flex-center h-80 w-[408px] flex-col gap-3 backdrop-blur-3xl">
        <CardContent className="motion-preset-fade-md flex w-full flex-col gap-3 pt-4">
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
              <div className="mt-8 flex gap-4">
                <Button
                  className={`w-full ${hasEmptyFields && 'button-disabled'}`}
                  type="submit"
                >
                  Register
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </TabsContent>
  )
}

export { RegisterTab }

import {
  LoginTab,
  NavBar,
  RegisterTab,
  SofaBackdrop,
  Tabs,
  TabsList,
  TabsTrigger,
} from '@sas-mrts/ui'

import { nonUserShopRoutes } from '../routes'

function Auth() {
  return (
    <div className="flex-center min-h-screen w-screen flex-col">
      <NavBar className="absolute top-0 w-full" routes={nonUserShopRoutes} />

      <Tabs
        className="flex-center w-[408px] flex-col gap-5"
        defaultValue="login"
        id="tabs"
      >
        <h1 className="leading-1 self-center text-3xl font-bold">Welcome</h1>
        <span className="text-gray-500 tracking-tight">
          Sign into your account or create a new one
        </span>
        <TabsList className="grid w-full grid-cols-2 shadow-md backdrop-blur-sm">
          <TabsTrigger value="login">Sign In</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>

        <LoginTab />
        <RegisterTab />
      </Tabs>

      <SofaBackdrop />
    </div>
  )
}

export { Auth }

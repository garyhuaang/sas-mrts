import {
  LoginTab,
  NavBar,
  RegisterTab,
  SofaBackDrop,
  Tabs,
  TabsList,
  TabsTrigger,
} from '@sas-mrts/ui'

import { nonUserShopRoutes } from '../routes'

function Auth() {
  return (
    <div className="flex-center flex-col min-h-screen w-screen">
      <NavBar className="absolute top-0 w-full" routes={nonUserShopRoutes} />

      <Tabs
        className="w-[408px] flex-center flex-col gap-5"
        defaultValue="login"
        id="tabs"
      >
        <h1 className="font-bold text-3xl self-center leading-1">Welcome</h1>
        <span className="text-gray-500 tracking-tight">
          Sign into your account or create a new one
        </span>
        <TabsList className="grid w-full grid-cols-2 shadow-md backdrop-blur-sm">
          <TabsTrigger value="login">Sign In</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>

        <div className="backdrop-blur-sm">
          <LoginTab />
          <RegisterTab />
        </div>
      </Tabs>

      <SofaBackDrop />
    </div>
  )
}

export { Auth }

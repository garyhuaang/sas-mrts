import type { FunctionComponent, SVGProps } from 'react'

type Route = {
  name: string
  path: string
}

type Value = {
  image: FunctionComponent<SVGProps<SVGSVGElement>>
  value: string
  description: string
}

export type { Route, Value }

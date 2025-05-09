import type { FunctionComponent, SVGProps } from 'react'

import { BetweenIcon, CheckmarkCircleIcon, RadioIcon } from '../assets/svg'

type Section = {
  image: FunctionComponent<SVGProps<SVGSVGElement>>
  value: string
  description: string
}
const icons = [CheckmarkCircleIcon, RadioIcon, BetweenIcon]

const sections = [
  'Quality Craftsmanship',
  'Sustainable Practices',
  'Thoughtful Design',
]

const sectionDescriptors = [
  'We believe in creating pieces that stand the test of time, both in style and durability.',
  "We're committed to responsible sourcing and manufacturing processes that minimize environmental impact.",
  'We create pieces that are not only beautiful but also functional and adaptable to modern living.',
]

export const processes = [
  {
    name: 'Design & Concept',
    description:
      'Our designers sketch ideas and create prototypes, refining each detail.',
  },
  {
    name: 'Material Selection',
    description:
      'We source the finest sustainable materials from trusted partners.',
  },
  {
    name: 'Craftsmanship',
    description:
      'Skilled artisans bring designs to life with meticulous attention to detail.',
  },
  {
    name: 'Quality Control',
    description:
      'Each piece undergoes rigorous testing to ensure it meets our standards.',
  },
]

export const values: Section[] = [
  {
    image: icons[0],
    value: sections[0],
    description: sectionDescriptors[0],
  },
  {
    image: icons[1],
    value: sections[1],
    description: sectionDescriptors[1],
  },
  {
    image: icons[2],
    value: sections[2],
    description: sectionDescriptors[2],
  },
]

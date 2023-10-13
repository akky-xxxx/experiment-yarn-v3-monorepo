import { Counter } from "./index"

import type { Meta, StoryObj } from "@storybook/react"
import { ComponentProps } from "react"

type CounterType = typeof Counter
type CounterProps = ComponentProps<CounterType>

const meta: Meta<CounterProps> = {
  component: Counter
}

export default meta

export const Default: StoryObj<CounterProps> = {}

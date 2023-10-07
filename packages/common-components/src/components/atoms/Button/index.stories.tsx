import { Button } from "./index"

import type { Meta, StoryObj } from "@storybook/react"
import { ComponentProps } from "react"

type ButtonType = typeof Button
type ButtonProps = ComponentProps<ButtonType>

const meta: Meta<ButtonProps> = {
  component: Button,

  args: {
    children: "children"
  }
}

export default meta

export const Default: StoryObj<ButtonProps> = {}

import { userEvent, within } from "@storybook/testing-library"

import { InputField } from "./index"

import type { Meta, StoryObj } from "@storybook/react"
import type { ComponentProps } from "react"

type Props = ComponentProps<typeof InputField>
type Story = StoryObj<Props>

const meta: Meta<Props> = {
  component: InputField,
  args: {
    label: "label text：",
  },
}

export default meta

export const Default: Story = {}

export const Inputted: Story = {
  play: async (context) => {
    const canvas = within(context.canvasElement)
    await userEvent.type(canvas.getByRole("textbox"), "input text", {
      delay: 50,
    })
  },
}

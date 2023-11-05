import { View } from "./View"
import { AvailableResponse } from "./spec/AvailableResponse"

import type { Meta, StoryObj } from "@storybook/react"
import type { ComponentProps } from "react"

type Props = ComponentProps<typeof View>

const meta: Meta<Props> = {
  component: View,
}

export default meta

export const NotList: StoryObj<Props> = {
  args: {
    list: [],
  },
}

export const HasList: StoryObj<Props> = {
  args: {
    list: AvailableResponse,
  },
}

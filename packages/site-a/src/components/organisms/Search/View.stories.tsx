import { View } from "./View"

import type { Meta, StoryObj } from "@storybook/react"
import type { ComponentProps } from "react"

type Props = ComponentProps<typeof View>

const meta: Meta<Props> = {
  component: View,
  args: {
    handleChangeStatus: () => {
      console.count("handleChangeStatus")
    },
    handleSubmitSearch: (event) => {
      event.preventDefault()
      console.count("handleSubmitSearch")
    },
    selectedStatus: null,
  },
}

export default meta

export const Blank: StoryObj<Props> = {}

export const SelectedAvailable: StoryObj<Props> = {
  args: {
    selectedStatus: "available",
  },
}

export const SelectedPending: StoryObj<Props> = {
  args: {
    selectedStatus: "pending",
  },
}

export const SelectedSold: StoryObj<Props> = {
  args: {
    selectedStatus: "sold",
  },
}
